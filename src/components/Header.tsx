import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {AiOutlineSearch, AiOutlineBell} from 'react-icons/ai';
import {menuLinks} from '../datas/data';
import {screen} from '../datas/style';

const LINK_ACTIVE = 'active';

function Header() {
    const navRef = useRef<HTMLElement>(null);

    const onClickLink = (e: React.MouseEvent<HTMLLIElement>)=>{
        const targ = e.currentTarget;
        const {logo} = targ.dataset;

        removeLinkActiveAll();
        if(logo){
            navRef.current!.querySelector('[data-name=home]')?.classList.add(LINK_ACTIVE);
        }else{
            targ.classList.add(LINK_ACTIVE);
        }
    }

    const removeLinkActiveAll = ()=>{
        const links = navRef.current!.querySelectorAll('[data-link]');
        links.forEach(link => link.classList.remove(LINK_ACTIVE));
    }

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
            
            .top-box {
                display: flex;
            }

            .menu-box {
                display: flex;
                justify-content: space-between;
            }

            .icon-box {
                margin-left: 55px;   
            }

            .link {
                position: relative;
                padding: 15px 16px;
                font-size: 14px;
                font-weight: bold;

                &.home {
                    display: none;
                }

                span {
                    position: absolute;
                    transform: translate(2px, -5px);
                    font-size: 10px;
                    font-weight: 500;
                    color: #4b9bff;
                }

                &.${LINK_ACTIVE} {
                    box-shadow: inset 0 -2px #258bf7;
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

            .news {
                &{
                    position: relative;
                }
                &::after {
                    content: 'N';
                    position: absolute;
                    top: -5px;
                    right: -7px;
                    width: 17px;
                    height: 17px;
                    line-height: 17px;
                    text-align: center;
                    border-radius: 7px;
                    background-color: #2468ff;
                    color: white;
                    font-size: 10px;
                    font-weight: 500;
                    transform: scale(0.75);
                }
            }

            svg.icon {
                margin-left: 15px;
                cursor: pointer;
                transform: translateY(2px);
            }

            .profile-icon {
                width: 27px;
                height: 27px;
                border-radius: 50%;
                margin-left: 17px;
                background-color: #00d2d2;
                padding: 2px;
                box-shadow: inset 0 0 0 2px white, 0 0 0 1px #dddddd;
            }

            .btn-menus {
                display: none;
                font-size: 15px;
                color: #606060;
                margin-left: 13px;
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

        @media screen and (max-width: ${screen.wide}){
            .wrapper {
                ul {
                    justify-content: space-between;
                }
                svg.icon, .profile-icon {
                    margin-left: 10px;
                }
                .wall::before {
                    margin: 0 12px 0 10px;
                }
            }
        }
        
        @media screen and (max-width: ${screen.semiWide}){
            .wrapper {
                justify-content: space-evenly;
                .link {
                    font-size: 13px;
                    span {
                        font-size: 9px;
                    }
                }
                svg.search {
                    margin-left: 30px;
                }
            }
        }

        @media screen and (max-width: ${screen.middle}){
            .wrapper {
                width: 90%;
                flex-direction: column;
                .top-box {
                    justify-content: space-between;
                    align-items: center;
                    height: 55px;
                    width: 100%;
                    padding-top: 5px;
                }
                .menu-box {
                    width: 100%;
                    height: 55px;
                    .icon-box {
                        margin-left: 10px;
                    }
                    .link {
                        display: flex;
                        align-items: center;
                        height: 100%;
                        padding: 0 14px;
                        &.home {
                            display: none;
                        }
                        &:hover::after {
                            display: none;
                        }
                    }
                    .profile, .wall {
                        display: none;
                    }
                    .btn-menus {
                        display: block;
                    }
                }
            }
        }
        
        @media screen and (max-width: ${screen.narrow}){
            .wrapper {
                width: 100%;
                .top-box {
                    padding: 15px 20px;
                }
                .menu-box {
                    padding-right: 20px;
                    .link {
                        padding: 0 15px 0 22px;
                        &.home {
                            display: flex;
                        }
                        &:not(:nth-child(1), :nth-child(2), :nth-child(3)) {
                            display: none;
                        }
                    }
                }
            }
        }
    `;

    return (
        <header css={style}>
            <nav className='wrapper' ref={navRef}>
                <div className='top-box'>
                    <ul>
                        <li className='stack'>
                            <div/>
                            <div/>
                            <div/>
                        </li>
                        <li className='title' data-logo onClick={onClickLink}>
                            <a href='#'>wanted</a>
                        </li>
                    </ul>
                </div>
                <div className='menu-box'>
                    <ul>
                        {menuLinks.map(link => (
                            <li className={`link ${link.name}`} key={link.text} data-link data-name={link.name} onClick={onClickLink}>
                                <a href='#'>
                                    {link.text}
                                    <span>{link.tag}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className='icon-box'>
                        <li>
                            <AiOutlineSearch className='icon' size={22} color='#333333'/>
                        </li>
                        <li className='news'>
                            <AiOutlineBell className='icon' size={22} color='#333333'/>
                        </li>
                        <li>
                            <button className='btn-menus'>•••</button>
                        </li>
                        <li className='profile news'>
                            <button className='profile-icon'></button>
                        </li>
                        <li className='wall'>
                            <a href='#' className='service'>기업 서비스</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
