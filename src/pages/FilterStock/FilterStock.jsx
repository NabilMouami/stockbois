import React, { useState, useEffect } from "react";
import Sidebar from "../magasin/sidebar/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";

export const FilterStock = () => {
  const params = useParams();
  const { name } = params;
  console.log(name);
  const [categories, setCategories] = useState([]);

  const load = useSelector((state) => state.stock.panneaux);
  const boisblanc = useSelector((state) => state.stock.boisblanc);
  const boisdur = useSelector((state) => state.stock.boisdur);

  const boisrouge = useSelector((state) => state.stock.boisrouge);
  const contreplaques = useSelector((state) => state.stock.contreplaques);

  useEffect(() => {
    switch (name) {
      case "panneaux":
        return setCategories(load);
      case "bois-blanc":
        return setCategories(boisblanc);
      case "bois-dur":
        return setCategories(boisdur);
      case "contre-plaque":
        return setCategories(contreplaques);
      case "bois-rouge":
        return setCategories(boisrouge);
      default:
        return setCategories([]);
    }
  }, [name]);

  const columns = [
    {
      field: "category",
      headerName: "Category",
      headerClassName: "super-app-theme--cell",

      width: 120,
      editable: true,
    },
    {
      field: "type",
      headerName: "Type",
      headerClassName: "super-app-theme--cell",

      width: 120,
      editable: true,
    },
    {
      field: "face",
      headerName: "Face",
      headerClassName: "super-app-theme--cell",

      width: 80,
      editable: true,
    },
    {
      field: "fornisseur",
      headerName: "Fornisseur",
      headerClassName: "super-app-theme--cell",

      width: 120,
      editable: true,
    },
    {
      field: "longueur",
      headerName: "Long",
      headerClassName: "super-app-theme--cell",

      width: 120,
      editable: true,
    },
    {
      field: "largeur",
      headerName: "Larg",
      headerClassName: "super-app-theme--cell",

      width: 120,
      editable: true,
    },
    {
      field: "ep",
      headerName: "Eppaiseur",
      headerClassName: "super-app-theme--cell",

      width: 80,
      editable: true,
    },
    {
      field: "qty",
      headerName: "Quantity",
      headerClassName: "super-app-theme--cell",

      width: 80,
      editable: true,
    },
    {
      field: "price",
      headerName: "Prix/DH",
      headerClassName: "super-app-theme--cell",

      width: 120,
      editable: true,
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          height: 600,
          width: "100%",
          "& .super-app-theme--cell": {
            backgroundColor: "#66CDAA",
            color: "#1a3e72",
            fontWeight: "600",
          },
        }}
      >
        <DataGrid
          rows={categories}
          columns={columns}
          getRowId={(row) => row.id}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
};
