import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

let Body1 = () => {
  return (
    <>
      <div
        className="min-h-screen bg-black "
        style={{ borderEndStartRadius: "100px" }}
      >
        <Navbar></Navbar>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-white mx-5 mt-16 lg:mt-32">
          <div>
            <div className="">
              <h1 className="font-bold text-6xl">
                Reach your - <span className="underline">audience</span> &
                convert your leads
              </h1>
            </div>
            <div>
              <p className="my-3">
                get your customers with SEO, rank your business and with email{" "}
                marketing ,build sales leads
              </p>
            </div>
          </div>
          <div
            className="flex justify-center
          "
          >
            <Image
              src="/Marketing.png"
              width="578"
              height="386"
              alt="no image"
            ></Image>
          </div>
        </div>
        <div className="flex flex-wrap mt-6 pl-6 pb-14">
          <div className="m-2">
            <h1 className="font-bold text-xl text-black bg-green-300 p-2 rounded w-fit">
              <Link href="/GetStarted">Get Started</Link>
            </h1>
          </div>
          <div className="m-2">
            <h1 className="font-bold text-xl  border border-slate-100 text-white p-2 rounded w-fit">
              <Link href="watchdemo">
                <i className="bi bi-play-fill "></i> watch demo
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body1;
