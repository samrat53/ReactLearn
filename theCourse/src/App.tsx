import { useState } from "react";
import "./App.css";
import UnOrderList from "./components/unolList";

function App() {
  let [LuckyNo, setLuckyNo] = useState(0);
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      setLuckyNo(i);
      console.log(i);
    }, i * 1000);
    
  }
  // const LuckyNo = 5;
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
