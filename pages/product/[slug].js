import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import Product from "../../models/Product";
import db from "../../utils/db";
import { Store } from "../../utils/Store";

import { BsStarFill, BsStarHalf } from "react-icons/bs";
import ProductCarousel from "../../sections/ProductCarousel";

export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!product) {
    return <Layout title="Produt Not Found">Produt Not Found</Layout>;
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <Layout title={product.name}>
      <section className="text-white bg-lightGreen">
        <div className="container mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-2">
          <ProductCarousel product={product} />
          <div className="space-y-3 px-5 pt-20">
            <h3 className="text-5xl font-bold mb-2">{product.name}</h3>
            <div className="flex gap-1 justify-between text-yellow">
              <Link href={"/"} passHref>
                <p className="text-lg cursor-pointer">Ghee Wala</p>
              </Link>
              <div className="flex gap-1">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
            </div>
            <p className="text-xl">{product.description}</p>
            {/* <p className="text-darkGreen">Ghee Wala</p> */}
            <div className="flex justify-between gap-1">
              <h3 className="text-4xl font-semibold mb-4 mt-4">
                ₹{product.price}
              </h3>
              {/* <Select /> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 md:my-5 text-darkGreen">
              <button className="primary-button" onClick={addToCartHandler}>
                Add To Cart
              </button>
              {/* <button className="primary-button">Buy Now</button> */}
            </div>
          </div>
        </div>
      </section>
      {/* <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? "In stock" : "Unavailable"}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
