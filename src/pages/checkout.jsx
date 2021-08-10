import Image from 'next/image'
import React from 'react'
import Header from '../Components/Header'


const Checkout = () => {
    return (
        <div className="bg-gray-100">
            <Header/>
            <main className="lg:flex max-w-screen-2xl mx-auto shadow-lg">
                {/* Left side */}
                <div className="flex-grow m-5">
                    <Image
                        src="https://links.papareact.com/ikj"
                        height={250}
                        width={1020}
                        objectFit="contain"
                        priority
                    />

                    <div className="flex p-5 bg-white space-y-10 flex-col">
                        <h3 className="text-2xl pb-4">Your shopping basket</h3>
                    </div>
                </div>
                {/* Right side */}
                <div>

                </div>
            </main>
        </div>
    )
}

export default Checkout
