import React from "react"
import store from "./store/index"

class ReduxTest extends React.Component{
    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate()
        })
    }
    render() {
        return (
            <div>
                {store.getState()}
                <button onClick={() => store.dispatch({type:'add'})}>+</button>
            </div>
            
        )
    }
}

export default ReduxTest