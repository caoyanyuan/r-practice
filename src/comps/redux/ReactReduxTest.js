import React from "react"
import { connect } from "react-redux"

@connect(
    state => ({ counter: state }),
    {
        add: () => ({type: 'add'}),
        minus: () => ({type: 'minus'}),
        asyncAdd: () => dispatch => {
            setTimeout(() => {
                dispatch({type: 'add', payload: 2})
            },1000)
        }
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