import Footer from "../components/Footer";
import Link from "next/link";
import Head from "next/head";

let Services = () => {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <div
        id="services"
        className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
              What We Do
            </h2>
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
              Save time managing advertising &amp; Content for your business.
            </p>
          </header>

          <div className="flex flex-wrap flex-row -mx-4 text-center">
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <i className="bi bi-search text-5xl"></i>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  SEO Services
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationDelay: "0.1s",
              }}
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <i className="bi bi-chat-left-dots text-5xl"></i>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Social Content
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationDelay: "0.3s",
              }}
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <i className="bi bi-badge-ad text-5xl"></i>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Creative ads
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <i className="bi bi-ui-checks-grid text-5xl"></i>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Brand Identity
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationDelay: "0.1s",
              }}
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <i className="bi bi-wallet2 text-5xl"></i>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Budget &amp; Marketing
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationDelay: "0.3s",
              }}
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <i className="bi bi-funnel text-5xl"></i>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Optimize conversions
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-center ">
            <Link href="/">
              <h2 className="w-fit hover:bg-slate-400 text-slate-800 border border-black rounded p-3">
                <i className="bi bi-arrow-left-short text-xl"></i> Back to Home
                page
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Services;
