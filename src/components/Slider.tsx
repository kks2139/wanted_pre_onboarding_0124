import React, { useState, useMemo } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {slideItemList as originalList} from '../datas/data';
import SlideItem from './SlideItem';
import { useEffect } from 'react';
import { useRef } from 'react';
import {screen} from '../datas/style';

const ITEM_SPACE = 11;
const SLIDE_DURATION = 500;
let canSlide = true;
let mouseDown = false;
let prevX = 0;
let prevTransform = '';

function Slider() {
    const cloneList = useMemo(() => originalList.slice().concat(originalList).concat(originalList), []);
    const [imgWidth, setImgWidth] = useState(1060);
    const [moved, setMoved] = useState(0);
    const timer = useRef(0);
    const itemsRef = useRef<HTMLDivElement>(null);
    const startIndex = useMemo(()=> Math.floor(cloneList.length / 2), []);
    const focusIndex = startIndex + moved;

    const onMoveButtonClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
        if(!canSlide) return;
        resetInterval();

        const move = e.currentTarget.dataset.move;
        if(move === 'left'){
            setMoved(moved - 1);
        }else{
            setMoved(moved + 1);
        }
        canSlide = false;
    }

    const onMouseDown = (e: React.MouseEvent)=>{
        mouseDown = true;
        clearInterval(timer.current);
        prevX = e.pageX;
        prevTransform = itemsRef.current!.style.transform;
        transitionActive(false);
    }
    
    const onMouseMove = (e: React.MouseEvent)=>{
        if(!mouseDown) return;
        const transform = itemsRef.current!.style.transform;
        const moveX = Number(transform.split('(')[1].split('px')[0]);
        const diffX = e.pageX - prevX;
        const newMove = diffX + moveX;

        itemsRef.current!.style.transform = `translate(${newMove}px)`;
        prevX = e.pageX;
    }
    
    const onDragOver = (e: React.MouseEvent)=>{
        if(!mouseDown) return;
        mouseDown = false;
        transitionActive(true);

        const prevValue = Number(prevTransform.split('(')[1].split('px')[0]);
        const nowValue = Number(itemsRef.current!.style.transform.split('(')[1].split('px')[0]);
        const moveValue = prevValue - nowValue;

        if(Math.abs(moveValue) > (imgWidth / 2)){
            setMoved(pre => moveValue > 0 ? pre + 1 : pre - 1);
        }else{
            itemsRef.current!.style.transform = prevTransform;
        }
        resetInterval();
    }

    const onMouseOver = (e: React.MouseEvent)=>{
        if(mouseDown) return;
        clearInterval(timer.current);
    }
    
    const onMouseOut = (e: React.MouseEvent)=>{
        if(mouseDown) return;
        resetInterval();
    }

    const transitionActive = (isActive: boolean)=>{
        if(isActive) itemsRef.current!.style.transition = SLIDE_DURATION + 'ms';
        else itemsRef.current!.style.transition = 'none';
    }

    const onTransitionEnd = ()=>{
        if(focusIndex + originalList.length >= cloneList.length){
            transitionActive(false);
            setMoved(moved - originalList.length);
        }
        if(focusIndex - originalList.length < 0){
            transitionActive(false);
            setMoved(moved + originalList.length);
        }
        canSlide = true;
    }

    const resetInterval = ()=>{
        clearInterval(timer.current);
        timer.current = window.setInterval(()=>{
            setMoved(pre => pre + 1);
        }, 4000);
    }

    const setResizeObserver = ()=>{
        const callback = (entries: ResizeObserverEntry[])=>{
            transitionActive(false);
            resetInterval();
            entries.forEach(entry => {
                if(window.innerWidth <= 1200) {
                    setImgWidth(window.innerWidth - 117);
                }else{
                    setImgWidth(1060);
                }
            });
        }
        const observer = new ResizeObserver(callback);
        observer.observe(document.documentElement);
    }
    
    useEffect(()=>{
        transitionActive(true);
    }, [moved, imgWidth]);

    useEffect(()=>{
        resetInterval();
        setResizeObserver();
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

        .slider-box {
            .items {
                display: flex;
                width: ${imgWidth + ITEM_SPACE * 2}px;
                transition: ${SLIDE_DURATION}ms;
            }
        }

        .btn-box {
            position: absolute;
            left: 50%;
            width: 1210px;
            transform: translateX(-50%);

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

        @media screen and (max-width: ${screen.wide}){
            > .btn-box {
                display: none;
            }
        }
    `;

    return (
        <div css={style}>
            <div className='slider-box' onTransitionEnd={onTransitionEnd}>
                <div className='items' style={{transform: `translate(${-1 * (imgWidth + ITEM_SPACE * 2) * (moved + startIndex)}px)`}} ref={itemsRef}>
                    {cloneList.map((item, i) => (
                        <SlideItem 
                            key={item.url + i}
                            item={item}
                            isFocus={focusIndex === i}
                            width={imgWidth}
                            space={ITEM_SPACE}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={onDragOver}
                            onMouseLeave={onDragOver}
                            onMouseOver={onMouseOver}
                            onMouseOut={onMouseOut}/>
                    ))}
                </div>
            </div>
            <div className='btn-box'>
                <button className='btn-slide left' data-move='left' onClick={onMoveButtonClick}>
                    <span>&lt;</span>
                </button>
                <button className='btn-slide right' data-move='right' onClick={onMoveButtonClick}>
                    <span>&gt;</span>
                </button>
            </div>
        </div>
    );
}

export default Slider;
