import { useState } from "react";

function ListGroup() {
  let items = [
    "Cse",
    "ece",
    "ee",
    "eie",
    "ce",
    "mech",
    "produc",
    "bio",
    "chem",
  ];

  let [selectedIndex,setSelectedIndex]=useState(-1);
  let [name,setName]=useState(' ');

  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  //   // const button=event.target as HTMLButtonElement;
  //   // console.log(button.innerHTML)};
  // };

  // items=[];

  //1. const getList=()=> (items.length===0) ? (<p>No list found</p>):(null);
  //single line statement in function doesnot need return keyword

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* 1. {getList()} */}

        {items.length === 0 && <p>No list found</p>}
        {/* if the above statement is false then entire statement is false and hence nothing is rendered.
        jump to next line*/}

        {items.map((values, index) => (
          // <li className="list-group-item" key={values} onClick={handleClick}>
          //   {index + 1}.{values}
          // </li>
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={values}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {index + 1}.{values}
          </li>
        ))}

        {/*  2. {items.map((values, index) => (
          <li
            className="list-group-item"
            key={index + 1}
            onClick={(event) => console.log(`value: ${values} and index: ${index} and eventis ${event}`)}
          >
            {index + 1}.{values}
          </li>
        ))} */}

        {/* take each value from the array and convert each value to a list type.
        use curly braces  to render data dynamically */}

        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}
export default ListGroup;
