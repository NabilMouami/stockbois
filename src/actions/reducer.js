import {
  LOAD_PANNEAUX,
  LOAD_BOISBLANC,
  LOAD_ALLCLIENTS,
  LOAD_FACTURES,
  LOAD_BOISDUR,
  LOAD_CONTREPAQUE,
  LOAD_BOISROUGE,
} from "./type";

const initialStateData = {
  panneaux: [],
  boisblanc: [],
  boisdur: [],
  contreplaques: [],
  boisrouge: [],
};

function reducerdata(state = initialStateData, action) {
  switch (action.type) {
    case LOAD_PANNEAUX:
      return { ...state, panneaux: action.payload };
    case LOAD_BOISBLANC:
      return { ...state, boisblanc: action.payload };
    case LOAD_BOISDUR:
      return { ...state, boisdur: action.payload };
      case LOAD_BOISROUGE:
        return { ...state, boisrouge: action.payload };
  
    case LOAD_CONTREPAQUE:
      return { ...state, contreplaques: action.payload };

    default:
      return state;
  }
}
function reducerClients(state = { clients: [] }, action) {
  switch (action.type) {
    case LOAD_ALLCLIENTS:
      return { ...state, clients: action.payload };
    default:
      return state;
  }
}
function reducerFactures(state = { factures: [] }, action) {
  switch (action.type) {
    case LOAD_FACTURES:
      return { ...state, factures: action.payload };
    default:
      return state;
  }
}
export { reducerdata, reducerClients, reducerFactures };
