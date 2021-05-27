// import FormTest from "./comps/antd/form/FormTest" 
// import MyFormTest from "./comps/antd/form/MyFormTest" 
import ReduxTest from "./comps/redux/ReduxTest" 
import ReactReduxTest from "./comps/redux/ReactReduxTest" 
import TryRoute from "./comps/router/TryRoute"
import React from "react"
function App() {
  return (
    <div>
      {/* <FormTest></FormTest>
      <MyFormTest></MyFormTest> */}

      {/* <ReduxTest />
      <ReactReduxTest /> */}
      <TryRoute loading={true} />
    </div>
  );
}

export default App;
