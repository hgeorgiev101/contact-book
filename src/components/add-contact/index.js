import React from 'react';
import { uuid } from 'uuidv4';
import './styles.scss'

class AddContact extends React.Component {
    state = {
        id: uuid(),
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        avatar: undefined,
        defaultAvatar: undefined
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.phoneNumber && this.state.address && this.state.avatar) {
            this.props.submitContact(this.state);
        }
        this.setState({
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: ""
        })
    }

    handleAvatar = (event) => {
        this.setState({
            avatar: event.target.files[0]
        })
    }

    render() {
        return <div className="form-wrapper">
            <h3>Add new contact</h3>
            <form className="contact-form" onSubmit={this.submitHandler}>
                <label>
                    First Name:{" "}
                    <input type="text" placeholder="..." value={this.state.firstName} name="firstName" onChange={this.handleChange}/>
                </label>
                <label>
                    Last Name:{" "}
                    <input type="text" placeholder="..." value={this.state.lastName} name="lastName" onChange={this.handleChange}/>
                </label>
                <label>
                    Address:{" "}
                    <input type="text" placeholder="..." value={this.state.address} name="address" onChange={this.handleChange}/>
                </label>
                <label>
                    Phone Number:{" "}
                    <input type="text" placeholder="+41 ..." value={this.state.phoneNumber} name="phoneNumber" onChange={this.handleChange}/>
                </label>
                <label>
                    Avatar: {" "}
                    <input type="file" onChange={this.handleAvatar} name="avatar"/>
                </label>
                <input className="buttons" type="submit" value="Save contact"/>
            </form>
        </div>
    }
}


export default AddContact;