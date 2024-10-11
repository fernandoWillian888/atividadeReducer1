import React, {useState, useEffect} from "react"
import './App.css';
import redux, {Provider, useDispatch, useSelector} from "react-redux"
import {createStore} from "redux"

const tarefasReducer = (state = { tema: "temaClaro" }, action) => {
  switch (action.type) {
    case "TROCAR_TEMA":
      return { ...state, tema: state.tema === "temaClaro" ? "temaEscuro" : "temaClaro" };
    default:
      return state;
  }
};
const store = createStore(tarefasReducer)
function App(){
const dispatch = useDispatch();
const tema = useSelector(state => state.tema);


useEffect(()=> {
  document.body.className = tema
}, [tema])
  const trocarTema = () => {
    dispatch({type: "TROCAR_TEMA"})
  };

  return (
    <div>
      <h1>Tema Atual: {tema}</h1>
      <button onClick={trocarTema}>Trocar Tema</button>
    </div>
  );
}

const WrappedApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default WrappedApp