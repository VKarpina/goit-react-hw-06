import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleFilterChange = (filter) => dispatch(changeFilter(filter));

  return (
    <div className={styles.search}>
      <p className={styles.text}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={(e) => handleFilterChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
