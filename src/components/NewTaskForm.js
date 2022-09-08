import React, { useState } from "react";

function NewTaskForm({ categories, addTask }) {
  const [details, setDetails] = useState("")
  const [cat, setCat] = useState("Code")


  const categoryOptions = categories
    .filter((category) => category !== "All" )
    .map((category) => {
      return <option key={category}>{category}</option>
    })

  function handleSubmit(e){
    e.preventDefault()
    const newTask = {
      text: details,
      category: cat
    }
    addTask(newTask)
    setDetails("")
    setCat("Code")
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" value={details} onChange={e => setDetails(e.target.value)} name="text" />
      </label>
      <label>
        Category
        <select value={cat} onChange={e => setCat(e.target.value)} name="category">
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
