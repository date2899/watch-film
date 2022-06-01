import actions from "./actions.type";

export const getLastWhat = (data) => {
	return {
		type: actions.GET_LAST_WHAT,
		payload: data,
	};
};
