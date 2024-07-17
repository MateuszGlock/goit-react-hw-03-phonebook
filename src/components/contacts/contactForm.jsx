import { nanoid } from "nanoid";
import { Component } from "react";
import styles from "./Contacts.module.scss";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  validateInput = () => {
    const { name, number } = this.state;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const numberRegex = /^\d+$/;

    if (!nameRegex.test(name)) {
      alert("Name must contain only letters and spaces.");
      return false;
    }

    if (!numberRegex.test(number)) {
      alert("Phone number must contain only digits.");
      return false;
    }

    return true;
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (!this.validateInput()) return;

    const { name, number } = this.state;
    this.props.onAddContact({ id: nanoid(), name, number });
    this.setState({ name: "", number: "" });
  };
  render() {
    const nameId = nanoid();
    const numId = nanoid();
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label htmlFor={nameId}>Name</label>
          <input
            id={nameId}
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor={numId}>Phone number</label>
          <input
            id={numId}
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
