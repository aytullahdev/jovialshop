import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-2  gap-20">
     
      <div>
        <div className="py-10">
          <div className=" rounded shadow-lg w-full mx-auto px-5 py-4">
            <h1 className="text-3xl text-center py-2 font-semibold uppercase">
              Connect Us{" "}
            </h1>
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-5">
                <label className="text-2xl   font-semibold" htmlFor="name">
                  Name:
                </label>
                <input
                  id="name"
                  name="name"
                  className="bg-gray-50  outline-none py-2 px-2 rounded w-full block"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className=" flex flex-col space-y-5">
                <label className="text-2xl   font-semibold" htmlFor="Email">
                  Email:
                </label>
                <input
                  id="Email"
                  name="Email"
                  className="bg-gray-50  outline-none py-2 px-2 rounded w-full block"
                  type="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="flex flex-col space-y-5">
                <label className="text-2xl   font-semibold" htmlFor="msg">
                  Message
                </label>
                <textarea
                  id="msg"
                  name="msg"
                  className="bg-gray-50  outline-none py-2 px-2 rounded w-full block"
                  type="text"
                  placeholder="Enter your message"
                />
              </div>
              <div>
                <button
                  onClick={() => {}}
                  className="text-white bg-green-500 px-10 py-2 rounded block mx-auto hover:bg-green-600"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-20">
        <img
          src="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1419&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
