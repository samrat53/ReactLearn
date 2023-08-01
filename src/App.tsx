// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;

// const handleSelectItem = (it: string) => {
//   console.log(it);
// };

// function App() {
//   let branchList = [
//     "Cse",
//     "ece",
//     "ee",
//     "eie",
//     "ce",
//     "mech",
//     "produc",
//     "bio",
//     "chem",
//   ];
//   return (
//     <div>
//       <ListGroup
//         items={branchList}
//         heading="Branches"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;
