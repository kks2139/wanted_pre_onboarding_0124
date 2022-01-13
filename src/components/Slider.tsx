import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {slideItemList} from '../datas/data';
import SlideItem from './SlideItem';

function Slider() {
    const style = css`
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;

        .btn-slide {
            z-index: 10;
            position: absolute;
            width: 30px;
            height: 60px;
            border: 30px;
            background-color: rgb(198,198,198,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 30px;
            box-shadow: 0 2px 9px -6px black;

            span {
                color: #686868;
                transform: scale(1, 2);
            }

            &.left {
                left: 7%;
            }
            &.right {
                right: 7%;
            }
        }
    `;

    return (
        <div css={style}>
            <button className='btn-slide left'>
                <span>&lt;</span>
            </button>
            {slideItemList.map(item => (
                <SlideItem key={item.url} item={item}/>
            ))}
            <button className='btn-slide right'>
                <span>&gt;</span>
            </button>
        </div>
    );
}

export default Slider;
