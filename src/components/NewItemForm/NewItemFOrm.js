import React, { Component } from 'react';

import Nav from '../Nav/Nav';

class NewItemForm extends Component {
    state = {
        description: '',
        image_url: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    handleChange = (property) => (event) => {
        this.setState({
            ...this.state, 
            [property]: event.target.value
        })
    }

    render() {
        let content = null;
        return (
            <div>
                <Nav />
                {content}

                <h2>
                    Add Item
                 </h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Description" onChange={this.handleChange('description')}/>
                    <input type="text" placeholder="Image URL" onChange={this.handleChange('image_url')}/>
                    <input type="submit" />
                </form>
            </div >
        )
    }
}

export default NewItemForm;