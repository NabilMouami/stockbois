import React, { useEffect, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import axios from "axios";
import Select from "react-select";

export const AddClient = () => {
  const [post, setUser] = useState({
    name: "",
    telephone: "",
    adresse: "",
    travaille: "",
    cne: "",
    bankaccount: "",
    bank: "",
    dateCreated: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...post,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/v1/createclient", post).then(() => {
      console.log("Client Added!!");
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
                Enregistrez L'information Sur Un Client.
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
                        Nom
                      </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={post.name}
                        autoComplete="given-name"
                        className="  w-full px-4  py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Telephone
                      </label>
                      <input
                        type="text"
                        name="telephone"
                        defaultValue={post.telephone}
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
                        Adresse
                      </label>
                      <input
                        type="text"
                        name="adresse"
                        defaultValue={post.adresse}
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
                        Travail
                      </label>
                      <input
                        type="text"
                        name="travaille"
                        defaultValue={post.travaille}
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
                        Cne:
                      </label>
                      <input
                        type="text"
                        name="cne"
                        defaultValue={post.cne}
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
                        Account Bank:
                      </label>
                      <input
                        type="text"
                        name="bankaccount"
                        defaultValue={post.bankaccount}
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
                        Nom De Bank:
                      </label>
                      <input
                        type="text"
                        name="bank"
                        defaultValue={post.bank}
                        autoComplete="street-address"
                        className=" w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span 2">
                    <label htmlFor="invoiceDate">Join Date</label>
                    <input
                      type="date"
                      name="dateCreated"
                      placeholder="Join Date"
                      autoComplete="off"
                      defaultValue={post.dateCreated}
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
