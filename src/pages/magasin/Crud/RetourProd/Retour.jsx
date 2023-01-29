import { useState, useRef, useEffect } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import axios from "axios";
import Sidebar from "../../sidebar/Sidebar";
function Retour() {
  const pann = useSelector((state) => state.stock.panneaux);
  const boisblanc = useSelector((state) => state.stock.boisblanc);
  const boisdur = useSelector((state) => state.stock.boisdur);
  const contreplaques = useSelector((state) => state.stock.contreplaques);

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
   const [sscategory,setsscategory] = useState("");
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...post,
      [name]: value,
    });
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
      obj["quantity"] = filtredCat[i].qty;
      obj["sscategory"] = filtredCat[i].sscategory;
      obj["value"] = filtredCat[i].type;
      obj["label"] = filtredCat[i].type;
    }
    OptCategories.push(obj);
    console.log(OptCategories);
  }
  const handleOptionType = (e) => {
    setUser({
      ...post,
      prod_id: e.id,
    });
    setsscategory(e.sscategory);
    setQuantity(e.quantity);
  };

  const handleOptionCategory = (e) => {
    setUser({
      ...post,
      category: e.label,
    });

    setCategory(e.label);
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <article className="md:grid grid-cols-2 gap-10 md:mt-16">

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
                    <label htmlFor="quantity">quantity:</label>
                     <input type="number" name="quantity" defaultValue={quantity}/>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="quantity">Sscategorie:</label>
                     <input type="text" name="sscategory" defaultValue={sscategory}/>
                    </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"
                  >
                    Update
                  </button>


      </article>
    </div>
  );
}

export default Retour;
