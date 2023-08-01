import ListGroup from "./ListGroup";

function App(){
  let items = [
    "Cse",
    "ece",
    "ee",
    "eie",
    "ce",
    "mech",
    "produc",
    "bio",
    "chem"
  ];
  return <div><ListGroup items={items} heading="Branches"/></div>
}

export default App;