/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import axios from "axios";
import { toast } from "react-toastify";
import { CheckIcon } from "@heroicons/react/solid";

function CartScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  const updateCartHandler = async (item, qty) => {
    const quantity = Number(qty);
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
    toast.success("Product updated in the cart");
  };

  return (
    <Layout title="Shopping Cart">
      {/* <h1 className="mb-4 text-xl">Shopping Cart</h1> */}
      {cartItems.length === 0 ? (
        <div>
          <div className="py-16 w-full min-h-screen flex justify-center md:items-center bg-lightGreen">
            <div className="mx-auto max-w-xl lg:max-w-4xl flex flex-col lg:flex-row">
              {/* :TEXT CONTAINER */}
              <div className="px-5 flex flex-col justify-center items-center">
                <p className="text-3xl md:text-6xl text-white text-center font-bold tracking-wide">
                  Your cart is empty
                </p>
                <p className="mt-4 text-sm md:text-base text-white text-center font-medium">
                  Add something to make me happty :)
                </p>
                <Link href={"/"} passHref>
                  <button
                    type="button"
                    className="mt-10 relative inline-flex items-center px-7 py-3.5 rounded border border-transparent bg-yellow md:text-lg font-medium hover:bg-amber-400"
                  >
                    Go back to Homepage
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-lightGreen">
          <div className="container mx-auto px-5 py-12 flex justify-center items-center gap-5">
            <div className="mx-auto py-5 w-full max-w-5xl bg-white shadow-2xl rounded-md">
              <div className="flex flex-col items-center">
                {/* :TITLE */}
                <h2 className="text-center text-3xl text-darkGreen font-semibold">
                  Shopping Cart
                </h2>

                {/* :PRODUCT LIST */}
                <div className="mt-5 min-w-full border-t border-b border-darkGreen">
                  <ul>
                    {cartItems.map((item, index) => (
                      <li
                        key={item.slug}
                        className={`p-4 flex ${
                          index !== 0 && "border-t border-darkGreen"
                        }`}
                      >
                        {/* ::Picture */}
                        <div className="flex-shrink-0 aspect-w-5 aspect-h-1 w-1/4 sm:w-1/5">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        {/* ::Product Infos */}
                        <div className="ml-5 w-full flex flex-col">
                          {/* :::Name & Price */}
                          <div className="flex justify-between space-x-5">
                            <Link href={`/product/${item.slug}`}>
                              <a className="text-2xl text-darkGreen font-semibold hover:text-yellow hover:underline">
                                {item.name}
                              </a>
                            </Link>
                            <span className="text-lg text-darkGreen font-semibold">
                              ₹{item.price}
                            </span>
                          </div>
                          <select
                            className="w-fit mt-3 bg-white text-darkGreen"
                            value={item.quantity}
                            onChange={(e) =>
                              updateCartHandler(item, e.target.value)
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                          {/* :::Actions */}
                          <div className="mt-auto flex justify-between space-x-5">
                            {/* ::::stock */}
                            <span className="inline-flex items-center space-x-2">
                              <CheckIcon className="w-4 h-4 text-darkGreen" />
                              <span className="text-sm text-darkGreen font-medium">
                                In Stock
                              </span>
                            </span>
                            {/* ::::remove */}
                            <button
                              className="text-sm text-darkGreen font-semibold hover:underline"
                              onClick={() => removeItemHandler(item)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* :SUBTOTAL */}
                <div className="py-7 px-10 w-full">
                  {/* ::Subtotal */}
                  <p className="flex justify-between items-baseline">
                    <span className="text-xl text-darkGreen font-semibold">
                      Subtotal: ({cartItems.reduce((a, c) => a + c.quantity, 0)}
                      )
                    </span>
                    <span className="text-3xl text-darkGreen font-bold">
                      ₹{cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                    </span>
                  </p>
                  {/* <p className="mt-2 text-sm text-gray-500">
                    Shipping and taxes will be calculated at checkout
                  </p> */}
                </div>

                {/* :ACTIONS */}
                <div className="px-10 w-full flex flex-col">
                  {/* ::Checkout Button */}
                  <button
                    className="primary-button"
                    onClick={() => router.push("login?redirect=/shipping")}
                  >
                    Checkout
                  </button>
                  {/* <a
                    href="#goToCheckout"
                    className="py-2 w-full rounded bg-indigo-500 text-center text-base text-white hover:bg-indigo-600"
                  >
                    Checkout
                  </a> */}
                  {/* ::Continue Shopping */}
                  <p className="mt-3 text-center text-base text-gray-500">
                    or{" "}
                    <Link href={"/"}>
                      <a className="inline-flex items-center text-center text-sm text-darkGreen hover:text-amber-400 font-semibold">
                        Continue Shopping
                        <span className="ml-2" aria-hidden="true">
                          {" "}
                          &rarr;
                        </span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link href={`/product/${item.slug}`}>
                        <a className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          &nbsp;
                          {item.name}
                        </a>
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeItemHandler(item)}>
                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push("login?redirect=/shipping")}
                  className="primary-button w-full"
                >
                  Check Out
                </button>
              </li>
            </ul>
          </div> */}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
