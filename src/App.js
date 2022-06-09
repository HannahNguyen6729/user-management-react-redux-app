import ManagerUserApp from "./ManageUserApp/ManagerUserApp";
import {createStore} from "redux";
//import { configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux';
import rootReducer from "./reduxStore/Reducer/rootReducer";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <ManagerUserApp/>
    </Provider>
  );
}

export default App;
