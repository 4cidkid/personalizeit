import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "react-feather";
export const Home = (props) => {
  const [catClick, setCatClick] = useState(false);
  const handleClick = (e) => {
    if (
      e.currentTarget.children[1].style.display === "none" ||
      e.currentTarget.children[1].style.display === ""
    ) {
      e.currentTarget.children[1].style.display = "block";
      setCatClick(!catClick);
      return;
    } else if (e.currentTarget.children[1].style.display === "block") {
      e.currentTarget.children[1].style.display = "none";
      setCatClick(!catClick);
      return;
    }
  };
  const handleCategory = (e) => {
    e.currentTarget.parentElement.parentElement.children[0].children[0].innerText = e.currentTarget.innerText
    setCatClick(!catClick);
  }
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
          <div className="py-12">
            <h3 className="text-5xl">NEWS ARRIVALS</h3>
            <h4 className="text-3xl font-light">EXCLUSIVE CLOTHES</h4>
          </div>
          <div className="flex flex-wrap gap-5 gap-y-5 justify-center">
            {props.dummyData?.map((product) => {
              return (
                <div
                  className="flex flex-col items-center w-1/6 relative  max-lg:w-1/4 max-sm:w-2/4 z-10 [&>*:nth-child(2)]:hover:opacity-100 [&>*:nth-child(2)]:hover:relative [&>*:nth-child(1)]:hover:opacity-0 [&>*:nth-child(1)]:hover:hidden transition-opacity duration-300"
                  key={product.name + Math.random()}
                >
                  <img src={product.img}></img>
                  <img
                    className="absolute opacity-0 transition-opacity duration-300"
                    src={product.imgTwo}
                  ></img>
                  <p className="absolute z-10 top-0 right-0 px-7 py-2 text-base font-bold category text-white">
                    {product.category}
                  </p>
                  <p className="font-extrabold product-name">{product.name}</p>
                  <p className="font-extrabold text-4xl product-price">
                    ${product.price}
                  </p>
                  <div className="gap-2 flex flex-col items-center pb-20">
                    <Link className="buy-button text-2xl font-bold flex justify-center w-2/4">
                      Buy
                    </Link>
                    <Link className="personalize-button max-sm:text-base whitespace-nowrap text-2xl font-bold">
                      Personalize It!
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="search-all" className="relative overflow-hidden pb-16">
        <div className="flex flex-col items-center p-24 z-10 max-sm:p-12">
          <div className="flex flex-col items-center p-12 max-sm:text-center max-sm:p-0 max-sm:py-4">
            <h4 className="text-5xl">EXPLORE ALL</h4>
            <h5 className="text-3xl font-light">SEARCH ALL CATEGORIES</h5>
          </div>
          <div className="flex items-center z-10">
            <div className="sm:grid grid-cols-3 grid-rows-4 w-full grid-cat gap-3 max-sm:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:gap-4">
              {props.categories?.map((category, i) => {
                return (
                  <div
                    key={category.name}
                    className={
                      i === 0 || i === 3 || i === 4
                        ? "row-span-2 overflow-hidden rounded-xl relative max-sm:col-span-2 max-sm:row-span-1"
                        : undefined || i === 1 || i === 2
                        ? "col-span-2 overflow-hidden rounded-xl relative"
                        : undefined || i
                        ? "overflow-hidden rounded-xl relative"
                        : undefined
                    }
                  >
                    <img
                      className="h-full w-full object-cover rounded-xl brightness-75 hover:scale-110 transition-transform duration-500 hover:transition-transform duration-500"
                      src={category.img}
                    ></img>
                    <Link className="absolute bottom-0 left-0 py-4 px-7 bg-main rounded-tr-3xl font-bold text-xl flex items-center gap-3 hover:opacity-80">
                      Go to {category.name}{" "}
                      <ChevronRight className="bg-white rounded-full bg-opacity-30	"></ChevronRight>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section id="all-products">
        <div className="px-24 pt-16">
          <div className="py-5">
            <h5 className="text-5xl">ALL PRODUCTS</h5>
          </div>
          <div className="flex gap-12">
            <div
              className="bg-gray-200 w-44 py-2 px-5 flex items-center justify-center  cursor-pointer relative"
              onClick={handleClick}
            >
              <div className="flex items-center text-2xl font-bold text-gray-800 select-none">
              <p>
                Category
              </p>
              <ChevronDown></ChevronDown>
              </div>
              <ul
                className="absolute top-full left-0 text-2xl bg-gray-200 w-full pl-2 font-normal text-gray-700"
                style={{ display: "none" }}
              >
                {props.categories?.map((category) => {
                  return <li key={category.name} onClick={handleCategory}>{category.name}</li>;
                })}
              </ul>
            </div>
            <div className="bg-gray-200 w-36 py-2 px-5 flex items-center justify-center  cursor-pointer">
              <p className="flex items-center text-2xl font-bold text-gray-800 select-none">
                Color<ChevronDown></ChevronDown>
              </p>
            </div>
            <div className="bg-gray-200 w-36 py-2 px-5 flex items-center justify-center  cursor-pointer">
              <p className="flex items-center text-2xl font-bold text-gray-800 select-none">
                Price<ChevronDown></ChevronDown>
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};
