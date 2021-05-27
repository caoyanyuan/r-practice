import { CompileVDOM } from "./m-vdom"

function render(vnode, container) {
    CompileVDOM(vnode)
    //container.appendChild(CompileVDOM(vnode))
}

export default { render }