import React, { useEffect, useState } from 'react';
import Product from './Product';
// import Image from 'next/image';
// import { StarIcon } from '@heroicons/react/solid'
// import Currency from 'react-currency-formatter'


const MAX_RATING = 5
const MIN_RATING = 1

const Products = ({ products }) => {
    // const [products, setProducts] = useState([])
    // const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING)

    // useEffect(() => {
    //    async function getProducts (){
    //         const products = await fetch('https://fakestoreapi.com/products').then(
    //         res => res.json()
    //         ).catch(err => console.log("Error", err))

    //         setProducts(products)
    //         // console.log("Products", products)
    //    }
    //    getProducts()
    // }, [])
    return (
        <>
            <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
                {/* <h2>Products</h2> */}
                {products.slice(0, 4).map(({ id, image, title, price, description, category }) => (
                    <Product
                        key={id}
                        id={id}
                        image={image}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                    />
                ))}

                <img className="sm:col-span-full ml-5 pr-10 lg:h-64 w-full rounded-md" src="https://links.papareact.com/dyz" alt="advert" />

                {products.slice(4, 16).map(({ id, image, title, price, description, category }) => (
                    <Product
                        key={id}
                        id={id}
                        image={image}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                    />
                ))}
                {/* <img className="md:col-span-full ml-5 pr-10 lg:h-64 w-full rounded-md" src="https://links.papareact.com/dyz" alt="advert" /> */}
            </div>

            {/* <div className="flex overscroll-y-hidden overscroll-x-scroll">
                {products.slice(10, products.length).map(({ id, image, title, price, description, category }) => (
                    <div className="m-5 bg-white z-30 p-5 rounded-md shadow hover:cursor-pointer hover:shadow-2xl ">
                        <p className="top-2 right-2 text-xs italic text-gray-400">{category}</p>

                        <div className="flex justify-center">
                            <Image src={image} height={200} width={200} objectFit='contain' loading="lazy" />
                        </div>

                        <h4 className="my-3">{title}</h4>

                        <div className="flex">
                            {Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <StarIcon key={i} className="h-5 text-yellow-500" />
                                ))}
                        </div>

                        <p className="text-xs my-2 line-clamp-2">{description}</p>

                        <div className="mb-5">
                            <Currency quantity={price} currency="KES" />
                        </div>
                        <button className="mt-auto button">Add to Basket</button>
                    </div>
                ))}
            </div> */}
        </>
    )
}

export default Products

