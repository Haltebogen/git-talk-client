import React from 'react';
import styled, { css } from 'styled-components';

const EditBtn = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      background-color: ${colors.primary};
      color: ${colors.white};
      text-decoration: none;
      border: none;
      padding: 0.625rem 4.6275rem;
      font-size: ${fontSize.xxs};
      border-radius: 0.625rem;
      &:hover {
        cursor: pointer;
      }
      a {
        color: ${colors.white};
      }
    `;
  }}
`;

const EditProfileBtn = () => {
  return <EditBtn>Edit Profile</EditBtn>;
};

export default EditProfileBtn;
