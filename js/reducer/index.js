import { combineReducers } from 'redux';

import * as user from './user';
import * as app from './app';

export default combineReducers({
  ...user,
  ...app
});
