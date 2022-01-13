import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  const style = css`
    main {
      margin-top: 50px;
      padding-top: 25px;
      border: 1px solid red;
    }
  `;

  return (
    <div css={style}>
      <Header/>
      <main>
        <Slider/>
      </main>
    </div>
  );
}

export default App;
