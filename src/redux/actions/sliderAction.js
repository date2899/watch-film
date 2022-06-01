import actions from "./actions.type";

export const getSliderSuccess = (data) => {
	return {
		type: actions.GET_MOVIES_SUCCESS,
		payload: data,
	};
};
