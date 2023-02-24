import Contactform from "./Contactform";
const Body4 = () => {
  return (
    <>
      <div className=" mb-24 p-11 bg-blue-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <div className="m-3 my-6">
              <div className="flex">
                <i className="text-blue-500 ml-0  m-1 bi bi-telephone"></i>
                <h1 className="m-1">Call us</h1>
              </div>
              <p className="text-sm underline">+91 9354566860</p>
            </div>
            <div className="m-3 my-6">
              <div className="flex">
                <i className="text-blue-500 ml-0  m-1 bi bi-geo-alt"></i>
                <h1 className="m-1">Location</h1>
              </div>
              <p className="text-sm underline">chazibad, Uttar Pradesh</p>
            </div>
            <div className="m-3 my-6">
              <div className="flex">
                <i className="text-blue-500 ml-0  m-1 bi bi-globe2"></i>
                <h1 className="m-1">Mail us</h1>
              </div>
              <p className="text-sm underline">info@markall.in</p>
            </div>
          </div>
          <div className="">
            <Contactform></Contactform>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body4;
