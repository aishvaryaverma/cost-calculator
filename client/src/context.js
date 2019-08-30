import React, { Component } from 'react';

export const Context = React.createContext();

const reducer = (state, action) => {
	const { type, payload } = action;
  	switch(type) {
    	case 'UPDATE_STATE':
			let stepData = state.stepSelected;
			if(stepData.length > 0) {
				stepData = stepData.filter(step => step.id !== payload.id)
				stepData = [...stepData, payload]
			}  else {
				stepData = [...state.stepSelected, payload]
			}
			localStorage.setItem('steps', JSON.stringify(stepData));
			return {
				...state,
				stepSelected: stepData
			}
		default:
			return state;
	}
};

export class Provider extends Component {
  	state = {
		stepSelected: [],
    	dispatch: action => this.setState(state => reducer(state, action))
	}

	componentDidMount() {
		if(localStorage.steps) {
			const prisistedSteps = JSON.parse(localStorage.getItem('steps'));
			this.setState({ stepSelected: prisistedSteps })
		}
	}
	
	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
  	}
}

export const Consumer = Context.Consumer