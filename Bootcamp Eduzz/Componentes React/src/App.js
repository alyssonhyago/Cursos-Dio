import Item from "./components/item";
import Card from "./components/Card";

const App = () => {
  return(
    <>
    <h1>Minha primeira aplicação com React</h1>
    <ul>
     <Item>Item 1</Item>
     <Item>Item 2</Item>
     <Item>Item 2</Item>
    </ul>
    <Card></Card>
    </>
  
  )
}

export default App;

/*export default function App(){
  return(
    <h1>Hello World</h1>
  )
}*/