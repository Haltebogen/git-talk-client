import styled, { css } from 'styled-components';
import Company from '@/icons/company.svg';
import StatusMessages from '@/icons/status_messages.svg';
import Follower from '@/icons/follower.svg';

export const Container = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      gap: 0.4375rem;
      font-size: ${fontSize.xs};
      color: ${colors.gray};
      justify-content: flex-start;
      padding-left: 2.3125rem;
    `;
  }}
`;

export const Message = styled.div`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      font-size: ${fontSize.xxs};
      width: 100%;
    `;
  }}
`;

export interface ProfileDetailProps {
  type: 'FOLLOWER' | 'COMPANY' | 'MESSAGE';
  text: string;
}

const ProfileDetail = ({ type, text }: ProfileDetailProps) => {
  return (
    <Container>
      {type === 'FOLLOWER' && (
        <div>
          <Follower />
        </div>
      )}
      {type === 'COMPANY' && (
        <div>
          <Company />
        </div>
      )}
      {type === 'MESSAGE' && (
        <div>
          <StatusMessages />
        </div>
      )}
      {type !== 'MESSAGE' ? <span>{text}</span> : <Message>{text}</Message>}
    </Container>
  );
};

export default ProfileDetail;
