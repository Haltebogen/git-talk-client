import BasicButton from '@/buttons/BasicButton';
import styled, { css } from 'styled-components';
import type { NextPage } from 'next';
// import Mainlogo from '@/icons/mainlogo.svg';

const Home: NextPage = () => {
  const Container = styled.div`
    ${({ theme }) => {
      const { colors, fontSize } = theme;
      return css`
        background-color: ${colors.bgcolor};
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
          color: ${colors.navy};
          font-size: ${fontSize.title};
          margin: 0;
        }

        p {
          color: ${colors.navy};
          font-size: ${fontSize.xl};
          padding: 1.8125rem 0 3.5rem 0;
        }
      `;
    }}
  `;

  return (
    <Container>
      {/* atom logo로 수정 후 적용 */}
      {/* <Mainlogo /> */}
      <h2>GIT TALK</h2>
      <p>GITHUB 유저들과 채팅할 수 있는 공간</p>
      <BasicButton ariaLabel="login" type="submit" onClick={() => console.log('로그인!')}>
        GITHUB 로그인
      </BasicButton>
    </Container>
  );
};

export default Home;
