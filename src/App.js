import logo from './logo.svg';
import './App.css';
import redux from "react-redux"

const trocarTema = (tema) => {
  return {
    type: "TROCAR_TEMA",
    payload: tema
  };
};

const tarefasReducer = (state = [], action) => {
  switch(action.type){
    case "TROCAR_TEMA":
      return [...state, action.payload];
    default:
      return state;
  }
};

const store = createStore(tarefasReducer)

export default App;
