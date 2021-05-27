import React from "./mreact"
import ReactDom from "./mreact-dom"

function Comp(props) {
    return (
        <div> hi {props.name}</div>
    )
}

class Comp2 extends React.Component{
    render() {
        return <h2>hello {this.props.name}</h2>
    }
}

const jsx = (
    <div id="demo">
        <span>hi</span>
        <Comp name="function comp" >hahah</Comp>
        <Comp2 name="class comp" />
    </div>
)

ReactDom.render(jsx, document.getElementById('root'))