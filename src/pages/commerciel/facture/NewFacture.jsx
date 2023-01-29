import { useState, useRef, useEffect } from "react";
import ReactToPrint from "react-to-print";
import Sidebar from "../sidebar/Sidebar";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";

import TableForm from "./TableForm";
import Select from "react-select";
import { useSelector } from "react-redux";
import axios from "axios";
export const NewFacture = () => {
  const load = useSelector((state) => state.Clients.clients);
  const pann = useSelector((state) => state.stock.panneaux);
  const boisblanc = useSelector((state) => state.stock.boisblanc);
  const boisdur = useSelector((state) => state.stock.boisdur);
  const contreplaques = useSelector((state) => state.stock.contreplaques);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(200);
  const [amount, setAmount] = useState("");
  const [tax, setTax] = useState(1);
  const [type, setType] = useState("");

  const [list, setList] = useState([]);
  console.log(list);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);

  const [post, setUser] = useState({
    prod_id: "",
    cli_id: "",
    status: "",
    nemuro: "",
    dateCreated: "",
    dateEcheance: "",
    quantity: "",
    totalprix: "",
  });
  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    switch (category) {
      case "Panneaux":
        return setCategories(pann);
      case "Bois-Blanc":
        return setCategories(boisblanc);
      case "Bois-Dur":
        return setCategories(boisdur);
      case "Contre-Plaques":
        return setCategories(contreplaques);

      default:
        return setCategories([]);
    }
  }, [category]);
  const options = [
    { value: "panneaux", label: "Panneaux" },
    { value: "contre-plaques", label: "Contre-Plaques" },
    { value: "bois-blanc", label: "Bois-Blanc" },
    { value: "bois-dur", label: "Bois-Dur" },
    { value: "bois-rouge", label: "Bois-Rouge" },
    { value: "bande-chandes", label: "Bande-Chandes" },
    { value: "caissons", label: "Caissons" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...post,
      [name]: value,
    });
  };
  const hamid = {
    ...post,
    quantity: parseInt(quantity),
    totalprix: parseInt(amount),
  };
  console.log(hamid);
  const selOptionClient = [];
  const ids = load.map((o) => o.name);
  const filtered = load.filter(
    ({ name }, index) => !ids.includes(name, index + 1)
  );

  for (var i = 0; i < filtered.length; i++) {
    var obj = {};
    if (filtered.length > 0) {
      obj["id"] = filtered[i].id;
      obj["name"] = filtered[i].name;
      obj["value"] = filtered[i].name;
      obj["label"] = filtered[i].name;
    }
    selOptionClient.push(obj);
  }
  const OptCategories = [];
  const idscat = categories?.map((c) => c.type);
  const filtredCat = categories?.filter(
    ({ type }, index) => !idscat.includes(type, index + 1)
  );
  for (var i = 0; i < filtredCat.length; i++) {
    var obj = {};
    if (filtredCat.length > 0) {
      obj["id"] = filtredCat[i].id;
      obj["type"] = filtredCat[i].type;
      obj["price"] = filtredCat[i].price;
      obj["value"] = filtredCat[i].type;
      obj["label"] = filtredCat[i].type;
    }
    OptCategories.push(obj);
    console.log(OptCategories);
  }
  const handleOptionClient = (e) => {
    setUser({
      ...post,
      cli_id: e.id,
    });
  };
  const handleOptionType = (e) => {
    setUser({
      ...post,
      prod_id: e.id,
    });
    setPrice(e.price);
    setType(e.type);
  };

  const handleOptionCategory = (e) => {
    setUser({
      ...post,
      category: e.label,
    });

    setCategory(e.label);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/v1/createFacture", hamid).then(() => {
      console.log("Facture Added!!");
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start">
        <section>
          <div className="bg-white p-5 rounded shadow">
            {/* name, address, email, phone, bank name, bank account number, website client name, client address, invoice number, invoice date, due date, notes */}
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your full name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter your address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your Cne</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter your bank name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank name"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAccount">
                    Enter your bank account number
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your bank account number"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Enter your client's address
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your client's address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <form onSubmit={submitHandler}>
                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="invoiceNumber">Facture Number</label>
                    <input
                      type="number"
                      name="nemuro"
                      id="invoiceNumber"
                      placeholder="Facture Number"
                      autoComplete="off"
                      defaultValue={post.nemuro}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="invoiceDate">Date Facturation</label>
                    <input
                      type="date"
                      name="dateCreated"
                      id="invoiceDate"
                      placeholder="Date Facturation"
                      autoComplete="off"
                      defaultValue={post.dateCreated}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="dueDate">Date Echeance</label>
                    <input
                      type="date"
                      name="dateEcheance"
                      id="dueDate"
                      placeholder="Date Echeance"
                      autoComplete="off"
                      defaultValue={post.dateEcheance}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="dueDate">Category:</label>

                    <Select
                      className="selOptions"
                      options={options}
                      onChange={handleOptionCategory}
                      isSearchable={true}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="dueDate">Type:</label>

                    <Select
                      className="selOptions"
                      options={OptCategories}
                      onChange={handleOptionType}
                      isSearchable={true}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="dueDate">Client:</label>

                    <Select
                      className="selOptions"
                      options={selOptionClient}
                      onChange={handleOptionClient}
                      isSearchable={true}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"
                  >
                    Save
                  </button>
                </article>
              </form>

              {/* This is our table form */}
              <article>
                <TableForm
                  category={category}
                  type={type}
                  tax={tax}
                  status={post.status}
                  setTax={setTax}
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  post={post}
                  price={price}
                  setPrice={setPrice}
                  setUser={setUser}
                  amount={amount}
                  setAmount={setAmount}
                  handleChange={handleChange}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>
              <div class="card-body p-4 pt-3">
                <div class="btn-group">
                  <button
                    onClick={() => {
                      setUser({
                        ...post,
                        status: "Paid",
                      });
                    }}
                    type="button"
                    className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded"
                  >
                    Save As Paid
                  </button>
                  <button
                    onClick={() => {
                      setUser({
                        ...post,
                        status: "UnPaid",
                      });
                    }}
                    type="button"
                    className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white font-normal py-2 px-4 rounded"
                  >
                    Save As UnPaid
                  </button>
                  <button
                    onClick={() => {
                      setUser({
                        ...post,
                        status: "Draft",
                      });
                    }}
                    type="button"
                    className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded"
                  >
                    Save As Draft
                  </button>
                </div>
              </div>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              {/* <button
            onClick={() => setShowInvoice(true)}
            className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Preview Invoice
          </button> */}
            </div>
          </div>
        </section>

        {/* Invoice Preview */}
        <div className="invoice__preview bg-white p-5 rounded">
          <ReactToPrint
            trigger={() => (
              <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Print / Download
              </button>
            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef} className="p-5">
            <Header handlePrint={handlePrint} />

            {/*<MainDetails name={name} address={address} />*/}

            <ClientDetails clientName={name} clientAddress={address} />

            <Dates post={post} />

            <Table
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />

            <Notes notes={notes} />

            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}
            />
          </div>

          {/* <button
          onClick={() => setShowInvoice(false)}
          className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          Edit Information
        </button> */}
        </div>
      </main>
    </div>
  );
};
