import React from 'react';
import logo from "../../public/assets/logo.svg"
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Link to="/projects">Projects</Link>
                            <Link to="/team">Our Team</Link>
                            <Link to="/aboutus">About Us</Link>
                        </ul>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={logo} alt="logo" className='w-12 h-12 object-contain' />
                        <h1 className='text-3xl flex gap-2'>
                            <span className='font-pacifico'>Merris</span>
                            <span className='font-pacifico'>Group</span>
                        </h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1"><NavLink to={"/"} className={({ isActive }) =>
                        `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#0B9D58]' : 'bg-gray-900 text-white'}`
                    }>Home</NavLink>
                        <NavLink to={"/projects"} className={({ isActive }) =>
                            `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#0B9D58]' : 'bg-gray-900 text-white'}`
                        }>Projects</NavLink>
                        <NavLink to={"/team"} className={({ isActive }) =>
                            `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#0B9D58]' : 'bg-gray-900 text-white'}`
                        }>Our Team</NavLink>
                        <NavLink to={"/aboutus"} className={({ isActive }) =>
                            `px-6 py-2  rounded-lg shadow-md font-medium transition duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500  focus:ring-offset-2 ${isActive ? 'scale-95 bg-[#0B9D58]' : 'bg-gray-900 text-white'}`
                        }>About Us</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;