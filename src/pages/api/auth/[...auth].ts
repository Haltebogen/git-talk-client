import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const baseUrl = 'https://github.com/login/oauth/access_token';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;
  try {
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

    // api 구현되면 넘겨주기
    // const { access_token, token_type, scope } = requestToken;

    return res.status(201).redirect('/home');
  } catch (err) {
    console.error(err);
    return res.redirect(500, '/?loginError=서버 에러로 인한 로그인 실패');
  }
}
