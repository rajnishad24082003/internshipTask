import { useState } from "react";
import Loading from "./Loading";

const Contactform = () => {
  let [showModal, setShowModal] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  let [isSuccessfull, setIsSuccessfull] = useState(false);
  let [formData, setformData] = useState({});
  let formvaluechange = (val) => {
    let fieldname = val.target.name;
    let fieldvalue = val.target.value;
    setformData((form) => {
      return {
        ...form,
        [fieldname]: fieldvalue,
      };
    });
  };
  let formSubmited = async (e) => {
    e.preventDefault();
    setShowModal(true);
    try {
      let sendData = await fetch(
        "https://emailsending-api.vercel.app/api/v1/formsubmit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      let transformed = await sendData.json();
      if (transformed.accepted.length) {
        setIsSuccessfull(true);
        setIsLoading(false);
      } else {
        setIsError(true);
        setIsLoading(false);
      }
      console.log(transformed);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className=" max-h-screen  md:-translate-y-20"
        style={{
          height: "130%",
        }}
      >
        <div className=" p-6 drop-shadow-2xl  border h-full bg-white border-gray-300 sm:rounded-md">
          <div className="mb-11">
            <h1 className="font-bold text-3xl my-2">Contact Now</h1>
            <p className="text-sm">
              etraset used it on their dry-transfer sheets, and again during the
              90s as desktop publishers bundledpassage experienced a surge in
              popularity during the 1960s when
            </p>
          </div>
          <form onSubmit={formSubmited}>
            <label className="block mb-6">
              <span className="text-gray-700">
                Name<span className="text-red-500"> *</span>
              </span>
              <input
                onChange={formvaluechange}
                required
                type="text"
                name="name"
                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Joe Bloggs"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">
                Email<span className="text-red-500"> *</span>
              </span>
              <input
                onChange={formvaluechange}
                name="email"
                type="email"
                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="joe.bloggs@example.com"
                required
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">
                Phone<span className="text-red-500"> *</span>
              </span>
              <input
                onChange={formvaluechange}
                type="text"
                name="phone"
                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="number"
                required
              />
            </label>
            <label className="block mb-11">
              <span className="text-gray-700">Message</span>
              <textarea
                onChange={formvaluechange}
                name="message"
                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                placeholder="Tell us what you're thinking about..."
              ></textarea>
            </label>
            <div className="mb-6">
              <button
                type="submit"
                className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal ? (
        <>
          <div className=" flex justify-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Email</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      <i className="bi bi-x"></i>
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="w-44 h-24">
                    {isLoading ? (
                      <Loading></Loading>
                    ) : isSuccessfull ? (
                      <h1 className="font-bold text-2xl text-center text-green-500">
                        Successfull
                      </h1>
                    ) : (
                      <h1 className="font-bold text-2xl text-center text-red-500">
                        Error
                      </h1>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Contactform;
