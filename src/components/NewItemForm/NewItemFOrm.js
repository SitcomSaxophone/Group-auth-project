import React, { Component } from 'react';

import Nav from '../../components/Nav/Nav';

class NewItemForm extends Component {

    handleSubmit = () => {
        console.log('submitted');
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
                    <input type="text" placeholder="Description" />
                    <input type="text" placeholder="Image URL" />
                    <input type="submit" />
                </form>
            </div >
        )
    }
}

export default NewItemForm;