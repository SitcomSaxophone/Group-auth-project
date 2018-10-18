import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import { connect } from 'react-redux';
import { SHELF_ACTIONS } from '../../redux/actions/shelfActions';

class NewItemForm extends Component {
    state = {
        description: '',
        image_url: '',
        person_id: this.props.user.id
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: SHELF_ACTIONS.POST_ITEM, payload: this.state});
        this.setState({
            description: '',
            image_url: '',
        })
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
                    <input type="text" value={this.state.description} placeholder="Description" onChange={this.handleChange('description')} />
                    <input type="text" value={this.state.image_url} placeholder="Image URL" onChange={this.handleChange('image_url')} />
                    <input type="submit" />
                </form>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(NewItemForm);