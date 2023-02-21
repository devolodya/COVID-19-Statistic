import React from "react";
import "../../styles/Header/Search.scss";
import { useDispatch } from "react-redux";
import { sort } from "../../store/sort_slice";
const Search = () => {
  const dispatch = useDispatch();
  const inputCheck = (e: any) => {
    dispatch(sort(e.target.value));
  };
  return (
    <div className="search">
      <input placeholder="Search..." type="text" onChange={inputCheck} />
    </div>
  );
};

export default Search;
