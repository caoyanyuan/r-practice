import React from 'react'
import { bindActionCreators } from "./m-redux"
import PropTypes from "prop-types"

export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => WrapComponent => {
    return class ConnectCompnent extends React.Component {
        static contextTypes = { 
            store: PropTypes.object 
        }
        constructor(props, context) {
            super(props, context)

            this.state = {
                props: {}
            }
        }
        componentDidMount() {
            const { store } = this.context

            if(store) {
                store.subscribe(() => this.update())
                this.update()
            }
        }
        update() {
            const { store } = this.context 
            const stateProps = mapStateToProps(store.getState()) 
            const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch) 

            this.setState({
				props: {
                    ...this.state.props,
					...stateProps,
					...dispatchProps
				}
			})
        }
        render() {
            return <WrapComponent  {...this.state.props}></WrapComponent>
        }
    }
}

export class Providers extends React.Component {
    
    static childContextTypes = {
        store: PropTypes.object
    }
    constructor(props) {
        super(props) 
       
        this.store = props.store
    }
    getChildContext() {
        return {
            store: this.store
        }
    }
    render() {
        return this.props.children
    }
}