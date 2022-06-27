import React from 'react';
import styled from 'styled-components';
import MainLogo from '../../../assets/icons/mainlogo.svg';

const ContainerMainLogo = styled.div`
  .MainLogo {
    width: 54.25rem;
    height: 54.25rem;
  }
`;

const HomeLogo = () => {
  return (
    <ContainerMainLogo>
      <MainLogo alt="MainLogo" className="MainLogo" />
    </ContainerMainLogo>
  );
};

export default HomeLogo;
