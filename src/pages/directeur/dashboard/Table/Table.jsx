import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];

const makeStyle = (status) => {
  if (status === "Paid") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "UnPaid") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  const [factures, setFactures] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/factures").then((res) => {
      setFactures(res.data);
    });
  }, []);
  return (
    <div className="Table">
      <h3 style={{ color: "#242d49", fontWeight: "bold",marginTop: "20px" }}>Status Des Facture</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Type</TableCell>
              <TableCell align="left">Quantity</TableCell>

              <TableCell align="left">Facture ID</TableCell>
              <TableCell align="left">Date Creation</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Total Prix</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {factures.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.category}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell align="left">{row.quantity}</TableCell>

                <TableCell align="left">{row.nemuro}</TableCell>
                <TableCell align="left">{row.dateCreated}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  {row.totalprix}DH
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
