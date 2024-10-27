import React, { useState, useEffect, useRef } from "react";
import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import logo from '../../public/assets/logo-brithday.png'
import { gsap } from 'gsap';


function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem("darkMode", newMode);
            return newMode;
        });
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const [language, setLanguage] = useState('VN'); // Khởi tạo ngôn ngữ mặc định là VN

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'VN' ? 'EN' : 'VN'));
        // Thực hiện hành động đổi ngôn ngữ ở đây, ví dụ: cập nhật ngữ cảnh hoặc gọi API
    };

    const message = "Welcome to my Birthday's Party!!!";
    const lettersRef = useRef([]);

    useEffect(() => {
        const timeline = gsap.timeline({ repeat: -1, repeatDelay: 3 });
        lettersRef.current.forEach((letter, index) => {
            timeline.fromTo(
                letter,
                { opacity: 0, y: -100 },
                { opacity: 1, y: 0, duration: 0.5, delay: index * 0.1, ease: "power1.out" },
                index * 0.1
            );
        });

        return () => {
            timeline.kill();
        };
    }, []);

    return (
        <nav className="flex justify-around gap-[50%] items-center p-4 bg-pink-500 dark:bg-gray-800 shadow-md">
            {/* Logo sinh nhật */}
            <div className="flex items-center">
                <img src={logo} alt="Birthday Logo" className="w-20 h-20 mr-2" />
                <span className="text-white font-bold text-xl">
                    {message.split('').map((letter, index) => (
                        <span
                            key={index}
                            ref={el => lettersRef.current[index] = el}
                            style={{
                                display: 'inline-block',
                                marginRight: letter === ' ' ? '8px' : '0'
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </span>
            </div>

            {/* Chức năng chuyển ngôn ngữ và chế độ sáng/tối */}
            <div className="flex items-center space-x-4">
                {/* Thanh trượt ngôn ngữ */}
                <div className="text-white flex items-center">
                    <FaGlobe className="w-5 h-5 mr-2" />
                    <button onClick={toggleLanguage} className="hover:underline">
                        {language} {/* Hiển thị ngôn ngữ hiện tại */}
                    </button>
                </div>

                {/* Thanh trượt dark/light mode với biểu tượng mặt trời và mặt trăng */}
                <div className="relative w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center px-1 cursor-pointer"
                    onClick={toggleDarkMode}>
                    <span className="absolute left-1 text-pink-50">
                        {/* <FaSun /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>

                    </span>
                    <span className="absolute right-1 text-pink-500">
                        {/* <FaMoon /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>

                    </span>
                    <span
                        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-8' : 'translate-x-0'}`}
                    ></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
