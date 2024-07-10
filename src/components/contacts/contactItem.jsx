import styles from "./Contacts.module.scss";
import PropTypes from "prop-types";

const ContactItem = ({ contact, onDeleteContact }) => (
  <li>
    {contact.name} - {contact.number}
    <button
      className={styles["delete-button"]}
      onClick={() => onDeleteContact(contact.id)}>
      Delete
    </button>
  </li>
);
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactItem;
