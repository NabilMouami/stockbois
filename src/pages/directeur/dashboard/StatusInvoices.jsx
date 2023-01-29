import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import axios from "axios"
const StatusInvoices = () => {
    const [factures, setFactures] = useState([]);
    console.log(factures)
    useEffect(() => {
      axios.get("http://localhost:8080/api/v1/factures").then((res) => {
        setFactures(res.data);
      });
    }, []);
  
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor="#f2f0f0"
        overflow="auto"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="4px solid #141b2d"
          colors="#141414"
          p="15px"
        >
          <Typography color="#141414" variant="h5" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#f2f0f0"
          overflow="auto"
        >
         {factures.map((transaction, i) => (
            <Box
              key={`${transaction.id}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom="4px solid #141b2d"
              p="15px"
            >
              <Box>
                <Typography color="#4cceac" variant="h5" fontWeight="600">
                  {transaction.nemuro}
                </Typography>
                <Box backgroundColor="#4cce" p="5px 10px" borderRadius="4px">
                <Typography color="#141414">{transaction.status}</Typography>
                </Box>
              </Box>
              <Box color="#141414">{transaction.dateCreated}</Box>
              <Box backgroundColor="#4cceac" p="5px 10px" borderRadius="4px">
                {transaction.totalprix}Dh
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default StatusInvoices;
