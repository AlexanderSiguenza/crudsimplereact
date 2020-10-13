import React, { Component } from 'react';

class AddUser extends Component {

    state = {
        name: null,
        age: null,
        isEditing: false
    }

    //llamar a addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        e.target.reset();
    }

    // estado de actualización
    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s4">
                        <input name="name" autoComplete="off" placeholder="Ingrese su nombre" required type="text" onChange={this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="age" autoComplete="off" type="number" required placeholder="Ingrese su edad" onChange={this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Agregar +" className="btn blue" />
                    </div>
                </form>
            </div>
        );
    }
}
export default AddUser;