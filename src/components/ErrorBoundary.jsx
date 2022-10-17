import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
    }

    componentDidCatch(error, info){
this.setState({
    hasError: true
})
    }
  render() {
    const { hasError } = this.state;
    if(hasError){
        return <h2>Something went wrong, reload page!</h2>
    }
    return this.props.children;
  }
}
