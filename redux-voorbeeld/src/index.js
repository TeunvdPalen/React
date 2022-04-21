import ReactDOM from 'react-dom';
import App from './App';

import store from "./redux/reducer";
import {createStore} from 'redux';
import {Provider} from 'react-redux'


ReactDOM.render(<Provider store={createStore(store)}>
  <App />
</Provider>, document.getElementById('root'));
