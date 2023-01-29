import React,{useState,useEffect} from "react";
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Sidebar from "../sidebar/sidebar";

function Chargement() {
   const [chargements,setChargements] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/api/v1/calendars").then((res) => {
        setChargements(res.data)
    });

  },[])
  const columns = [
    {
      field: "adress",
      headerName: "Adress",
      headerClassName: "super-app-theme--cell",

      width: 120,
      editable: true,
    },
    {
        field: "name",
        headerName: "Name",
        headerClassName: "super-app-theme--cell",
  
        width: 200,
        editable: true,
      },
      {
        field: "commerciel",
        headerName: "Commerciel",
        headerClassName: "super-app-theme--cell",
  
        width: 120,
        editable: true,
      },
      {
        field: "dateCalendar",
        headerName: "Date Chargement",
        headerClassName: "super-app-theme--cell",
  
        width: 160,
        editable: true,
      },
      {
        field: "notice",
        headerName: "Chargements",
        headerClassName: "super-app-theme--cell",
  
        width: 250,
        editable: true,
      },
  ]
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
        rows={chargements}
        columns={columns}
        getRowId={(row) => row.id}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  </div>  )
}

export default Chargement