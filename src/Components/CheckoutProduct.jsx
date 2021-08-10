import React from 'react';
import Image from 'next/image';
import Currency from 'react-currency-formatter'
import { StarIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice'
import { TagIcon } from '@heroicons/react/solid'


const CheckoutProduct = ({ id, image, title, price, description, rating, category }) => {
    const dispatch = useDispatch()

    const addItemToBasket = () =>{
        const product = { id, image, title, price, description, rating, category }
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () =>{
        dispatch(removeFromBasket(id))
    }

    return (
        <div className="sm:grid sm:grid-cols-5 flex flex-col items-center mx-auto my-5 sm:mx-0 bg-white p-10 rounded-md shadow-md z-30 hover:shadow-lg">
            <div>
                <p className="text-xs italic text-gray-400 mb-7">{category}</p>
                <Image src={image} height={200} width={200} objectFit='contain' loading="lazy"/>
            </div>
            <div className="col-span-3 mx-5 mt-3">
                <h3 className="sm:text-lg text-sm">{title}</h3>

                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500" />
                        ))}
                </div>

                <p className="text-xs sm:text-sm my-5 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="KES" />
            </div>
             
             <div className="flex flex-col justify-self-end space-y-2 my-auto">
                <button className="button" onClick={addItemToBasket}>Add to Basket </button>
                <button className="button" onClick={removeItemFromBasket}> Remove from Basket</button>
             </div>
        </div>
    )
}

export default CheckoutProduct
