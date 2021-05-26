import React from "react"
import { connect } from "./store/mreact-redux"
import { add, minus, asyncAdd } from "./store/counter"
@connect(
    state => ({ counter: state }),
    {
        add, minus, asyncAdd
    }
)
class ReactReduxTest extends React.Component{
    render() {
        return (
            <div>
                <div>react redux test</div>
                {this.props.counter}
                <button onClick={() => this.props.asyncAdd()}>+</button>
            </div>
            
        )
    }
}

export default ReactReduxTest