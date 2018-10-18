import { combineReducers } from 'redux';
import { SHELF_ACTIONS } from '../actions/shelfActions';

//message holds the string that will display on the login screen if there's an error
const shelf = (state = [], action) => {
  switch (action.type) {
    case SHELF_ACTIONS.SET_ITEMS:
      return action.payload;
    case SHELF_ACTIONS.POST_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};


//make one object that has keys message, isLoading
export default combineReducers({
  shelf
});