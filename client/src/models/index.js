import { action } from "easy-peasy";

const cartModel = {
	items: {},
	itemsNum: 0,
	addItem: action((state, payload) => {
		if (state.items[payload.item.id] === undefined) {
			state.items[payload.item.id] = payload;
			state.itemsNum = state.itemsNum + payload.number;
		} else {
			state.items[payload.item.id].number =
				state.items[payload.item.id].number + payload.number;
			state.itemsNum = state.itemsNum + payload.number;
		}
	}),
	removeItem: action((state, itemID) => {
		state.itemsNum = state.itemsNum - state.items[itemID].number;
		delete state.items[itemID];
	})
};

const userModel = {
	username: "user",
	setUserName: action((state, payload) => {
		state.username = payload;
	})
};

const storeModel = {
	cart: cartModel,
	user: userModel
};

export default storeModel;
