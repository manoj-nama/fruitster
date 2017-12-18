import { combineReducers } from 'redux';
import UserReducer from './user.reducer';
import AuthReducer from './auth.reducer';
import MenuReducer from './menu.reducer';
import CartReducer from './cart.reducer';

const reducers = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
  menu: MenuReducer,
  cart: CartReducer
});

export default reducers;