import styles from "./Contacts.module.scss";

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

export default ContactItem;
