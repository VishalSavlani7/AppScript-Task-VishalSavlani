import Footer from "@/component/footer";
import HeroContent from "@/component/heroContent";
import ManageProduct from "@/component/manageProduct";
import Navbar from "@/component/navbar";
import axios from "axios";
import Head from "next/head";

async function fetchProducts() {
  console.log("dksfnkddddddddddddddddddddd");
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response, "responseresponseresponse");
    // const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    return response.data; // Axios wraps the response data in the 'data' property
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array in case of error
  }
}
const Home = async () => {
  debugger;
  console.log("dddddddddddddddddddddddddddd");
  const products = await fetchProducts();
  console.log(products, "productssssssssssss");
  return (
    <>
      <Head>
        <title>Clothing Page for AppScript</title>
        <meta
          name="description"
          content="Explore the latest trends in clothing at Your Fashion Store. Shop our exclusive collection of apparel for all seasons."
        />
        <meta
          name="keywords"
          content="clothing, fashion, apparel, trends, shopping, online store, fashion store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <HeroContent />
      <ManageProduct products={products} />
      <Footer />
    </>
  );
};
export default Home;