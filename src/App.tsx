import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import Header from './components/Header';
import Slider from './components/Slider';
import {screen} from './datas/style';

function App() {
  const style = css`
    main {
      margin-top: 50px;
      padding-top: 25px;
    }

    @media screen and (max-width: ${screen.wide}){
    }
    
    @media screen and (max-width: ${screen.middle}){
    }
    
    @media screen and (max-width: ${screen.narrow}){
    }
  `;

  return (
    <div css={style}>
      <Header/>
      <main>
        {/* <Slider/> */}
      </main>
    </div>
  );
}

export default App;
