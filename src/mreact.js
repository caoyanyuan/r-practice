function createElement(type, props, ...children) {
    props.children = children

    let vtype
    if(typeof type === 'function') {
        if(type.isReactComponent) {
            vtype = 2
        }else{
            vtype = 3
        }
    }else if(typeof type === 'string'){
        vtype = 1
    }

    return {vtype, type, props}

}
class Component {
    static isReactComponent = true

    constructor(props) {
        this.props = props
        this.stat = {}
    }
    setState() {

    }
}

export default { createElement, Component }

