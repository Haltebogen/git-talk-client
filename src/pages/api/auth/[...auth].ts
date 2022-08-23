import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { setAuthToken } from 'utils/storage/authCookie';
const baseUrl = 'https://github.com/login/oauth/access_token';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await getUser(req);
    setAuthToken(res, data.accessToken, data.refreshToken);

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

  const { access_token, token_type, scope } = requestToken;

  const { data } = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT + '/auth/login', {
    access_token,
    token_type,
    scope,
  });

  return data;
}
