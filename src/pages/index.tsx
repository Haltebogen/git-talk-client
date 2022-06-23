import type { NextPage } from 'next';
import React from 'react';
import PlusBtn from '../components/atoms/buttons/PlusBtn';
import BackColor from '../components/atoms/resources/Background';
const Home: NextPage = () => {
  return (
    // <div>
    <BackColor>
      <PlusBtn />
      <div>HO~~ME</div>
    </BackColor>
    // </div>
  );
};

export default Home;
