/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import Product from "../models/Product";
import db from "../utils/db";
import { Store } from "../utils/Store";
import WhyChooseUs from "../components/WhyChooseUs";
import Carousel from "../components/Carousel";

// Icons Import
import { FaFilter, FaHeartbeat, FaStar, FaStarHalf } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    toast.success("Product added to the cart");
  };

  return (
    <Layout title="Home Page">
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          ></ProductItem>
        ))}
      </div> */}
      <section className="text-white background">
        <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-8xl text-4xl font-bold mb-4">
              VEDIC <br /> BILONA <br /> GHEE
            </h1>
            <p className="mb-8 text-xl">
              100% Pure Grass fed A2 Gir Cow's hand churned Ghee is typically
              prepared by simmering butter, which is churned from cultured curd
              (traditionally made dahi).
            </p>
            <div className="flex justify-center align-center gap-5 ">
              <button className="primary-button">COW GHEE</button>
              <button className="primary-button">BUFFALO GHEE</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded -ml-5"
              alt="hero"
              src="/images/product1.png"
            />
          </div>
        </div>
      </section>

      <section className="text-white bg-lightGreen">
        <div className="container mx-auto">
          <div className="mx-auto pt-2 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="space-y-2 text-4xl sm:text-5xl text-white font-extrabold uppercase">
              discover your <br /> favourite ghee
            </h2>
            {/* ::Text */}
            <p className="mt-4 text-base leading-6 capitalize text-white">
              we have collected the best pure cow ghee and best buffalo ghee
              directly from farmers to serve you.
            </p>
          </div>
          <section className="text-white body-font">
            <div className="container px-5 pt-14 pb-28 mx-auto">
              <div className="flex flex-wrap -m-2 relative">
                <div className="h-48 bg-darkGreen rounded-t-3xl w-full absolute top-40"></div>
                <div className="p-2 lg:w-1/2 md:w-1/2 w-full z-10">
                  <div className="flex justify-center items-center">
                    <img src="/images/product1.png" className="h-96" alt="" />
                  </div>
                  <div className="flex gap-1 text-yellow justify-center items-center mb-5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                    <p className="text-white">(15)</p>
                  </div>
                  <h3 className="text-3xl text-center mb-3 font-semibold">
                    Pure Buffalo Ghee
                  </h3>
                  <p className="text-lg text-center mb-5 md:mx-10">
                    Delicious ghee ethically prepared from enzyme-rich yoghurt
                    of pure breed buffalos
                  </p>
                  <div className="flex justify-center items-center">
                    <button className="primary-button">Add To Cart</button>
                  </div>
                </div>
                <div className="p-2 lg:w-1/2 md:w-1/2 w-full z-10">
                  <div className="flex justify-center items-center">
                    <img src="/images/product1.png" className="h-96" alt="" />
                  </div>
                  <div className="flex gap-1 text-yellow justify-center items-center mb-5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                    <p className="text-white">(15)</p>
                  </div>
                  <h3 className="text-3xl text-center mb-3 font-semibold">
                    Pure Buffalo Ghee
                  </h3>
                  <p className="text-lg text-center mb-5 md:mx-10">
                    Delicious ghee ethically prepared from enzyme-rich yoghurt
                    of pure breed buffalos
                  </p>
                  <div className="flex justify-center items-center">
                    <button className="primary-button">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="flex justify-around text-darkGreen bg-yellow text-3xl md:text-5xl font-bold uppercase flex-col md:flex-row px-3 py-3">
        <div className="flex items-center ">
          <div className="text-3xl md:text-5xl font-bold mr-2 md:mr-5">
            <FaHeartbeat />
          </div>
          <h2>Good For Health</h2>
        </div>
        <div className="flex items-center">
          <div className="text-3xl md:text-5xl font-bold mr-2 md:mr-5">
            <FaFilter />
          </div>
          <h2>100% Pure</h2>
        </div>
      </div>
      <section className="text-white bg-lightGreen">
        <div className="container mx-auto px-5 py-24">
          <div className="videoSection text-white uppercase">
            <h2 className="text-center text-3xl md:text-5xl">
              <b>the making of ghee</b>
            </h2>
            <p className="mt-2 text-base text-center leading-6 capitalize text-white">
              What makes our ghee so special?
            </p>
            <div className="flex justify-center mt-14">
              <video
                width="70%"
                controls
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center text-2xl md:text-5xl">
            <b>Why Choose Us</b>
          </h2>
          <p className="mt-2 mb-5 text-base text-center leading-6 capitalize ">
            Why Ghee Wala’s Buffalo Ghee
          </p>
          <WhyChooseUs
            data={[
              "Free from artificial colourings",
              "preservatives and chemical Free",
              "Directly Sourced From Farmers",
              "Made from pure breed buffalos 100% Pure Ghee",
              "Tested in Certified Labs",
              "Carefully produced and packed",
            ]}
          />
        </div>
        <div className="mx-xl-5 believe_car_before_md_scrn pt-5">
          <div className="d-flex justify-content-center align-items-center flex-column text-white uppercase">
            <h2 className="text-center text-2xl md:text-5xl mt-14">
              <b>FRESHNESS JOURNEY</b>
            </h2>
            <p className="mt-2 mb-5 text-base text-center leading-6 capitalize ">
              Our Transparent Making Process,{" "}
              <span className="font-bold">From Cow To Kitchen</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-24 justify-center items-center mt-16">
            <div className="flex flex-col justify-center items-center relative gap-3">
              <p className="text-xl font-semibold uppercase mt-3">STEP 1</p>
              <img
                src="/images/cow.png"
                alt="#ImgNotFound"
                className="md:h-32 md:w-32"
                width="130px"
                height="130px"
              />
              <p className="text-xl font-semibold uppercase mt-3">Cow</p>
              <div className="absolute -right-16 text-3xl">
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center relative gap-3">
              <p className="text-xl font-semibold uppercase mt-3">STEP 1</p>
              <img
                src="/images/curd.png"
                alt="#ImgNotFound"
                className="md:h-32 md:w-32"
                width="130px"
                height="130px"
              />
              <p className="text-xl font-semibold uppercase mt-3">Cow</p>
              <div className="absolute -right-16 text-3xl">
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center relative gap-3">
              <p className="text-xl font-semibold uppercase mt-3">STEP 1</p>
              <img
                src="/images/bilona.png"
                alt="#ImgNotFound"
                className="md:h-32 md:w-32"
                width="130px"
                height="130px"
              />
              <p className="text-xl font-semibold uppercase mt-3">Cow</p>
              <div className="absolute -right-16 text-3xl">
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center relative gap-3">
              <p className="text-xl font-semibold uppercase mt-3">STEP 1</p>
              <img
                src="/images/arrived at gheewala.png"
                alt="#ImgNotFound"
                className="md:h-32 md:w-32"
                width="130px"
                height="130px"
              />
              <p className="text-xl font-semibold uppercase mt-3">Cow</p>
              <div className="absolute -right-16 text-3xl">
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center relative gap-3">
              <p className="text-xl font-semibold uppercase mt-3">STEP 1</p>
              <img
                src="/images/packaging.png"
                alt="#ImgNotFound"
                className="md:h-32 md:w-32"
                width="130px"
                height="130px"
              />
              <p className="text-xl font-semibold uppercase mt-3">Cow</p>
              <div className="absolute -right-16 text-3xl">
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <p className="text-xl font-semibold uppercase mt-3">STEP 1</p>
              <img
                src="/images/ready to ship.png"
                alt="#ImgNotFound"
                className="md:h-32 md:w-32"
                width="130px"
                height="130px"
              />
              <p className="text-xl font-semibold uppercase mt-3">Cow</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white bg-lightGreen">
        <div className="container mx-auto px-5 py-12">
          <h2 className="text-center text-2xl md:text-5xl mt-14">
            <b>KNOW WHAT OUR CUSTOMERS FEEL ABOUT IT</b>
          </h2>
          <div className="flex flex-col md:flex-row gap-24 justify-center items-center my-16">
            <Carousel />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
