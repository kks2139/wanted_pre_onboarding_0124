import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {ISlideItem} from '../datas/data';

interface Props {
  item: ISlideItem
}

function SliderItem({item}: Props) {
  const style = css`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0 11px;

    img {
      width: 1060px;
      height: 300px;
      border-radius: 5px;
    }

    .info-box {
      position: absolute;
      left: 35px;
      bottom: 30px;
      width: 330px;
      height: 145px;
      border-radius: 5px;
      background-color: white;
      padding: 15px;

      .title-box {
        .title {
  
        }
        .subtitle {
  
        }
      }

      .link-box {

      }
    }
  `;

  return (
    <div css={style}>
      <img src={item.url} alt={item.title}></img>
      <div className='info-box'>
        <div className='title-box'>
          <div className='title'>{item.title}</div>
          <div className='subtitle'>{item.subtitle}</div>
        </div>
        <div className='link-box'>
          <a href='/' className='link'>바로가기</a>
        </div>
      </div>
    </div>
  );
}

export default SliderItem;
