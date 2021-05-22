// import FormTest from "./comps/antd/form/FormTest" 
// import MyFormTest from "./comps/antd/form/MyFormTest" 
import ReduxTest from "./comps/redux/ReduxTest" 
import ReactReduxTest from "./comps/redux/ReactReduxTest" 


import { Provider } from "react-redux"
import store from "./comps/redux/store"

function App() {
  return (
    <Provider store={store}>
      {/* <FormTest></FormTest>
      <MyFormTest></MyFormTest> */}
      <ReactReduxTest />
    </Provider>
  );
}

export default App;
