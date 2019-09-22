import { action } from "easy-peasy";

const cartModel = {
	items: {},
	itemsNum: 0,
	addItem: action((state, payload) => {
		if (state.items[payload.id] === undefined) {
			state.items[payload.id] = { number: 1, item: payload };
			state.itemsNum = state.itemsNum + 1;
		} else {
			state.items[payload.id].number = state.items[payload.id].number + 1;
			state.itemsNum = state.itemsNum + 1;
		}
	}),
	removeItem: action((state, itemID) => {
		state.itemsNum = state.itemsNum - state.items[itemID].number;
		delete state.items[itemID];
	})
};

const storeModel = {
	cart: cartModel
};

export default storeModel;
