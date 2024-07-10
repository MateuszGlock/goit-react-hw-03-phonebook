import { nanoid } from "nanoid";
import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Contacts.module.scss";

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
  handleSubmit = (ev) => {
    ev.preventDefault();
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
