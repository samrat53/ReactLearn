import { useState } from "react";
import "./App.css";
import UnOrderList from "./components/unolList";

function App() {
  let [LuckyNo, setLuckyNo] = useState(-1);
  //uncomment the below to check functionality

  //-------------------------------------------------------------------
  // for (let i = 0; i < 10; i++) {
  //   setTimeout(() => {
  //     setLuckyNo(i);
  //     console.log(i);
  //   }, i * 1000);
  // }
  // ------------------------------------------------------------------
  
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
