import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {

    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = e => dispatch(changeFilter(e.target.value));

    return (
        <div className={s.search}>
            <p>Find contacts by name</p>
            <input className={s.field} type="text" value={filter} onChange={handleChange} />
        </div>
    );
};

export default SearchBox;