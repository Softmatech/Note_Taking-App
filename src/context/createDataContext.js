import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
	const Context = React.createContext();

	const Provider = ({ children }) => {
		const [ state, dispatch ] = useReducer(reducer, defaultValue);
		const boundsActions = {};

		for (let key in actions) {
			boundsActions[key] = actions[key](dispatch);
		}

		return <Context.Provider value={{ state, ...boundsActions }}>{children}</Context.Provider>;
	};
	return { Context, Provider };
};
