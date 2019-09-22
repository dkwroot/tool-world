import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

function Cart() {
	const cartItems = useStoreState(state => state.cart.items);
	const removeItem = useStoreActions(action => action.cart.removeItem);

	const displayCart = () => {
		let result = [];
		for (let [key, value] of Object.entries(cartItems)) {
			result.push(
				<div key={`cartItem_${key}`} className="row">
					<div className="col">{value.item.name}</div>
					<div className="col">{value.number}</div>
					<div className="col">
						<button onClick={e => removeItem(key)}>x</button>
					</div>
				</div>
			);
		}
		return result;
	};

	return <div>Items in cart {displayCart()}</div>;
}

export default Cart;
