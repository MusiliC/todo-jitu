import React, { useState } from "react";
import { Tasks } from "./Tasks";

export default function List() {
  const [item, setItem] = useState(Tasks);

  return (
    <div className="list">

      { item.map((items) => (
          <div className="item" key={items.id}>
          
               <ul>
                   <li>{item.length >= 1 ? <p>{items.name}</p> : <h3>There are 0 items in to do</h3>}</li>
               </ul>
          </div>
      ))}
    </div>
  );
}
