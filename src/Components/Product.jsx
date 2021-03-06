import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'

const MAX_RATING = 5
const MIN_RATING = 1

const Product = ({id, image, title, price, description, category}) => {
    const [rating] = useState( Math.floor(Math.random() *(MAX_RATING - MIN_RATING + 1)) + MIN_RATING)
    const dispatch = useDispatch()
    const product = {id, image, title, price, description, category, rating}

    const addItemToBasket = () =>{
        dispatch(addToBasket(product))
    }

    return (
        <div className="relative m-5 bg-white z-30 p-10 rounded-md shadow hover:cursor-pointer hover:shadow-2xl" >
           <p className="top-2 right-2 text-xs italic text-gray-400">{category}</p>

           <div className="flex justify-center p-3">
             <Image src={image} height={200} width={200} objectFit='contain' priority/>
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
           <div className="flex ">
                <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
           </div>
        </div>
    )
}

export default Product
