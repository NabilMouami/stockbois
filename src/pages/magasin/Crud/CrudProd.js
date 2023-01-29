import React, { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loadboisblanc,
  loadboisdur,
  loadboisrouge,
  loadcontreplaque,
  loadpanneaux,
} from "../../../actions/action";

export const CrudProd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadpanneaux());
    dispatch(loadboisblanc());
    dispatch(loadboisdur());
    dispatch(loadboisrouge());

    dispatch(loadcontreplaque());
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div class="flex space-x-3 justify-center">
        <div>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => navigate("/manager/addproduct")}
          >
            Add Product
          </button>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => navigate("/manager/addclient")}
          >
            Add Client
          </button>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => navigate("/manager/retour")}
          >
            Retour De Produit
          </button>
        </div>
      </div>
    </div>
  );
};
