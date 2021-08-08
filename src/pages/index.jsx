import Head from "next/head";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import Products from "../Components/Products";

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <Header/>
      </Head>

      <main className="mx-auto overflow-x-hidden">
        <Banner />
        <Products products={products}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const products = await fetch('https://fakestoreapi.com/products').then(
   res => res.json()
  ).catch(err => console.log("Error", err))

  return {
    props: { products }
  }
}

