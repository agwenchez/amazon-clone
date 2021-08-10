import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../Components/CheckoutProduct'
import Header from '../Components/Header'
import { selectItems } from '../slices/basketSlice'



const Checkout = () => {
    const items = useSelector(selectItems)
    return (
        <div className="bg-gray-100">
            <Header/>
            <main className="lg:flex max-w-screen-2xl mx-auto shadow-lg">
                {/* Left side */}
                <div className="flex-grow m-5">
                    <Image
                        src="https://links.papareact.com/ikj"
                        height={250}
                        width={1500}
                        objectFit="cover"
                        priority
                    />

                    <div className="flex p-5 bg-white space-y-10 flex-col">
                        <h3 className="text-3xl pb-4">{items.length === 0 ? 'Your shopping cart is empty' : "Your shopping basket"}</h3>
                        {items.map( ({id, image, title, price, description, rating, category})=>( 
                            // <h2 key={item.id}>{item.title}</h2>
                            <CheckoutProduct
                                key={id}
                                id={id}
                                image={image}
                                title={title}
                                price={price}
                                description={description}
                                category={category}
                                rating={rating}
                            />
                        ))}
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
