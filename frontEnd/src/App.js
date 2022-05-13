import Item from "./components/item";
import Card from "./components/card";



const App = ()=> {
  return (
    <>
    <div>Hello world</div>
    <Item texto="item1" />
    <Item>children</Item>
    <Item texto="item2"/>
    <Card/> 
    </>
  );
}

export default App;

