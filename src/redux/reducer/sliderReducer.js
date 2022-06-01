import actions from "../actions/actions.type";

export const sliderReducer = (state = [], action) => {
	switch (action.type) {
		case actions.GET_MOVIES_SUCCESS:
			return (state = action.payload);
		default:
			return state;
	}
};
