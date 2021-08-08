import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'

const MAX_RATING = 5
const MIN_RATING = 1

const Product = ({id, image, title, price, description, category}) => {
    const [rating] = useState( Math.floor(Math.random() *(MAX_RATING - MIN_RATING + 1)) + MIN_RATING)

    return (
        <div className="relative m-5 bg-white z-30 p-10 rounded-md shadow hover:cursor-pointer hover:shadow-2xl focus:shadow-2xl">
           <p className="top-2 right-2 text-xs italic text-gray-400">{category}</p>

           <div className="flex justify-center">
             <Image src={image} height={200} width={200} objectFit='contain' loading="lazy"/>
           </div>

           <h4 className="my-3">{title}</h4>

           <div className="flex">
                {Array(rating)
                .fill()
                .map((_,i)=>( 
                    <StarIcon key={i} className="h-5 text-yellow-500"/>
                ))}
            </div>

           <p className="text-xs my-2 line-clamp-2">{description}</p>

           <div className="mb-5">
                <Currency quantity={price} currency="KES"/>
           </div>
           <button className="mt-auto button">Add to Basket</button>
        </div>
    )
}

export default Product
