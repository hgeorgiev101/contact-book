import React from 'react';
import './styles.scss';


class Contact extends React.Component {
    render() {
        return <span key={this.props.id}>
            {this.props.avatar ? <img src={URL.createObjectURL(this.props.avatar)} alt="avatar" width="50"/> : null} 
            {this.props.defaultAvatar ? <img src={this.props.defaultAvatar} alt="avatar" width="50"/> : null} 
            Name: {this.props.firstName} {this.props.lastName}
            </span>
    }
}

export default Contact;