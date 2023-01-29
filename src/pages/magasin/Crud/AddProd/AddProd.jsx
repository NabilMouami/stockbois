import React, { useEffect, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import axios from "axios";
import Select from "react-select";

const AddProd = () => {
  const [post, setUser] = useState({
    category: "",
    type: "",
    face: "",
    sscategory: "",

    fornisseur: "",
    longueur: "",
    ep: "",
    qty: "",
    price: "",
    code: "",
  });
  const options = [
    { value: "panneaux", label: "Panneaux" },
    { value: "contre-plaques", label: "Contre-Plaques" },
    { value: "bois-blanc", label: "Bois-Blanc" },
    { value: "bois-dur", label: "Bois-Dur" },
    { value: "bois-rouge", label: "Bois-Rouge" },
    { value: "bande-chandes", label: "Bande-Chandes" },
    { value: "caissons", label: "Caissons" },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...post,
      [name]: value,
    });
  };
  const handleOption = (e) => {
    setUser({
      ...post,
      category: e.label,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/v1/createproduct", post).then(() => {
      console.log("Produit Added!!");
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-6">
            <div className="px-4 sm:px-0">
              <h3 className="text-center font-medium leading-6 text-gray-900">
                Enregistrez L'information Sur Un Produit En Stock.
              </h3>
            </div>
          </div>
          <div className="mt-5 md:col-span-4 md:mt-18">
            <form onSubmit={submitHandler}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <Select
                        className="selOptions"
                        options={options}
                        onChange={handleOption}
                        isSearchable={true}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Type
                      </label>
                      <input
                        type="text"
                        name="type"
                        defaultValue={post.type}
                        autoComplete="family-name"
                        className="  w-full px-4  py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-2">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Face
                      </label>
                      <input
                        type="text"
                        name="face"
                        defaultValue={post.face}
                        autoComplete="email"
                        className="  w-full px-4  py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Sous-Categorie
                      </label>
                      <input
                        type="text"
                        name="sscategory"
                        defaultValue={post.sscategory}
                        autoComplete="street-address"
                        className=" w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Fornisseur
                      </label>
                      <input
                        type="text"
                        name="fornisseur"
                        defaultValue={post.fornisseur}
                        autoComplete="street-address"
                        className=" w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Long
                      </label>
                      <input
                        type="text"
                        name="longueur"
                        defaultValue={post.longueur}
                        autoComplete="address-level2"
                        className=" w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Largeur
                      </label>
                      <input
                        type="text"
                        name="largeur"
                        defaultValue={post.largeur}
                        autoComplete="address-level1"
                        className=" w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Epaisseur
                      </label>
                      <input
                        type="text"
                        name="ep"
                        defaultValue={post.ep}
                        autoComplete="postal-code"
                        className=" w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="qty"
                        defaultValue={post.qty}
                        autoComplete="street-address"
                        className=" w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Prix/DH
                      </label>
                      <input
                        type="text"
                        name="price"
                        defaultValue={post.price}
                        autoComplete="street-address"
                        className=" w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Code
                      </label>
                      <input
                        type="text"
                        name="code"
                        defaultValue={post.code}
                        autoComplete="street-address"
                        className=" w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProd;
