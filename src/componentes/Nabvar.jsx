import React from 'react'
import {RiShoppingBag3Line} from 'react-icons/ri'
import {BsUmbrella} from 'react-icons/bs'
import {TbPaperBag, TbArmchair2} from 'react-icons/tb'
import {FiChevronDown} from 'react-icons/fi'


export default function Nabvar() {
    
  return (
    <div className="bg-[url('https://images.squarespace-cdn.com/content/v1/600f63232fdc3d6dff8cdffa/7332f3a1-2893-4db9-bb92-346f7e49bd02/cocoon6-squarespace.jpg')] h-[55em] w-full bg-no-repeat">
   
        <nav class="bg-transparent border-gray-700 px-4 sm:px-6 py-2.5 rounded dark:bg-transparent">
            <div class="container flex flex-wrap m-10 items-center justify-between mx-auto">
                <span class="self-center text-5xl text-gray-500 font-bold whitespace-nowrap dark:text-gray-500">Pufi°</span>
            <div class="flex md:order-2 ">
                <button type="button" class="text-white w-32 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mr-1 md:mr-0 dark:bg-transparent dark:hover:bg-transparent flex dark:focus:ring-transparent">MI CUENTA<FiChevronDown/></button>
                <button type="button" class="text-white ml-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center mr-1 md:mr-0 dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent">MI COMPRA </button>
                <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="ml-12 bg-transparent justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul class="flex flex-col p-4 mt-4  border  bg-transparent border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-transparent md:dark:bgtransparent dark:border-gray-700">
                <li className='border-r-2 ml-4 mr-4'>
                    <p className='text-6xl text-white mb-2 '><TbArmchair2/></p>
                    <a href="#" class="block py-2 pl-3 pr-4 text-white text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-transparent md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-white">PUFI PUFF</a>
                </li>
                <li className='border-r-2 ml-4 mr-4'>
                    <p className='text-6xl text-white mb-2'><BsUmbrella/></p>
                    <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-transparent md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-white">PUFI RAIN</a>
                </li>
                <li className='border-r-2 ml-4 mr-4'>
                    <p className='text-6xl text-white mb-2'><RiShoppingBag3Line/></p>
                    <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-transparent md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-white">PUFI CART</a>
                </li>
                <li className='text-center text-white'>
                    <p className='text-6xl mb-2'><TbPaperBag/></p>
                    <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-transparent md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PUFI NAP</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
            <h1 className='text-5xl font-semibold text-white text-center mt-32'>ESTÁR CÓMODO,</h1>
            <h1 className='text-5xl font-semibold text-white text-center'>NUNCA FUE TAN FÁCIL</h1>
            <button className='border border-white font-semibold m-10 flex items-center justify-center ml-[45%] text-white text-center mt-44 mb-28 p-4 w-44'>SHOP</button>

    </div>
  )
}
