import React from "react";
import { Link } from "react-router-dom";

export const Home = (props) => {
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
        <div className=" flex max-lg:flex-col max-lg:justify-center items-center text-white">
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
      <section id="new-arrival">
        <div className="text-center">
          <div className="my-12">
            <h3 className="text-5xl">NEWS ARRIVALS</h3>
            <h4 className="text-3xl font-light">EXCLUSIVE CLOTHES</h4>
          </div>
          <div className="flex flex-wrap gap-5 gap-y-20 justify-center">
            {props.dummyData?.map((product) => {
              return (
                <div
                  className="flex flex-col items-center w-1/6 relative"
                  key={product.name + Math.random()}
                >
                  <img src={product.img}></img>
                  <p className="absolute z-10 top-0 right-0 px-7 py-2 text-base font-bold category text-white">
                    {product.category}
                  </p>
                  <p className="font-extrabold product-name">{product.name}</p>
                  <p className="font-extrabold text-4xl product-price">
                    ${product.price}
                  </p>
                  <div className="gap-2 flex flex-col items-center pb-20">
                    <Link className="buy-button">Buy</Link>
                    <Link className="personalize-button">Personalize It!</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="search-all" className="relative overflow-hidden">
        <div className="relative px-24">
          <div className="pt-24 pb-8">
            <h4 className="text-5xl">EXPLORE ALL</h4>
            <h5 className="text-3xl font-light">SEARCH ALL CATEGORIES</h5>
          </div>
          <div className="grid grid-cols-6 grid-rows-2 gap-5 z-10 relative grid-categories">
            <div className="row-span-2 ">
              <img className="object-cover h-full" src="/img/bag.webp"></img>
              <Link className="absolute bottom-2 left-4">See HandBags</Link>
            </div>
            <div className="col-span-2">
              <img
                className="w-full object-cover"
                src="/img/shirtcat.png"
              ></img>
              <Link className="absolute bottom-2 left-4">See T-shirts</Link>
            </div>
            <div className="row-span-2">
              <img
                className="object-cover h-full"
                src="/img/stickers.png"
              ></img>
              <Link className="absolute bottom-2 left-4">See Stickers</Link>
            </div>
            <div>
              <img
                className="object-cover h-full"
                src="/img/creativeshirt.png"
              ></img>
              <Link className="absolute bottom-2 left-4">See Hoddies</Link>
            </div>
            <div className="row-span-2">
              <img className="h-full object-cover" src="/img/jacket.webp"></img>
              <Link className="absolute bottom-2 left-4">See Jackets</Link>
            </div>
            <div className="col-span-2">
              <img className="h-full object-cover" src="/img/gap.webp"></img>
              <Link className="absolute bottom-2 left-4">See Gaps</Link>
            </div>
            <div>
              <img
                className="h-full object-cover"
                src="/img/creativebag.png"
              ></img>
              <Link className="absolute bottom-2 left-4">See Bags</Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <img
            className="shirtbackground overflow-hidden"
            src="/img/shirtbackground.webp"
          ></img>
        </div>
      </section>
    </>
  );
};
