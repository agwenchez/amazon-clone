import Image from 'next/image'
import {MenuIcon, SearchIcon, ShoppingCartIcon  } from '@heroicons/react/outline'
// import logo from '../../public/logo.png'

const Header = () => {
    return (
        <header>
            {/* top nav */}
           <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
               {/* Logo */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                      src="https://links.papareact.com/f90"
                      width={150}
                      height={40}
                      objectFit='contain'
                      className='cursor-pointer'
                      priority
                    />
                </div>
                {/* Search bar */}
                <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text"/>
                    <SearchIcon className="h-12 p-4"/>
                </div>

                {/* right side */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div>
                        <p>Hello Agwenchez</p>
                        <p className="font-extrabold link md:text-sm">Account & Lists</p>
                    </div>
                    <div className="link">
                        <p className="font-extrabold md:text-sm">Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="link relative flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="font-extrabold md:text-sm hidden md:inline mt-2">Basket</p>
                    </div>
                </div>
           </div>
           <div className="bg-yellow-400 flex hover:bg-yellow-500 h-10 rounded-md cursor-pointer sm:hidden  space-x-3">
                <input className="p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none" type="text"/>
                <SearchIcon className="h-12 p-4"/>
            </div>

            {/* bottom nav */}
           <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-xs lg:text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p className="link whitespace-nowrap">Prime video</p>
                <p className="link whitespace-nowrap">Amazon Business</p>
                <p className="whitespace-nowrap">Today's Deals</p>
                <p className="link hidden md:inline-flex whitespace-nowrap">Electronics</p>
                <p className="link hidden md:inline-flex whitespace-nowrap">Food & Grocery</p>
                <p className="link hidden md:inline-flex whitespace-nowrap">Buy again</p>
                <p className="link hidden md:inline-flex whitespace-nowrap">Shopper toolkit</p>
           </div>
        </header>
    )
}

export default Header
