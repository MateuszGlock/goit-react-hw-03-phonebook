import { Component } from "react";

import ContactForm from "./contacts/contactForm";
import ContactList from "./contacts/contactList";
import Filter from "./contacts/filter";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    if (contacts.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  addContact = (contact) => {
    const isDuplicate = this.state.contacts.some(
      (existingContact) =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase(),
    );

    if (isDuplicate) {
      alert(`${contact.name} is already in the contact list.`);
    } else
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId,
      ),
    }));
  };

  handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleChange} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
