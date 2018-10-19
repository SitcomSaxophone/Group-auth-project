import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHELF_ACTIONS } from '../../redux/actions/shelfActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    shelf: state.shelf,

});

class ItemRow extends Component {

    //   state = {
    //     items: [],
    //     showEdit: false,
    //   }
    //   //trigger a /user call
    //   componentDidMount() {
    //     this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    //     this.props.dispatch({ type: SHELF_ACTIONS.FETCH_ITEMS });

    //   }

    //   // componentDidUpdate runs after props and state have changed.
    //   //If we arent loading the user call AND we dont have a user, kick us out to home
    //   componentDidUpdate() {
    //     if (!this.props.user.isLoading && this.props.user.userName === null) {
    //       this.props.history.push('/home');
    //     }
    //   }

    //   handleClick = (id) => {
    //     this.props.dispatch({ type: SHELF_ACTIONS.DELETE_ITEM, payload: id });

    //   }



    render() {

        return (
            <React.Fragment>

                <tr key={this.props.item.id}>
                    <td>{this.props.item.description}</td>
                    <td><img src={this.props.item.image_url} style={{ height: "200px", width: "200px" }} /></td>
                    <td>
                        <button onClick={() => this.props.handleClick(this.props.item.id)}>Delete</button>
                        <button onClick={this.props.handleToggle(this.props.item.id)}>Edit</button>
                    </td>
                </tr>

            </React.Fragment>
        );
    }


}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ItemRow);