import React from 'react';
import './styles.scss'

class EditContact extends React.Component {
    state = {
        id: this.props.id,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        address: this.props.address,
        phoneNumber: this.props.phoneNumber,
        avatar: this.props.avatar,
        defaultAvatar: this.props.defaultAvatar
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    editHandler = (event) => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.address && this.state.phoneNumber) {
            this.props.editContact(this.state);
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
            avatar: event.target.files[0],
            defaultAvatar: undefined
        })
    }

    render() {
        return <div className="form-wrapper">
            <h3>Contact Info</h3>
            <form className="contact-form" onSubmit={this.editHandler}>
                {this.props.avatar ? <img src={URL.createObjectURL(this.props.avatar)} alt="avatar" width="30"/> : null} 
                {this.props.defaultAvatar ? <img src={this.props.defaultAvatar} alt="avatar" width="30"/> : null}
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
                    <input type="text" placeholder="Address" value={this.state.address} name="address" onChange={this.handleChange}/>
                </label>
                <label>
                    Phone Number:{" "}
                    <input type="text" placeholder="+41 ..." value={this.state.phoneNumber} name="phoneNumber" onChange={this.handleChange}/>
                </label>
                <label>
                    New avatar: {" "}
                    <input type="file" onChange={this.handleAvatar} name="avatar"/>
                </label>
                <button className="buttons" style={{backgroundColor: 'red'}} onClick={() => this.props.removeContact(this.state)}>Remove Contact</button>
                <input className="buttons" type="submit" value="Save changes"/>
            </form>
        </div>
    }
}


export default EditContact;