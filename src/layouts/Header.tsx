import { useState } from 'react';
import { Link , NavLink } from 'react-router-dom';
import brandLogo from '../assets/images/logo/boomja_logo_106x38_transparent.png';
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header>
            <div className="container">
                <div className="flex items-center justify-between py-4.75 bg-white mt-2 px-4 rounded-2xl">
                    <div className="flex items-center gap-x-12">
                        <Link to="/">
                            <img src={brandLogo} alt="Brand Logo" />
                        </Link>
                        <div className="hidden md:flex gap-8">
                            <Link to="/login" className='hover:text-red-500 transition-colors'>اجاره ویلا و اقامتگاه</Link>
                            <Link to="/wishlist" className='hover:text-red-500 transition-colors'>علاقه مندی ها</Link>
                            <Link to="/login" className='hover:text-red-500 transition-colors'>میزبان شوید</Link>
                            <Link to="/login" className='hover:text-red-500 transition-colors'>پشتیبانی</Link>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        {isMenuOpen ? (
                            <FaXmark className='size-7 ' onClick={() => { setIsMenuOpen(prev => !prev) }} />
                        ) : (
                            <FiMenu className='size-7 ' onClick={() => { setIsMenuOpen(prev => !prev) }} />
                        )}
                    </div>
                    <div className="hidden md:flex items-center gap-x-4 text-sm">
                        <NavLink to="/login" className={({isActive}) => `hover:text-red-500 transition-colors ${isActive ? 'text-red-500' : ''}`}>ورود به حساب</NavLink>
                        <Link to="/signup" className='text-white bg-red-500 px-5 py-2.5 rounded-lg hover:bg-red-600 transition-colors'>ثبت نام</Link>
                    </div>
                </div>
                <div
                    className={`
                        overflow-hidden transition-all duration-500 ease-in-out
                        ${isMenuOpen
                            ? 'max-h-125 opacity-100 translate-y-0'
                            : 'max-h-0 opacity-0 -translate-y-3'
                        }
                        `}
                >
                    <div className='pt-4'>
                        <Link
                            to="/login"
                            className='block text-white bg-red-500 text-center px-5 py-2.5 rounded-lg hover:bg-red-600 transition-colors'
                        >
                            ثبت نام
                        </Link>

                        <NavLink
                            to="/login"
                            className={({isActive}) => `block hover:text-red-500 text-center px-5 py-2.5 transition-colors' ${isActive ? 'text-red-500' : ''}`}
                        >
                            ورود به حساب
                        </NavLink>

                        <div className='border-b border-gray-300 my-2 flex items-center gap-x-2'>
                            <TiHome className='size-7' />

                            <Link
                                to="/login"
                                className='block hover:text-red-500 px-5 py-2.5 transition-colors'
                            >
                                اجاره ویلا و اقامتگاه
                            </Link>
                        </div>
                        
                        <div className='border-b border-gray-300 my-2 flex items-center gap-x-2'>
                            <TiHome className='size-7' />

                            <Link
                                to="/wishlist"
                                className='block hover:text-red-500 px-5 py-2.5 transition-colors'
                            >
                               علاثه مندی ها
                            </Link>
                        </div>

                        <div className='border-b border-gray-300 my-2 flex items-center gap-x-2'>
                            <FaUserAlt className='size-7' />

                            <Link
                                to="/login"
                                className='block hover:text-red-500 px-5 py-2.5 transition-colors'
                            >
                                میزبانی شوید
                            </Link>
                        </div>

                        <div className='border-b border-gray-300 my-2 flex items-center gap-x-2'>
                            <BiSupport className='size-7' />

                            <Link
                                to="/login"
                                className='block hover:text-red-500 px-5 py-2.5 transition-colors'
                            >
                                پشتیبانی
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;