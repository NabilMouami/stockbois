import React, { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { loadclient } from "../../../actions/action";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { BiMap, BiKey, BiPowerOff } from "react-icons/bi";

export const Clients = () => {
  const load = useSelector((state) => state.Clients.clients);
  const columns = [
    {
      field: "name",
      headerName: "Name",
      headerClassName: "super-app-theme--cell",

      width: 150,
      editable: true,
    },
    {
      field: "telephone",
      headerName: "Telephone",
      headerClassName: "super-app-theme--cell",

      width: 120,
      editable: true,
    },
    {
      field: "adresse",
      headerName: "Adresse",
      headerClassName: "super-app-theme--cell",

      width: 180,
      editable: true,
    },
    {
      field: "travaille",
      headerName: "Travaille",
      headerClassName: "super-app-theme--cell",

      width: 120,
      editable: true,
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadclient());
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <div className="p-4">
          <h2 className="font-title text-2xl ">Clients</h2>
        </div>
        <div className="flex flex-wrap">
          <Box
            sx={{
              height: 600,
              width: "60%",
              "& .super-app-theme--cell": {
                backgroundColor: "#66CDAA",
                color: "#1a3e72",
                fontWeight: "600",
              },
            }}
          >
            <DataGrid
              rows={load}
              columns={columns}
              keyExpr="id"
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
          <div className="w-full lg:w-2/6 pl-4 pr-4 sm:pl-4 sm:pr-2">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput123"
                      aria-describedby="emailHelp123"
                      placeholder="First name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput124"
                      aria-describedby="emailHelp124"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput125"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="password"
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput126"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group form-check text-center mb-6">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="exampleCheck25"
                    checked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="exampleCheck25"
                  >
                    Subscribe to our newsletter
                  </label>
                </div>
                <button
                  type="submit"
                  className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                >
                  Create Client
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
