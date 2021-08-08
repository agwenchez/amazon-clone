import React, { useEffect, useState } from 'react'
import Product from './Product'


const Products = ({products}) => {
    // const [productss, setProductss] = useState([])

    // useEffect(() => {
    //    async function getProducts (){
    //         const products = await fetch('https://fakestoreapi.com/products').then(
    //         res => res.json()
    //         ).catch(err => console.log("Error", err))
            
    //         setProductss(products)
    //         console.log("Products", products)
    //    }
    //    getProducts()
    // }, [])
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {/* <h2>Products</h2> */}
            {products.slice(0,4).map(({id, image, title, price, description, category}) =>(
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

            <img className="md:col-span-full ml-5 pr-10" src="https://links.papareact.com/dyz" alt="advert" />

            {/* <div> */}
                {products.slice(4,products.length).map(({id, image, title, price, description, category}) =>(
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

            {/* </div> */}
        </div>
    )
}

export default Products

