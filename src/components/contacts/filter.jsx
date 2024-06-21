import { nanoid } from "nanoid";
import styles from "./Contacts.module.scss";

const Filter = ({ filter, onChange }) => {
  const searchId = nanoid();
  return (
    <div>
      <label htmlFor={searchId}>Find contacts</label>
      <input
        type="text"
        id={searchId}
        name="filter"
        value={filter}
        onChange={onChange}
        className={styles["filter-input"]}></input>
    </div>
  );
};
export default Filter;
