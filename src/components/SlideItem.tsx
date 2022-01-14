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
      cursor: pointer;
    }

    .info-box {
      position: absolute;
      left: 35px;
      bottom: 30px;
      width: 330px;
      height: 145px;
      border-radius: 5px;
      background-color: white;
      
      .title-box {
        border-bottom: 1px solid #e4e4e4;
        .title {
          padding: 20px 20px 0 20px;
          font-size: 20px;
          font-weight: bold;
        }
        .subtitle {
          padding: 6px 20px 20px 20px;
          font-size: 14px;
          color: #333333;
        }
      }

      .link-box {
        padding: 15px 20px;
        a {
          position: relative;
          font-size: 14px;
          color: #3264fa;
          font-weight: bold;
          &::after {
            position: absolute;
            content: '>';
            font-weight: normal;
            padding-left: 10px;
            transform: scale(1, 1.5) translateY(-1px);
          }
        }
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
