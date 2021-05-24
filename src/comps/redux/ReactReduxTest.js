import React from "react"
import { connect } from "react-redux"
import { add, minus, asyncAdd } from "./store/counter"
@connect(
    state => ({ counter: state }),
    {
        add, minus, asyncAdd
    }
)
class ReactReduxTest extends React.Component{
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.counter}
                <button onClick={this.props.asyncAdd}>+</button>
            </div>
            
        )
    }
}

export default ReactReduxTest