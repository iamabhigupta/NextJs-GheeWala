/* eslint-disable @next/next/no-img-element */
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "../utils/Store";
import { HiShoppingCart, HiUserCircle } from "react-icons/hi";
import Footer from "./Footer";
import { AiOutlineLogin } from "react-icons/ai";

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false);

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="">
        <header className="shadow-2xl bg-darkGreen sticky top-0 z-50">
          <nav className="flex h-20 items-center px-4 md:px-0 container mx-auto justify-between ">
            <div className="flex justify-center items-center gap-14">
              <Link href="/" passHref>
                <img
                  src="/images/logo.png"
                  alt="#imgNotFound"
                  className="cursor-pointer"
                  width="90px"
                  height="auto"
                />
              </Link>
              <div className="justify-center items-center gap-4 text-lg font-semibold uppercase hidden md:flex">
                <Link href={"/"} passHref>
                  <p className="text-gray-50 hover:text-yellow cursor-pointer">
                    Home
                  </p>
                </Link>
                <Link href={"/cow-ghee"} passHref>
                  <p className="text-gray-50 hover:text-yellow cursor-pointer">
                    Desi Cow Ghee
                  </p>
                </Link>
                <Link href={"/buffalo-ghee"} passHref>
                  <p className="text-gray-50 hover:text-yellow cursor-pointer">
                    BUFFALO GHEE
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex justify-center mt-3 gap-3 relative">
              <Link href="/cart">
                <a className="text-xl text-white font-semibold">
                  <HiShoppingCart className="h-8 w-8 text-white relative" />
                  {cartItemsCount > 0 && (
                    <span className="rounded-full bg-red-600 w-4 h-4 text-xs font-bold text-white absolute grid place-content-center -top-1 left-6">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              {/* {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-xl text-white font-semibold">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <a className="p-2">Login</a>
                </Link>
              )} */}
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <div>
                  <button>
                    <HiUserCircle
                      className="h-8 w-8 text-white "
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  </button>
                  {isOpen && (
                    <div className="flex flex-col py-5 px-6 bg-darkGreen absolute top-16 right-1 rounded-sm space-y-2">
                      <Link href="/profile" passHref>
                        <p className="text-white text-xl cursor-pointer w-44 text-left hover:text-yellow">
                          Profile
                        </p>
                      </Link>
                      <Link href="/order-history" passHref>
                        <p className="text-white text-xl cursor-pointer w-44 text-left hover:text-yellow">
                          Order History
                        </p>
                      </Link>
                      {session.user.isAdmin && (
                        <Link href="/admin/dashboard" passHref>
                          <p className="text-white text-xl cursor-pointer w-44 text-left hover:text-yellow">
                            Admin Dashboard
                          </p>
                        </Link>
                      )}
                      <button onClick={logoutClickHandler}>
                        <p className="text-white text-xl cursor-pointer w-44 text-left hover:text-yellow">
                          Logout
                        </p>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/login" passHref>
                  <button>
                    <AiOutlineLogin className="h-8 w-8 text-white " />
                  </button>
                </Link>
              )}

              {/* <button>
                <HiUserCircle
                  className="h-8 w-8 text-white "
                  onClick={() => setIsOpen(!isOpen)}
                />
              </button>
              {isOpen && (
                <div className="flex flex-col py-5 px-6 bg-darkGreen absolute top-16 right-1 rounded-sm space-y-2">
                  <Link href="/profile" passHref>
                    <p className="text-white text-xl cursor-pointer w-44 text-left hover:text-yellow">
                      Profile
                    </p>
                  </Link>
                  <Link href="/order-history" passHref>
                    <p className="text-white text-xl cursor-pointer w-44 text-left hover:text-yellow">
                      Order History
                    </p>
                  </Link>
                  {session.user.isAdmin && (
                    <Link href="/admin/dashboard" passHref>
                      <p className="text-white text-xl cursor-pointer w-44 text-left hover:text-yellow">
                        Admin Dashboard
                      </p>
                    </Link>
                  )}
                  <button onClick={logoutClickHandler}>
                    <p className="text-white text-xl cursor-pointer w-44 text-left hover:text-yellow">
                      Logout
                    </p>
                  </button>
                </div>
              )} */}
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
