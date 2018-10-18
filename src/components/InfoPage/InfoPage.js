import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import axios from 'axios';

const mapStateToProps = state => ({
  user: state.user,
});

class InfoPage extends Component {

  state={
    items: []
  }
  //trigger a /user call
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    axios.get('/api/shelf').then(response=>{
      console.log(response.data);
      this.setState({items: response.data});
    }).catch(error=>{
      console.log('Error in GET:',error);
    })
  }

  // componentDidUpdate runs after props and state have changed.
  //If we arent loading the user call AND we dont have a user, kick us out to home
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('/home');
    }
  }

  handleClick = (id) => {
    axios.delete(`/api/shelf/${id}`).then( ()=> {
      alert('deleted!');
    }).catch(error => alert('error:', error))
   
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
              {this.state.items.map(item => <tr key={item.id}>
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
