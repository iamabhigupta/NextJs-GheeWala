import React from "react";
import Layout from "../components/Layout";
import ProductCarousel from "../sections/ProductCarousel";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Cowghee = () => {
  return (
    <Layout>
      <section className="text-white bg-lightGreen">
        <div className="container mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-2">
          <ProductCarousel />
          <div className="space-y-3 px-5 pt-20">
            <h3 className="text-5xl font-bold mb-2">Pure Desi Cow Ghee</h3>
            <div className="flex gap-1 justify-between text-yellow">
              <p className="text-lg">Pure Buffalo Ghee </p>
              <div className="flex gap-1">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
            </div>
            <p className="text-xl">
              Delicious ghee ethically prepared from enzyme-rich yoghurt of pure
              breed Desi Cows Ghee
            </p>
            <p className="text-darkGreen">Pure Buffalo Ghee </p>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 md:my-5 text-[#28341E]">
              <div className="flex flex-col bg-[#28341E] text-[#ffe74d] p-2 rounded-sm justify-center items-center text-xl font-medium cursor-pointer">
                <div>
                  <h6 className="text-center">1 Kg</h6>
                </div>
                <div className="flex gap-4 mt-2">
                  <h6 className=" text-center">
                    <span className="ml-2 line-through">₹ 1600</span>
                  </h6>
                  <h6 className=" text-center">₹ 1250</h6>
                </div>
              </div>
              <div className="flex flex-col bg-[#28341E] text-[#ffe74d] p-2 rounded-sm justify-center items-center text-xl font-medium cursor-pointer">
                <div>
                  <h6 className="text-center">1 Kg</h6>
                </div>
                <div className="flex gap-4 mt-2">
                  <h6 className=" text-center">
                    <span className="ml-2 line-through">₹ 1600</span>
                  </h6>
                  <h6 className=" text-center">₹ 1250</h6>
                </div>
              </div>
              <div className="flex flex-col bg-[#28341E] text-[#ffe74d] p-2 rounded-sm justify-center items-center text-xl font-medium cursor-pointer">
                <div>
                  <h6 className="text-center">1 Kg</h6>
                </div>
                <div className="flex gap-4 mt-2">
                  <h6 className=" text-center">
                    <span className="ml-2 line-through">₹ 1600</span>
                  </h6>
                  <h6 className=" text-center">₹ 1250</h6>
                </div>
              </div>
            </div> */}
            <div className="flex justify-between gap-1">
              <h3 className="text-4xl font-semibold mb-4 mt-4">₹650</h3>
              {/* <Select /> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 md:my-5 text-darkGreen">
              <button className="primary-button">Add To Cart</button>
              {/* <button className="primary-button">Buy Now</button> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cowghee;
