import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { SHELF_ACTIONS } from '../../redux/actions/shelfActions';

const mapStateToProps = state => ({
  user: state.user,
  count: state.count 
});

class InfoPage extends Component {

  state={
    items: []
  }
  //trigger a /user call
  componentDidMount() {
    this.props.dispatch({type: SHELF_ACTIONS.ITEM_COUNT});
  }

  // componentDidUpdate runs after props and state have changed.
  //If we arent loading the user call AND we dont have a user, kick us out to home
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('/home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <p>
            Count Page
          </p>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {this.props.count.count.map(user => <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.count}</td></tr>)}
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
