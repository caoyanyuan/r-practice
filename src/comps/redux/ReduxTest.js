import React from "react"
import store from "./store/mIndex"

class ReduxTest extends React.Component{
    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate()
        })
    }
    asyncAdd() {
        store.dispatch(dispatch => {
            setTimeout(() => {
                dispatch({type: 'add', payload: 2})
            },1000)
        })
    }
    render() {
        return (
            <div>
                {store.getState()}
                <button onClick={() => store.dispatch({type:'add'})}>+</button>
                <button onClick={this.asyncAdd}>+</button>

            </div>
            
        )
    }
}

export default ReduxTest