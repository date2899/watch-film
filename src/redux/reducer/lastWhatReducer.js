import actions from "../actions/actions.type";

const initialState = [];

export const lastWhatReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_LAST_WHAT:
			return [action.payload, ...state];
		default:
			return state;
	}
};
