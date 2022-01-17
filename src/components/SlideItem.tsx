import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {ISlideItem} from '../datas/data';
import {screen} from '../datas/style';

interface Props {
  item: ISlideItem
  isFocus: boolean
  width: number
  space: number
  onMouseDown: (event: React.MouseEvent)=> void
  onMouseMove: (event: React.MouseEvent)=> void
  onMouseUp: (event: React.MouseEvent)=> void
  onMouseLeave: (event: React.MouseEvent)=> void
  onMouseOver: (event: React.MouseEvent)=> void
  onMouseOut: (event: React.MouseEvent)=> void
}

function SliderItem({
  item, 
  isFocus, 
  width, 
  space, 
  onMouseDown, 
  onMouseMove, 
  onMouseUp, 
  onMouseLeave,
  onMouseOver,
  onMouseOut
}: Props) {

  const style = css`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0 ${space}px;

    img {
      width: ${width}px;
      height: 300px;
      border-radius: 5px;
      object-fit: cover;
      ${!isFocus ? 'filter: brightness(0.5)' : ''};
      cursor: pointer;
    }

    .info-box {
      display: ${isFocus ? 'block' : 'none'};
      position: absolute;
      left: 35px;
      bottom: 30px;
      width: 330px;
      height: 145px;
      border-radius: 5px;
      background-color: white;

      animation: fade-in .4s;
      
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
          color: #666666;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .link-box {
        padding: 15px 20px;
        a {
          position: relative;
          font-size: 14px;
          color: #3366ff;
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

      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }

    @media screen and (max-width: ${screen.wide}){
      flex-direction: column;
      align-items: center;
      img {
        height: 183px;
      }
      .info-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        left: unset;
        bottom: unset;
        .title-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 18px;
          border-bottom: 0;
          .subtitle {
            padding: 0 0 0 10px;
          }
        }
        .link-box {
          padding: 7px;
        }
      }
    }

    @media screen and (max-width: ${screen.narrow}){
      .info-box {
        width: ${width}px;
        .title-box {
          .title, .subtitle {
            text-align: center;

            width: ${width}px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  `;

  return (
    <div 
      css={style} 
      data-center={isFocus ? 'center' : ''}
      onMouseDown={onMouseDown} 
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}>
      <img src={item.url} alt={item.title} draggable={false}/>
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
