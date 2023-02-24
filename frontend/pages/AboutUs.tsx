import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

let AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div>
        <h1 className="p-6 text-center text-3xl font-bold underline">
          About Us
        </h1>
      </div>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <Image
                src="/startup.png"
                alt="image"
                loading="lazy"
                width="700"
                height="700"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Nuxt development is carried out by passionate developers
              </h2>
              <p className="mt-6 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center ">
        <Link href="/">
          <h2 className="w-fit hover:bg-slate-400 text-slate-800 border border-black rounded p-3">
            <i className="bi bi-arrow-left-short text-xl"></i> Back to Home page
          </h2>
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
