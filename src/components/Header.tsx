import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {AiOutlineSearch} from 'react-icons/ai';
import {menuLinks} from '../datas/data';

function Header() {
    const style = css`
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        box-shadow: 0 1px 1px -1px gray;

        .wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1060px;

            ul {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            li {
                cursor: pointer;
            }
            .stack {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 18px;
                margin-right: 15px;
                > div {
                    width: 100%;
                    height: 2px;
                    background-color: black;
                    &:not(:last-child) {
                        margin-bottom: 4px;
                    }
                }
            }
            .title {
                font-size: 22px;
                font-weight: 600;
                padding-bottom: 5px;
            }
            .link {
                position: relative;
                padding: 15px 16px;
                font-size: 14px;
                font-weight: bold;
                /* cursor: pointer; */

                span {
                    position: absolute;
                    transform: translate(2px, -5px);
                    font-size: 10px;
                    font-weight: 500;
                    color: #4b9bff;
                }

                &:hover {
                    &::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 2px;
                        background-color: #dbdbdb;
                    }
                }
            }

            svg {
                cursor: pointer;
                transform: translateY(3px);
            }
            .btn-sign {
                font-size: 14px;
                font-weight: bold;
                margin-left: 17px;
            }
            .service {
                border: 1px solid #e1e2e3;
                border-radius: 40px;
                color: gray;
                font-size: 13px;
                padding: 6px 10px;
            }

            .wall::before {
                content: '|';
                font-size: 11px;
                color: #e1e2e3;
                margin: 0 15px;
            }
        }
    `;

  return (
    <header css={style}>
        <div className='wrapper'>
            <ul>
                <li className='stack'>
                    <div/>
                    <div/>
                    <div/>
                </li>
                <li className='title'>
                    <a href='/'>wanted</a>
                </li>
            </ul>
            <ul>
                {menuLinks.map(link => (
                    <li className='link' key={link.text}>
                        <a href='/'>
                            {link.text}
                            <span>{link.tag}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul>
                <li>
                    <AiOutlineSearch size={21} color='gray'/>
                </li>
                <li>
                    <button className='btn-sign'>회원가입/로그인</button>
                </li>
                <li className='wall'>
                    <a href='/' className='service'>기업 서비스</a>
                </li>
            </ul>
        </div>
    </header>
  );
}

export default Header;
