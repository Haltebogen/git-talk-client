import styled, { css } from 'styled-components';
import Company from '@/icons/company.svg';
import StatusMessages from '@/icons/status_messages.svg';
import Follower from '@/icons/follower.svg';

const Container = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      font-size: ${fontSize.xs};
      color: ${colors.gray};
      justify-content: flex-start;
      padding: 0 2rem 0 2.3125rem;
    `;
  }}
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 0.4375rem;

  svg {
    width: 100%;
    max-width: 1.5rem;
  }
`;

const Message = styled.div`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      font-size: ${fontSize.xxs};
      width: 100%;
    `;
  }}
`;

export type InfoType = 'follow' | 'company' | 'message';

export interface ProfileDetailProps {
  InfoType: InfoType;
  text?: string | null;
  following?: number;
  follower?: number;
}

const ProfileDetail = ({ InfoType, text, following, follower }: ProfileDetailProps) => {
  return (
    <Container>
      {InfoType === 'follow' && (
        <Content>
          <Follower />
          <span>
            {following} following - {follower} follower
          </span>
        </Content>
      )}
      {InfoType === 'company' && (
        <Content>
          <Company />
          <span>{text}</span>
        </Content>
      )}
      {InfoType === 'message' && (
        <Content>
          <StatusMessages />
          <Message>{text}</Message>
        </Content>
      )}
    </Container>
  );
};

export default ProfileDetail;
