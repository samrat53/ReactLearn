import "./App.css";
import UnOrderList from "./components/unolList";

function App() {

  const LuckyNo = 5;
  // let currYear=new Date().getFullYear();

  return (
    <>
      <UnOrderList
        children={LuckyNo}
        day={new Date().getFullYear()}
      ></UnOrderList>
    </>
  );
}

export default App;
