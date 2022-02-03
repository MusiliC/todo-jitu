import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Create() {
  const [selectedDate, setSelectedDate] = useState("");
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");

  console.log(todo.length, desc.length, selectedDate.length);

  return (
    <section>
      <div className="create">
        <form action="">
          <div className="create">
            <label htmlFor="">Add to do:</label>
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              type="text"
            />

            <label htmlFor="">Description:</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="4"
            ></textarea>
            <label htmlFor="">Select date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              isClearable
              showYearDropdown
              scrollableMonthYearDropdown
            />

            {todo !== "" && desc !== "" && selectedDate !== "" && (
              <button id="todo">Add Todo</button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
