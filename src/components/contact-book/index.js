import React from 'react';
import { uuid } from 'uuidv4';
import './styles.scss'
import Contact from '../contact';
import AddContact from '../add-contact';
import EditContact from '../edit-contact'
import logo from '../../assets/logo.jpg'

class ContactBook extends React.Component {
    state = {
        contacts: [
            {
                id: uuid(),
                firstName: 'Propulsion',
                lastName: 'Academy',
                address: 'Zurich',
                phoneNumber: '+41...',
                avatar: undefined,
                defaultAvatar: logo,
                edit: false
            },
            {
                id: uuid(),
                firstName: 'Hristo',
                lastName: 'Georgiev',
                address: 'Zurich',
                phoneNumber: '+41...',
                avatar: undefined,
                defaultAvatar: logo,
                edit: false
            }
        ],
        createNewContact: false
    }

    submitContact = (newContact) => {
        this.setState({
            contacts: [...this.state.contacts, newContact],
            createNewContact: false
        });
    }

    removeContact = (clickedContact) => {
        const updatedContactsList = this.state.contacts.filter(contact => contact.id !== clickedContact.id);
        this.setState({
            contacts: updatedContactsList
        });
    }

    showEdit = (clickedContact) => {
        const updatedContacts = this.state.contacts.map(contact => {
            if (clickedContact.id === contact.id) {
                return {
                    ...contact,
                    edit: !contact.edit
                }
            } else {
                return contact;
            }
        })

        this.setState({
            contacts: updatedContacts
        });
    }

    editContact = (updatedData) => {
        const updatedContacts = this.state.contacts.map(contact => {
            if (contact.id === updatedData.id) {
                return {
                    ...updatedData
                }
            } else {
                return contact;
            }
        })
        this.setState({
            contacts: updatedContacts
        });
    }

    createNewContact = () => {
        this.setState({
            createNewContact: !this.state.createNewContact
        });
    }

    render() {
        return (
            <div className="contact-book-wrapper">
                <h3>Contact book</h3>
                <div className="contact-book-header">
                    <button className="add-contact-button" onClick={() => this.createNewContact()}></button>
                </div>
                {this.state.createNewContact === true ? <AddContact submitContact={this.submitContact}/> : null}
                <ul>
                    {this.state.contacts.map(contact => {
                        return (
                            <li key={contact.id}>
                                <div className="contact-entry-wrapper">
                                    <Contact firstName={contact.firstName} lastName={contact.lastName} address={contact.address} phoneNumber={contact.phoneNumber} avatar={contact.avatar} defaultAvatar={contact.defaultAvatar}/>
                                    <button className="buttons" onClick={() => this.showEdit(contact)}>Update</button>
                                </div>
                                {contact.edit ? <EditContact editContact={this.editContact} firstName={contact.firstName} lastName={contact.lastName} address={contact.address} phoneNumber={contact.phoneNumber} avatar={contact.avatar} defaultAvatar={contact.defaultAvatar} id={contact.id} removeContact={this.removeContact}/> : null}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ContactBook;