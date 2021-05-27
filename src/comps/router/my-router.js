import { createBrowserHistory } from "history";
import React from "react"
import matchPath from "./compilePath"

//创建一个上下文保存history、location等
const RouterContext = React.createContext()

class BrowserRouter extends React.Component {
    constructor(props) {
        super(props)

        this.history = createBrowserHistory(this.props)

        this.state = {
            location: this.history.location
        }

        this.unlisten = this.history.listen(location => { 
            this.setState({ location }); 
        });
    }

    componentWillUnmount() {
        if(this.unlisten) this.unlisten()
    }

    render() {
        return (
            <RouterContext.Provider 
                children={this.props.children || null}
                value={{
                    history: this.history,
                    location: this.state.location
                }}
                ></RouterContext.Provider>
        )
    }
}

class Route extends React.Component {
    render() {
        return  <RouterContext.Consumer>
            {context => {
                const { location } = context
                const match = matchPath(location.pathname, this.props)
                const props = { ...context, match }

                let { children, component, render } = this.props

                if(children && typeof children == "function") {
                    children = children(props)
                }

                return (
                    <RouterContext.Provider value={props}>
                        { children  // children优先级最高，不论匹配与否存在就执行
                            ? children 
                            : match // 后面的component和render必须匹配
                                ? component  // 若匹配首先查找component
                                    ? React.createElement(component) // 若它存在渲染之
                                    : render // 若render选项存在
                                    ? render(props) // 按render渲染结果
                                    : null 
                                : null
                        }
                    </RouterContext.Provider>
                )
            }}
        </RouterContext.Consumer>
    }
}

class Redirect extends React.Component {
    render() {
        const { to, state } = this.props;

        return (
            <RouterContext.Consumer>
                {context => {
                    //context.location.state = state
                    console.log(context)
                    // context.history.push(to);
                }}
            </RouterContext.Consumer>
        )
    }
}

export {
    BrowserRouter, Route, Redirect
}