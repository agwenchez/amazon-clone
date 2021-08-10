import Head from "next/head";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import Products from "../Components/Products";

export default function Home({products}) {
  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <Head>
        <title>Amazon Clone</title>
      </Head>
        <Header/>

      <main className="mx-auto">
        <Banner />
        <Products products={products}/>
      </main>
      <footer className="flex bg-amazon_blue text-white p-5 sm:p-8 text-center mx-auto justify-center">
        <h3>Design by Agwenchez</h3>
      </footer>
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

