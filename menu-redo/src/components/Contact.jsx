import React from "react";
import contactLogo from "../assets/contact-logo.png";
import phone from "../assets/phone.png";
import globe from "../assets/globe.png";
import party from "../assets/party.png";
import phoneGif from "../assets/phone-gif.gif";

const Contact = () => {
  return (
    <div className="mt-28">
      <div
        className="flex items-center justify-center pt-20 pb-10"
        id="contact-section"
      >
        <img
          src={contactLogo}
          alt="contact logo"
          className="w-64 md:w-72 lg:w-[500px]"
        />
      </div>
      <div className="flex flex-col p font-lightb-12 md:justify-around md:flex-row">
        <div className="flex-1 px-2 font-outfit">
          <div className="flex pb-3 mb-6 lg:mb-14">
            <div className="absolute px-2 py-2 mr-2 bg-black rounded-full">
              <img src={phone} alt="" className="w-3 md:w-4" />
            </div>
            <div className="ml-10 ">
              <p className="flex text-lg font-semibold lg:text-3xl">
                For Take-Out Call
                <div className="pl-1 ">
                  <a
                    href="tel:757-868-0057"
                    className="decoration-solid hover:text-red"
                  >
                    (757) 868-0057
                  </a>
                </div>
              </p>
              <p className="flex pt-2 md:text-lg lg:text-2xl">
                Click number to call!
                <img
                  src={phoneGif}
                  alt=""
                  className="w-6 mx-2 rounded-full lg:w-8"
                />
              </p>
            </div>
          </div>
          <div className="flex mb-6 lg:mb-14">
            <div className="absolute px-2 py-2 mr-2 bg-black rounded-full">
              <img src={globe} alt="" className="w-3 md:w-4" />
            </div>
            <div className="ml-10">
              <p className="text-lg font-light lg:text-2xl">
                475 G-1 Wythe Creek Road <br /> Poquoson, VA 23662 <br /> Wythe
                Creek Shopping Center
                <p className="italic font-extralight lg:text-xl">
                  Adjacent to ABC Store and Taylor Hardware
                </p>
              </p>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="absolute px-2 py-2 mr-2 bg-black rounded-full">
              <img src={party} alt="" className="w-3 md:w-4" />
            </div>
            <div className="ml-10">
              <p className="font-light lg:text-2xl">
                Accomodation for large parties and fiesta! <br />
                Bring all Your Kids, Friends, and including In-Laws!
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full place-items-center" id="map-section">
          <iframe
            className="h-[300px] px-2 pb-3 md:h-[250px] lg:h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.1451353256284!2d-76.39526392388073!3d37.12546197215623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba816b5fdf773f%3A0x27479e540722ed3b!2sEL%20Rancho%20Mexican%20Restaurant!5e0!3m2!1sen!2sus!4v1699369223022!5m2!1sen!2sus"
            width="100%"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
