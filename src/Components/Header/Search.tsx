import "../../styles/header/search.scss";
import { useDispatch } from "react-redux";
import { sort } from "../../store/sort-slice";
const Search = () => {
  const dispatch = useDispatch();
  return (
    <div className="search">
      <input
        placeholder="Search..."
        onChange={(e) => dispatch(sort(e.target.value))}
      />
    </div>
  );
};

export default Search;
