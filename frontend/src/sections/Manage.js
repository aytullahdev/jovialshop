import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Manage = () => {
  const [products, setProducts] = useState(null)
  useEffect(() => {
      axios.get("http://localhost:5000/products").then((res)=>{
              setProducts(res.data);
      })
  }, [])
    return (
      <div>
           <div className=" my-10 flex justify-center ">
              <Link to="/addproduct" className="bg-green-500 inline-block mx-auto  text-white text-2xl  rounded  px-10 py-2 ">ADD PRODUCT</Link>
           </div>
           <div className="grid grid-cols-1">
              {products && products.length>0 && 
                products.map((e)=>{
                   return <div key={e._id} className="grid grid-cols-3 shadow-sm justify-center items-center p-5 rounded">
                        <div>
                            <img className="w-20 h-20" src={e.img} alt="" />
                        </div>
                        <div className="text-xl flex flex-col">
                            <span className="text-3xl">{e.name}</span>
                            <span>Price: {e.price}</span>
                            <span>Quantity: {e.quan}</span>
                        </div>
                        <div>
                           <Link to={`/manage/${e._id}`} className="text-xl bg-green-400 text-white rounded px-20 py-2 ">Select</Link>
                        </div>
                   </div>
                })
              }
           </div>
      </div>
    );
};

export default Manage;
