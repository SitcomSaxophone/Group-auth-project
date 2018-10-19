import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHELF_ACTIONS } from '../../redux/actions/shelfActions';

class EditForm extends Component {

    state = {
        description: '',
        image_url: '',
        // person_id: this.props.user.id
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: SHELF_ACTIONS.EDIT_ITEM, payload: this.state });
        this.props.history.push('/info');
    }

    handleChange = (property) => (event) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>
                    Edit Item
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.description} placeholder="Edit Description" onChange={this.handleChange('description')} />
                    <input type="text" value={this.state.image_url} placeholder="Edit Image URL" onChange={this.handleChange('image_url')} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(EditForm);