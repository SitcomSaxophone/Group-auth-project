import { put, takeLatest } from 'redux-saga/effects';
import { SHELF_ACTIONS } from '../actions/shelfActions';
import { callShelf, deleteShelfItem, addItem } from '../requests/shelfRequests';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchItems() {
  try {
    const shelf = yield callShelf();
    // sets that the async request is in progress
    yield put({ type: SHELF_ACTIONS.SET_ITEMS, payload: shelf });
  } catch (error) {
    console.log(error => console.log('Error in fetchItems',error));
  }
}

function* postItem(action) {
  try {
    yield addItem(action);
    yield put({type: SHELF_ACTIONS.FETCH_ITEMS}) 
  } catch (error) {
    console.log( 'error adding item', error);
  }
}

function* deleteItem(action) {
  try{
    yield deleteShelfItem(action.payload);
    yield put({type: SHELF_ACTIONS.FETCH_ITEMS}); 
  } catch (error) {
    console.log('Error in deleteItem():', error);
  }
}


function* shelfSaga() {
  yield takeLatest(SHELF_ACTIONS.FETCH_ITEMS, fetchItems);
  yield takeLatest(SHELF_ACTIONS.DELETE_ITEM, deleteItem);
  yield takeLatest(SHELF_ACTIONS.POST_ITEM, postItem);

}

export default shelfSaga;