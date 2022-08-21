import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const baseUrl = 'https://github.com/login/oauth/access_token';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, userinfo } = await getUser(req);
    console.log(data);
    console.log(userinfo);

    return res.status(200).redirect('/home');
  } catch (err) {
    console.error(err);
    return res.status(500).redirect('/non-login');
  }
}

async function getUser(req: NextApiRequest) {
  const { code } = req.query;
  const { data: requestToken } = await axios.post(
    baseUrl,
    {
      client_id: process.env.NEXT_PUBLIC_GITHUB_ID,
      client_secret: process.env.GITHUB_SECRET,
      code,
    },
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

  console.log(`requestToken`, requestToken);

  const { access_token, token_type, scope } = requestToken;

  const { data } = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT + '/auth/login', {
    access_token,
    token_type,
    scope,
  });

  const { data: userinfo } = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return { data, userinfo };
}
