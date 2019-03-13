import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import Component1 from "./component/Component1";
import Component2 from "./component/Component2";
import Component3 from "./component/Component3";
import {goToNextPage, goToPrevPage} from "./action/action";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p>Current Index: {this.props.currentIndex}</p>
                <p>Direction: {this.props.direction}</p>
                <ReactCSSTransitionGroup
                    transitionName={this.props.direction === 'next' ? 'left' : 'right'}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    transitionAppear={true}
                    transitionAppearTimeout={1000}>

                    {this.props.currentIndex === 0 && <Component1/>}
                    {this.props.currentIndex === 1 && <Component2/>}
                    {this.props.currentIndex === 2 && <Component3/>}
                </ReactCSSTransitionGroup>

                <div className="buttons">
                    <button onClick={this.props.goToPrevPage} disabled={this.props.currentIndex <= 0}>Prev</button>
                    <button onClick={this.props.goToNextPage} disabled={this.props.currentIndex >= 2}>Next</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {currentIndex: state.currentIndex, direction: state.direction};
}

function mapDispatchToProps(dispatch) {
    return {
        goToNextPage: () => dispatch(goToNextPage()),
        goToPrevPage: () => dispatch(goToPrevPage())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
