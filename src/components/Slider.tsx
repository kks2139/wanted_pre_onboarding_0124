import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {slideItemList} from '../datas/data';
import SlideItem from './SlideItem';
import { useEffect } from 'react';
import { useRef } from 'react';

function Slider() {
    const timer = useRef(0);

    useEffect(()=>{
        timer.current = window.setTimeout(()=>{

        }, 1000);
        return ()=> {
            clearInterval(timer.current);
        }
    }, []);

    const style = css`
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;

        .btn-box {
            position: absolute;
            width: 1210px;
            .btn-slide {
                z-index: 10;
                position: absolute;
                width: 30px;
                height: 60px;
                background-color: rgb(198,198,198,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 30px;
                /* box-shadow: 0 2px 8px -6px black; */
                transform: translateY(-50%);
    
                span {
                    color: #686868;
                    transform: scale(1, 2);
                }
    
                &.left {
                    left: 0;
                }
                &.right {
                    right: 0;
                }
            }
        }
    `;

    return (
        <div css={style}>
            {slideItemList.map(item => (
                <SlideItem key={item.url} item={item}/>
            ))}
            <div className='btn-box'>
                <button className='btn-slide left'>
                    <span>&lt;</span>
                </button>
                <button className='btn-slide right'>
                    <span>&gt;</span>
                </button>
            </div>
        </div>
    );
}

export default Slider;
