import Link from "next/link";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
let GetStarted = () => {
  return (
    <>
      <Head>
        <title>Getting Started</title>
      </Head>
      <div className="flex justify-center m-10">
        <h1 className="font-bold text-5xl underline">Getting Started </h1>
      </div>

      <div className="my-24 p-6 bg-yellow-100">
        <div className="md:w-3/4 lg:w-1/2 m-3">
          <p className="text-2xl">
            reiciendis. Et veniam voluptatem sit doloremque illum ut autem
            placeat est autem nisi qui magnam corrupti sit galisum sapiente. Rem
            incidunt temporibus non possimus ipsam ut accusantium aperiam aut
            laudantium laboriosam. Eum quasi voluptatem aut fugit pariatur ut{" "}
          </p>
        </div>
        <div className="flex justify-end">
          <div className="lg:w-1/2 md:w-3/4 m-3 text-green-800 text-lg">
            <p className="text-2xl">
              Ea sequi totam ex ipsa corporis et fuga maxime vel nihil
              reprehenderit eum perspiciatis autem At ipsam reprehenderit. Aut
              dignissimos incidunt 33 voluptatem nisi sit vitae numquam ex fuga
              porro eos eaque blanditiis. Vel dolor atque aut iu. T
            </p>
          </div>
        </div>
      </div>
      <div className="my-24 p-6 bg-green-100">
        <div className="md:w-3/4 lg:w-1/2 m-3">
          <p className="text-2xl">
            reiciendis. Et veniam voluptatem sit doloremque illum ut autem
            placeat est autem nisi qui magnam corrupti sit galisum sapiente. Rem
            incidunt temporibus non possimus ipsam ut accusantium aperiam aut
            laudantium laboriosam. Eum quasi voluptatem aut fugit pariatur ut{" "}
          </p>
        </div>
        <div className="flex justify-end">
          <div className="lg:w-1/2 md:w-3/4 m-3 text-green-800 text-lg">
            <p className="text-2xl">
              Ea sequi totam ex ipsa corporis et fuga maxime vel nihil
              reprehenderit eum perspiciatis autem At ipsam reprehenderit. Aut
              dignissimos incidunt 33 voluptatem nisi sit vitae numquam ex fuga
              porro eos eaque blanditiis. Vel dolor atque aut iu. T
            </p>
          </div>
        </div>
      </div>
      <div className="my-24 p-6 bg-red-100">
        <div className="md:w-3/4 lg:w-1/2 m-3">
          <p className="text-2xl">
            reiciendis. Et veniam voluptatem sit doloremque illum ut autem
            placeat est autem nisi qui magnam corrupti sit galisum sapiente. Rem
            incidunt temporibus non possimus ipsam ut accusantium aperiam aut
            laudantium laboriosam. Eum quasi voluptatem aut fugit pariatur ut{" "}
          </p>
        </div>
        <div className="flex justify-end">
          <div className="lg:w-1/2 md:w-3/4 m-3 text-green-800 text-lg">
            <p className="text-2xl">
              Ea sequi totam ex ipsa corporis et fuga maxime vel nihil
              reprehenderit eum perspiciatis autem At ipsam reprehenderit. Aut
              dignissimos incidunt 33 voluptatem nisi sit vitae numquam ex fuga
              porro eos eaque blanditiis. Vel dolor atque aut iu. T
            </p>
          </div>
        </div>
      </div>
      <div className="my-24 p-6 bg-slate-100">
        <div className="md:w-3/4 lg:w-1/2 m-3">
          <p className="text-2xl">
            reiciendis. Et veniam voluptatem sit doloremque illum ut autem
            placeat est autem nisi qui magnam corrupti sit galisum sapiente. Rem
            incidunt temporibus non possimus ipsam ut accusantium aperiam aut
            laudantium laboriosam. Eum quasi voluptatem aut fugit pariatur ut{" "}
          </p>
        </div>
        <div className="flex justify-end">
          <div className="lg:w-1/2 md:w-3/4 m-3 text-green-800 text-lg">
            <p className="text-2xl">
              Ea sequi totam ex ipsa corporis et fuga maxime vel nihil
              reprehenderit eum perspiciatis autem At ipsam reprehenderit. Aut
              dignissimos incidunt 33 voluptatem nisi sit vitae numquam ex fuga
              porro eos eaque blanditiis. Vel dolor atque aut iu. T
            </p>
          </div>
        </div>
      </div>

      <div className="m-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              className="w-full"
              src="/hanuman.jpg"
              width={500}
              height={300}
              alt="Sunset in the mountains"
            ></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              className="w-full"
              src="/hanuman.jpg"
              width={500}
              height={300}
              alt="Sunset in the mountains"
            ></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              className="w-full"
              src="/hanuman.jpg"
              width={500}
              height={300}
              alt="Sunset in the mountains"
            ></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-6">
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

export default GetStarted;
