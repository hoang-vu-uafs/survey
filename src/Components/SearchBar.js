import React from "react";

function SearchBar(props) {
  function onChangeHandle(e) {
    props.inputHandle(e.target.value);
  }

  return <input type="text" onChange={(e) => onChangeHandle(e)} />;
}

export default SearchBar;
