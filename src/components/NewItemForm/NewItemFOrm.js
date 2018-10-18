import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import { connect } from 'react-redux';

class NewItemForm extends Component {
    state = {
        description: '',
        image_url: '',
        person_id: this.props.user.id
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios({
        method: 'POST',
        url: '/api/shelf',
        data: this.state
        }).then(response => {
            console.log('add item success!')
        }).catch(error => {
            console.log('error adding item', error)
        });
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

const mapStateToProps = state => ({
    user: state.user,
  });

export default connect(mapStateToProps)(NewItemForm);