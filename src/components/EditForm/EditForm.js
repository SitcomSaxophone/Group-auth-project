import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditForm extends Component {

    state = {
        description: '',
        image_url: '',
        // person_id: this.props.user.id
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: SHELF_ACTIONS.EDIT_ITEM, payload: this.state});
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
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.description} placeholder="New Description" onChange={this.handleChange('description')} />
                    <input type="text" value={this.state.image_url} placeholder="New Image URL" onChange={this.handleChange('image_url')} />
                    <input type="submit" />
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(EditForm);