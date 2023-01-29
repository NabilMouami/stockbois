import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Calendar from "./pages/commerciel/calendar/Calendar";
import { Clients } from "./pages/commerciel/client/Clients";
import Factures from "./pages/commerciel/facture/Factures";
import { NewFacture } from "./pages/commerciel/facture/NewFacture";
import { FilterStock } from "./pages/FilterStock/FilterStock";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import { AddClient } from "./pages/magasin/Crud/AddClient/AddClient";
import AddProd from "./pages/magasin/Crud/AddProd/AddProd";
import { CrudProd } from "./pages/magasin/Crud/CrudProd";
import Topbar from "./components/topbar/Topbar";
import Dashboard from "./pages/directeur/dashboard/Dashboard";
import StatusInvoices from "./pages/directeur/dashboard/StatusInvoices";
import FacturesBalance from "./pages/directeur/dashboard/FacturesBalance";
import Chargement from "./pages/directeur/dashboard/Chargement";
import Retour from "./pages/magasin/Crud/RetourProd/Retour";
import { Linechart } from "./pages/directeur/dashboard/statistics/LineChart";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Topbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/manager/home" element={<CrudProd />} />
        <Route path="/manager/addproduct" element={<AddProd />} />
        <Route path="/manager/addclient" element={<AddClient />} />
        <Route path="/manager/retour" element={<Retour />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/stock/:name" element={<FilterStock />} />
        <Route path="/commerciel/facture/new" element={<NewFacture />} />
        <Route path="/commerciel/factures" element={<Factures />} />
        <Route path="/commerciel/calendar" element={<Calendar />} />
        <Route path="/directeur/" element={<Dashboard />} />
        <Route path="/directeur/status-factures" element={<StatusInvoices />} />
        <Route path="/directeur/factures" element={<FacturesBalance />} />
        <Route path="/directeur/chargements" element={<Chargement />} />
        <Route path="/directeur/statistics/linechart" element={<Linechart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
