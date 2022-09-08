import React from "react";

function CategoryFilter({ categories, setSelectedCategory, selectedCategory }) {

function handleClick(event){
  setSelectedCategory(event.currentTarget.innerText)
}

  const catFilter = categories.map((category) => {
    const className = selectedCategory === category ? "selected": null;
    return <button 
    onClick={handleClick} 
    className={className}
    key={category}>{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catFilter}
    </div>
  );
}

export default CategoryFilter;

