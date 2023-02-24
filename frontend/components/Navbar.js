import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  let [iconbtn, seticonbtn] = useState("list");
  let [toggleView, settoggleView] = useState("hidden");
  let resonsivenav = () => {
    if (iconbtn === "list") {
      seticonbtn("x");
    } else {
      seticonbtn("list");
    }
    if (toggleView === "hidden") {
      settoggleView("fixed");
    } else {
      settoggleView("hidden");
    }
  };
  return (
    <div className="relative">
      <div className="flex justify-end md:block text-white p-6">
        <div className="hidden md:flex justify-evenly">
          <div className="">
            <h1 className="font-bold text-xl">MARKALL</h1>
          </div>
          <div className="flex">
            <div className="m-1 hover:text-slate-500">
              <Link href="/Services">Services</Link>
            </div>
            <div className="m-1 hover:text-slate-500">
              <Link href="/Pricing">Pricing</Link>
            </div>
            <div className="m-1 hover:text-slate-500">
              <Link href="AboutUs">About Us</Link>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl hover:text-slate-500 text-black bg-green-300 p-2 rounded">
              <Link href="/GetStarted">Get Started</Link>
            </h1>
          </div>
        </div>
        <div className="md:hidden">
          <i
            className={`bi bi-${iconbtn} text-3xl hover:text-slate-500 `}
            onClick={resonsivenav}
          ></i>
        </div>
      </div>

      <div className=" fixed top-0 text-white">
        <div
          className={`${toggleView}  md:hidden bg-slate-800 w-full -z-50 p-4`}
        >
          <h1 className="font-bold text-xl my-2">MARKALL</h1>
          <div className="">
            <div className="m-1 hover:text-slate-500 w-fit">
              <Link href="/Services">Services</Link>
            </div>
            <div className="m-1 hover:text-slate-500 w-fit">
              <Link href="/Pricing">Pricing</Link>
            </div>
            <div className="m-1 hover:text-slate-500 w-fit">
              <Link href="AboutUs">About Us</Link>
            </div>
          </div>
          <h1 className="font-bold my-2 text-xl text-black bg-green-300 p-2 rounded w-fit hover:text-slate-500">
            <Link href="/GetStarted">Get Started</Link>
          </h1>
          <div className="absolute top-1 right-2">
            <i
              className={`bi bi-${iconbtn} text-3xl hover:text-slate-500 hover:text-5xl`}
              onClick={resonsivenav}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
