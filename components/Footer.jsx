/* eslint-disable @next/next/no-img-element */
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="text-white bg-darkGreen">
        <div className="container mx-auto px-5 py-12 space-y-4">
          <img src="/images/logo.png" alt="" className="w-32" />
          <p className="">
            GheeWala was founded in 2001 with the aim of introducing an organic
            lifestyle to the world. Started with mere 5-6 cows, today, we have
            more than 450 Cows at our certified organic farm spread over 500+
            acres. All our products are made by following organic farming and
            manufacturing practices ensuring no harm is provided to the
            environment and your health.
          </p>
          <div className="pt-8 grid grid-cols-3">
            <div>
              <h4 className="text-white mb-4">Region</h4>
              <p className="text-gray-400">Contact Us</p>
              <p className="text-gray-400">Map</p>
              <p className="text-gray-400">Form</p>
              <p className="text-gray-400">Contact Details</p>
            </div>
            <div>
              <h4 className="text-white mb-4">Type</h4>
              <p className="text-gray-400">Privacy Policy</p>
              <p className="text-gray-400">Terms and Service</p>
            </div>
            <div className="">
              <h5 className="mb-2">Follow us</h5>
              <div className="flex gap-2">
                <FaFacebook className="text-2xl md:text-5xl hover:text-[#ffe74d]" />
                <FaInstagram className="text-2xl md:text-5xl hover:text-[#ffe74d]" />
                <FaTwitter className="text-2xl md:text-5xl hover:text-[#ffe74d]" />
              </div>
              <div className="option_before_md_scrn">
                <h5 className="py-3">
                  Take an <span className="text-[#ffe74d]">extra 10%</span> off
                  your order
                </h5>
                <div className="flex flex-col gap-4 md:gap-0 md:relative justify-center items-center mb-4">
                  <input
                    type="text"
                    id="domain"
                    name="domain"
                    placeholder="Your Email"
                    className="w-full relative bg-white rounded-l-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300 outline-none text-gray-700 px-2"
                  />
                  <button className="w-full md:w-fit right-0 md:absolute bg-gray-500 mx-auto border border-gray-300 text-white rounded-r-md h-full px-5 ">
                    Get Promo
                  </button>
                </div>
                <p style={{ fontSize: "10px" }}>
                  We&#39;ll also send you delicious recipes, product updates,
                  and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
