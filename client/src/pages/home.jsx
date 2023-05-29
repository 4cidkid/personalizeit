import React from "react";
import { Link } from "react-router-dom";

export const Home = ({ products }) => {
  return (
    <>
      <header className="absolute top-0 w-full">
        <div className="flex justify-between max-mobileExtraSm:justify-center">
          <div className="pl-10 pt-4 text-4xl 2xl:text-5xl max-lg:text-6xl max-sm:text-4xl max-mobileSm:text-2xl max-mobileExtraSm:p-0 max-mobileExtraSm:mt-5 max-mobileExtraSm:text-4xl">
            <h1>Personalize It!</h1>
          </div>
          <div className="flex items-center gap-5 pt-4 font-extrabold text-xl 2xl:text-3xl pr-10 text-white max-lg:text-4xl max-sm:text-2xl max-mobileSm:text-xl max-mobileExtraSm:hidden">
            <Link>Sign Up</Link>
            <Link className="">Log In</Link>
          </div>
        </div>
      </header>
      <section id="hero-section">
        <div className="flex max-lg:flex-col max-lg:justify-center items-center text-white">
          <div className="max-lg:pl-0 max-lg:mt-72 pl-40 w-8/12 text-left max-lg:text-center max-sm:mt-24 max-mobileSm:mt-32">
            <h2 className="text-4xl max-xl:text-3xl 2xl:text-6xl font-bold tracking-widest max-lg:text-6xl max-sm:text-4xl max-mobileSm:text-xl">
              Personalize It!
            </h2>
            <h2 className="font-extrabold 2xl:text-7xl max-xl:text-5xl text-6xl max-lg:text-8xl max-sm:text-6xl max-mobileSm:text-3xl">
              Where style Meets Individuality
            </h2>
            <p className="max-xl:text-lg text-xl 2xl:text-2xl 2xl:px-22 max-lg:text-3xl max-sm:text-xl max-mobileSm:hidden max-mobileSm:text-base">
              We are a captivating and innovative online store that celebrates
              the fusion of personal style and individuality. With our extensive
              collection of customizable clothing and accessories, we empower
              customers to express their unique identity through fashion.
            </p>
            <p className="hidden max-mobileSm:block ">
              innovative online store that celebrates the fusion of personal
              style and individuality.<br></br>
              we empower customers to express their unique identity through
              fashion
            </p>
            <button className="text-xl 2xl:text-4xl max-lg:text-4xl max-mobileSm:text-xl max-mobileExtraSm:text-base">
              Personalize It!
            </button>
          </div>
          <div className="pr-40 max-lg:pr-0">
            <img src="/img/modelHero.png" alt="black model"></img>
          </div>
        </div>
        <nav className="w-full h-8 absolute bottom-0 flex justify-center text-white font-bold text-xl 2xl:text-2xl z-10 max-lg:text-2xl max-sm:h-20 max-mobileSm:text-base max-mobileSm:h-20">
          <ul className="flex flex-wrap justify-center items-center gap-12 2xl:gap-20 max-lg:gap-11 max-md:justify-center max-md:gap-x-24 max-md:gap-y-0 max-md:flex-wrap max-mobileSm:gap-5">
            <li>
              <Link>ALL PRODUCTS</Link>
            </li>
            <li>
              <Link>T-SHIRTS</Link>
            </li>
            <li>
              <Link>HODDIES</Link>
            </li>
            <li>
              <Link>JACKETS</Link>
            </li>
            <li>
              <Link>CAPS & HATS</Link>
            </li>
            <li>
              <Link>HANDBAGS</Link>
            </li>
            <li>
              <Link>BAGS</Link>
            </li>
            <li>
              <Link>STICKERS</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};
