import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css"
const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <h3 className="sidebarTitle">Stock</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem"  onClick={()=> navigate("/stock/panneaux")}>Panneaux</li>
          <li className="sidebarListItem" onClick={()=> navigate("/stock/contre-plaque")}>Contre-Plaques</li>

          <li className="sidebarListItem" onClick={()=> navigate("/stock/bois-blanc")}>Bois-Blanc</li>

          <li className="sidebarListItem"  onClick={()=> navigate("/stock/bois-dur")}>Bois-Dur</li>
          <li className="sidebarListItem"  onClick={()=> navigate("/stock/bois-rouge")}>Bois-Rouge</li>
          <li className="sidebarListItem"  onClick={()=> navigate("/stock/bande-chandes")}>Bande-Chandes</li>
          <li className="sidebarListItem"  onClick={()=> navigate("/stock/caissons")}>Caissons</li>
          <li className="sidebarListItem"  onClick={()=> navigate("/stock/divers")}>Divers</li>


        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
