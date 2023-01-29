import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadfactures } from "../../../actions/action";
import MainDash from "./MainDash/MainDash";

function Dashboard() {
  const dispatch = useDispatch();
  const factures = useSelector((state) => state.Factures.factures);

  useEffect(() => {
    dispatch(loadfactures());
  }, []);
  const angle = 0.75 * 360;
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box mb="30px">
            <Typography
              variant="h2"
              color="#e0e0e0"
              fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
            >
              DASHBOARD
            </Typography>
            <Typography variant="h5" color="#70d8bd">
              Statistics Sur les Derniers Changements
            </Typography>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 3"
            backgroundColor="#1F2A40"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box width="100%" m="0 30px">
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <EmailIcon sx={{ color: "#3da58a", fontSize: "26px" }} />
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ color: "#e0e0e0" }}
                  >
                    {factures.length}
                  </Typography>
                </Box>
                <Box>
                  <Box
                    sx={{
                      background: `radial-gradient(red 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, green ${angle}deg 360deg),
            blue`,
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                    }}
                  />{" "}
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" mt="2px">
                <Typography variant="h5" sx={{ color: "#4cceac" }}>
                  Factures
                </Typography>
                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: "#3da58a" }}
                >
                  +14%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <MainDash />

      </Box>
    </div>
  );
}

export default Dashboard;
