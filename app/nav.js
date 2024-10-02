"use client";
import Image from "next/image";
import Wave from './image/Wave.png';
import Profile from './image/Group_4.png';
import React from 'react';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useVelocity } from 'framer-motion'
import "./page.css";

function Nav() {
    const cursorSize = 20 / 2;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }


    const operation = { daming: 20, stiffness: 20, mass: 0.5 }
    const smoothmouse = {
        x: useSpring(mouse.X, operation),
        y: useSpring(mouse.y, operation)
    }

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize);
        mouse.y.set(clientY - cursorSize);
    }

    useEffect(() => {
        window.addEventListener("mousemove", mouseMove)
        return () => (window.removeEventListener("mousemove", mouseMove))
    })

    var [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu((menu) => (!menu))
    }

    return (
        <>
            <motion.div className="cursor"
                style={{ left: mouse.x, top: mouse.y }}
                transition={{ delay: 0, }}
            />
            <nav>
                <li>
                    <a href="tel:+2348127187633">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M33.3334 18.3333C33.3334 13.6518 33.3334 11.311 32.2098 9.62952C31.7234 8.90159 31.0984 8.27658 30.3705 7.79019C28.689 6.66666 26.3482 6.66666 21.6667 6.66666H18.3334C13.6518 6.66666 11.311 6.66666 9.62955 7.79019C8.90162 8.27658 8.27661 8.90159 7.79022 9.62952C6.66669 11.311 6.66669 13.6518 6.66669 18.3333C6.66669 23.0149 6.66669 25.3556 7.79022 27.0371C8.27661 27.7651 8.90162 28.3901 9.62955 28.8765C11.0985 29.858 13.0705 29.982 16.6667 29.9977V30L18.5093 33.6852C19.1235 34.9136 20.8765 34.9136 21.4907 33.6852L23.3334 30V29.9977C26.9295 29.982 28.9016 29.858 30.3705 28.8765C31.0984 28.3901 31.7234 27.7651 32.2098 27.0371C33.3334 25.3556 33.3334 23.0149 33.3334 18.3333ZM15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H25C25.5523 16 26 15.5523 26 15C26 14.4477 25.5523 14 25 14H15ZM15 20.6667C14.4477 20.6667 14 21.1144 14 21.6667C14 22.2189 14.4477 22.6667 15 22.6667H20C20.5523 22.6667 21 22.2189 21 21.6667C21 21.1144 20.5523 20.6667 20 20.6667H15Z"
                            />
                        </svg>
                        <h3>
                            Let's talk
                        </h3>
                    </a>
                </li>
                {/* 2nd link */}
                <li className={menu ? "port hide" : "port"}>
                    <Link href={"#"} >
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path className="portIcon" fillRule="evenodd" clipRule="evenodd" d="M8.91912 7.25244C8.33334 7.83823 8.33334 8.78104 8.33334 10.6667V31C8.33334 32.8856 8.33334 33.8284 8.91912 34.4142C9.50491 35 10.4477 35 12.3333 35H27.6667C29.5523 35 30.4951 35 31.0809 34.4142C31.6667 33.8284 31.6667 32.8856 31.6667 31V10.6667C31.6667 8.78104 31.6667 7.83823 31.0809 7.25244C30.4951 6.66666 29.5523 6.66666 27.6667 6.66666H12.3333C10.4477 6.66666 9.50491 6.66666 8.91912 7.25244ZM15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H25C25.5523 16 26 15.5523 26 15C26 14.4477 25.5523 14 25 14H15ZM15 20.6667C14.4477 20.6667 14 21.1144 14 21.6667C14 22.2189 14.4477 22.6667 15 22.6667H25C25.5523 22.6667 26 22.2189 26 21.6667C26 21.1144 25.5523 20.6667 25 20.6667H15ZM15 27.3333C14.4477 27.3333 14 27.781 14 28.3333C14 28.8856 14.4477 29.3333 15 29.3333H21.6667C22.219 29.3333 22.6667 28.8856 22.6667 28.3333C22.6667 27.781 22.219 27.3333 21.6667 27.3333H15Z" />
                        </svg>
                        <h3>
                            Portifilio
                        </h3>
                    </Link>
                </li>
                <div className="menuPath">
                    {/* 3rd link */}
                    <li>
                        <a href="mailto:jacoshevire@gmail.com" >
                            <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8977 19.6881L8.77543 17.314L8.77542 17.314L8.77541 17.314C6.42221 16.5296 5.24561 16.1374 5.24561 15.4167C5.24561 14.6959 6.42221 14.3037 8.77543 13.5193L27.0386 7.43157C28.6944 6.87964 29.5223 6.60368 29.9593 7.04069C30.3963 7.47771 30.1203 8.3056 29.5684 9.96139L23.4807 28.2246C22.6963 30.5778 22.3041 31.7544 21.5833 31.7544C20.8626 31.7544 20.4704 30.5778 19.686 28.2246L17.3119 21.1023L23.8321 14.5821C24.2226 14.1916 24.2226 13.5584 23.8321 13.1679C23.4416 12.7774 22.8084 12.7774 22.4179 13.1679L15.8977 19.6881Z" />
                            </svg>
                            <h3>
                                send Email
                            </h3>
                        </a>
                    </li>
                    {/* burger menu */}
                    <div onClick={toggleMenu} className={menu ? "menu newmenu" : "menu"}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </nav>
            <div className="nav2">
                <li>
                    <Link href={"#"}>
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path className="portIcon" fillRule="evenodd" clipRule="evenodd" d="M8.91912 7.25244C8.33334 7.83823 8.33334 8.78104 8.33334 10.6667V31C8.33334 32.8856 8.33334 33.8284 8.91912 34.4142C9.50491 35 10.4477 35 12.3333 35H27.6667C29.5523 35 30.4951 35 31.0809 34.4142C31.6667 33.8284 31.6667 32.8856 31.6667 31V10.6667C31.6667 8.78104 31.6667 7.83823 31.0809 7.25244C30.4951 6.66666 29.5523 6.66666 27.6667 6.66666H12.3333C10.4477 6.66666 9.50491 6.66666 8.91912 7.25244ZM15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H25C25.5523 16 26 15.5523 26 15C26 14.4477 25.5523 14 25 14H15ZM15 20.6667C14.4477 20.6667 14 21.1144 14 21.6667C14 22.2189 14.4477 22.6667 15 22.6667H25C25.5523 22.6667 26 22.2189 26 21.6667C26 21.1144 25.5523 20.6667 25 20.6667H15ZM15 27.3333C14.4477 27.3333 14 27.781 14 28.3333C14 28.8856 14.4477 29.3333 15 29.3333H21.6667C22.219 29.3333 22.6667 28.8856 22.6667 28.3333C22.6667 27.781 22.219 27.3333 21.6667 27.3333H15Z" />
                        </svg>
                    </Link>
                </li>
                <div className="inside_nav2">
                    <li>
                        <a href="mailto:jacoshevire@gmail.com">
                            <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8977 19.6881L8.77543 17.314L8.77542 17.314L8.77541 17.314C6.42221 16.5296 5.24561 16.1374 5.24561 15.4167C5.24561 14.6959 6.42221 14.3037 8.77543 13.5193L27.0386 7.43157C28.6944 6.87964 29.5223 6.60368 29.9593 7.04069C30.3963 7.47771 30.1203 8.3056 29.5684 9.96139L23.4807 28.2246C22.6963 30.5778 22.3041 31.7544 21.5833 31.7544C20.8626 31.7544 20.4704 30.5778 19.686 28.2246L17.3119 21.1023L23.8321 14.5821C24.2226 14.1916 24.2226 13.5584 23.8321 13.1679C23.4416 12.7774 22.8084 12.7774 22.4179 13.1679L15.8977 19.6881Z" />
                            </svg>
                        </a>
                    </li>
                    <div onClick={toggleMenu} className={menu ? "menu newmenu" : "menu"} >
                        {/* ${menu? ""} */}
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            {/* the main path  */}
            <div className="main_container">
                <div className="inside_container">
                    <div className="writeUp">
                        <Image className={menu ? "wave newwave" : "wave"}
                            src={Wave}
                            alt="wave"
                            width={menu ? 500 : 60}
                            height={menu ? 500 : 60}
                        />
                        {/* writeUp */}
                        <p className={menu ? "text_writeup removeText" : "text_writeup"}>
                            Hi, I’m <stong className="myName">Jacob i’m a software developer</stong>  who has good taste in aesthetics.
                        </p>
                        {/* skills Path */}
                        <div className={menu ? "skills removeSkills" : "skills"}>
                            <span>
                                <p>
                                    software dev
                                </p>
                                <svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.94141 10.3721L0 8.17969V7.33984L4.94141 4.86914V6.31934L1.90918 7.70117L4.94141 8.93164V10.3721Z" />
                                    <path d="M9.80957 4L7.14844 11.3389H5.45898L8.12012 4H9.80957Z" />
                                    <path d="M10.2832 8.93164L13.3154 7.70117L10.2832 6.31934V4.86914L15.2246 7.33984V8.17969L10.2832 10.3721V8.93164Z" />
                                </svg>
                            </span>
                            {/* 2nd skills */}
                            <span>
                                <p>
                                    ui/ux designer
                                </p>
                                <svg width="15" height="19" className="uidesign" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3.75" y="10.0369" width="3.08824" height="2.5" rx="1.25" transform="rotate(90 3.75 10.0369)" />
                                    <rect x="10.625" y="9.26465" width="3.08824" height="2.5" rx="1.25" transform="rotate(-90 10.625 9.26465)" />
                                    <path d="M11.25 8.49276L10.3125 9.65085C10.3052 9.65982 10.3016 9.66431 10.2987 9.66786C9.49846 10.6472 8.00154 10.6472 7.2013 9.66786C7.1984 9.66431 7.19476 9.65982 7.1875 9.65085V9.65085C7.18024 9.64188 7.1766 9.63739 7.1737 9.63384C6.37346 8.65452 4.87654 8.65452 4.0763 9.63384C4.0734 9.63739 4.06976 9.64188 4.0625 9.65085L3.125 10.8089" />
                                </svg>
                            </span>
                            {/* 3rd skills */}
                            <span>
                                <p>
                                    Graphic designer
                                </p>
                                <svg width="17" height="17" className="uidesign" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.5" y="10" width="10" height="2.5" rx="1.25" />
                                    <path d="M3.40949 7.61424L5 10H10L11.5905 7.61424C12.0259 6.96118 12.2436 6.63465 12.2083 6.27888C12.1731 5.92311 11.8956 5.64561 11.3406 5.09062L7.5 1.25L3.65938 5.09062C3.10439 5.64561 2.82689 5.92311 2.79166 6.27888C2.75643 6.63465 2.97412 6.96118 3.40949 7.61424Z" />
                                    <circle cx="7.5" cy="6.875" r="1.375" />
                                    <path d="M7.5 1.25V5.625" />
                                </svg>
                            </span>
                        </div>
                        <div className={menu ? "removeMenu" : "removeMenu menubox"}>
                            <div className="menuTitle">
                                <h1>
                                    Menu
                                </h1>
                            </div>

                            <div className="linkMenu">
                                <Link href={"#"}>
                                    <svg width="30px" height="30px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.79069 16.877C8.33325 17.8715 8.33325 19.003 8.33325 21.2659V28.3332C8.33325 31.4759 8.33325 33.0473 9.30956 34.0236C10.2685 34.9825 11.8014 34.9996 14.8333 34.9999V26.6667C14.8333 25.1939 16.0272 24 17.4999 24H22.4999C23.9727 24 25.1666 25.1939 25.1666 26.6667V34.9999C28.1985 34.9996 29.7314 34.9825 30.6903 34.0236C31.6666 33.0473 31.6666 31.4759 31.6666 28.3332V21.2659C31.6666 19.003 31.6666 17.8715 31.2092 16.877C30.7517 15.8824 29.8926 15.146 28.1745 13.6733L26.5078 12.2448C23.4023 9.58289 21.8495 8.25195 19.9999 8.25195C18.1503 8.25195 16.5975 9.58289 13.492 12.2448L11.8253 13.6733C10.1072 15.146 9.24812 15.8824 8.79069 16.877ZM23.1666 34.9999V26.6667C23.1666 26.2985 22.8681 26 22.4999 26H17.4999C17.1317 26 16.8333 26.2985 16.8333 26.6667V34.9999H23.1666Z" />
                                    </svg>

                                    <h5>
                                        Home
                                    </h5>
                                </Link>
                                <Link href={"#"}>
                                    <svg width="30px" height="30px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path className="portIcon" fillRule="evenodd" clipRule="evenodd" d="M8.91912 7.25244C8.33334 7.83823 8.33334 8.78104 8.33334 10.6667V31C8.33334 32.8856 8.33334 33.8284 8.91912 34.4142C9.50491 35 10.4477 35 12.3333 35H27.6667C29.5523 35 30.4951 35 31.0809 34.4142C31.6667 33.8284 31.6667 32.8856 31.6667 31V10.6667C31.6667 8.78104 31.6667 7.83823 31.0809 7.25244C30.4951 6.66666 29.5523 6.66666 27.6667 6.66666H12.3333C10.4477 6.66666 9.50491 6.66666 8.91912 7.25244ZM15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H25C25.5523 16 26 15.5523 26 15C26 14.4477 25.5523 14 25 14H15ZM15 20.6667C14.4477 20.6667 14 21.1144 14 21.6667C14 22.2189 14.4477 22.6667 15 22.6667H25C25.5523 22.6667 26 22.2189 26 21.6667C26 21.1144 25.5523 20.6667 25 20.6667H15ZM15 27.3333C14.4477 27.3333 14 27.781 14 28.3333C14 28.8856 14.4477 29.3333 15 29.3333H21.6667C22.219 29.3333 22.6667 28.8856 22.6667 28.3333C22.6667 27.781 22.219 27.3333 21.6667 27.3333H15Z" />
                                    </svg>
                                    <h5>
                                        Portifilio
                                    </h5>
                                </Link>
                            </div>

                        </div>
                        <div className="about">
                            <Link href={"#"}>
                                About me
                            </Link>
                        </div>
                    </div>
                    <div className={!menu ? "image" : "image removeImg"}>
                        <Image

                            src={Profile}
                            alt="profile"
                            width={233}
                            height={233}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav