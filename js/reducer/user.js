import { handleActions } from 'redux-actions';

export var loginForm = handleActions({
  'memberLoginResult': (state, action) => (action.error ? state : action.meta)
},{});


export var productList = handleActions({
  'productListResult': (state, action) => (action.error ? state : action.payload)
},[]);
