import { useState } from "react";

const AddCategory = ({ onNewCategorie }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    //setCategories((categories) => [...categories, inputValue]);
    onNewCategorie(inputValue.trim());
    setinputValue("");
  };

  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
