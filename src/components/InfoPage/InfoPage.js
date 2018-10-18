import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { SHELF_ACTIONS } from '../../redux/actions/shelfActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
  shelf: state.shelf,

});

class InfoPage extends Component {

  state={
    items: []
  }
  //trigger a /user call
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    this.props.dispatch({type: SHELF_ACTIONS.FETCH_ITEMS});

  }

  // componentDidUpdate runs after props and state have changed.
  //If we arent loading the user call AND we dont have a user, kick us out to home
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('/home');
    }
  }

  handleClick = (id) => {
    this.props.dispatch({type: SHELF_ACTIONS.DELETE_ITEM, payload: id});
   
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <p>
            Info Page
          </p>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Image</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.shelf.shelf.map(item => <tr key={item.id}>
              <td>{item.description}</td>
              <td><img src={item.image_url} style={{height: "200px", width: "200px"}}/></td>
              <td><button onClick={()=>this.handleClick(item.id)}>Delete</button></td></tr>)}
            </tbody>
          </table>

        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
