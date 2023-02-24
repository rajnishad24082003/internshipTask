import Image from "next/image";
import Link from "next/link";

const Body2 = () => {
  return (
    <>
      <div className="my-24">
        <div className="mx-4 my-6 ">
          <div className="lg:w-1/3 md:w-1/2 m-2">
            <p className="text-xl text-slate-500 ">OUR FEATURES</p>
            <h1 className="text-4xl font-bold my-4">
              Know your audience and boost sales
            </h1>
            <hr className=" md:w-1/3 lg:w-full"></hr>
          </div>
          <div className="flex justify-end ">
            <p className="lg:w-1/3 md:w-1/2 m-2">
              Effective emails convey the most significant substance to a client
              at the proper time which is our marketing approaches include
              schedulled emails.
            </p>
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-6 md:m-0  p-5 rounded-lg"
            style={{ backgroundColor: "#EBEBEB" }}
          >
            <div className="m-3 lg:mr-32">
              <h1 className="font-bold text-2xl m-2">
                Save precious time wit automation
              </h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.bscure Latin words, consectetur, from a Lorem Ipsum
                passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes
                sum dolor sit amet.., comes from a line in section 1.10.32.
              </p>
              <Link href="/learnmore">
                <h1 className="m-2 text-xl border-black hover:border-2 rounded w-fit p-2">
                  Learn More <i className="bi bi-arrow-right"></i>
                </h1>
              </Link>
            </div>
            <div className="flex justify-center m-3">
              <Image
                src="/Automation.svg"
                alt="no image"
                width="528"
                height="352"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body2;
