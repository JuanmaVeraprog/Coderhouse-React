import "./App.css";
import ItemList from "./components/ItemList/ItemList";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <ItemList/>
  
      <ItemListContainer greeting={"Derechos de autor reservados para @Nike"}/>
    </div>
  );
}

export default App;
