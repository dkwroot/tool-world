import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Button } from "react-bootstrap";

function Cart() {
	const cartItems = useStoreState(state => state.cart.items);
	const removeItem = useStoreActions(action => action.cart.removeItem);

	const [subTotal, setSubTotal] = useState(0);

	const displayCart = () => {
		let result = [];

		let alternate = 0;
		for (let [key, value] of Object.entries(cartItems)) {
			// Generate Cart Display
			let myStyle = "white";
			if (alternate % 2 == 0) myStyle = "lightgray";
			result.push(
				<div
					key={`cartItem_${key}`}
					className="d-flex flex-row py-2"
					style={{ background: myStyle }}
				>
					<div className="flex-fill">{value.item.name}</div>
					<div className="mx-3">{value.item.price}</div>
					<div className="mx-3">{value.number}</div>
					<div className="mx-3">
						<button onClick={e => removeItem(key)}>x</button>
					</div>
				</div>
			);
			alternate = alternate + 1;
		}

		return result;
	};

	useEffect(() => {
		let tempSubTotal = 0;
		for (let [key, value] of Object.entries(cartItems)) {
			// Calculate and Add to Subtotal
			tempSubTotal += value.number * value.item.price;
		}
		setSubTotal(tempSubTotal);
	}, [cartItems]);

	return (
		<div className="d-flex justify-content-center flex-wrap">
			<div
				className="m-3 p-3"
				style={{ width: "50%", maxWidth: "600px", minWidth: "280px" }}
			>
				<h3 className="text-center">Items in Cart</h3>
				<hr style={{ height: "3px", width: "100%", background: "lightgray" }} />
				<div className="d-flex flex-row">
					<div className="flex-fill">Item</div>
					<div className="mx-3">Unit Price</div>
					<div className="mx-3">#</div>
					<div className="mx-4">X</div>
				</div>
				{displayCart()}
			</div>

			<div className="p-3 bg-light m-3">
				<h3>Order Summary</h3>
				<hr style={{ height: "3px", background: "lightgray" }} />
				<div style={{ display: "grid", gridTemplateColumns: "160px auto" }}>
					<p>Subtotal: </p> <p>${subTotal.toFixed(2)}</p>
					<p>Shipping: </p> <p>Free</p>
					<p>Tax: </p> <p>${(0.04 * subTotal).toFixed(2)}</p>
				</div>
				<hr style={{ height: "3px", background: "lightgray" }} />
				<h4>Total: ${(subTotal + 0.04 * subTotal).toFixed(2)} </h4>
				<Button variant="success">Buy Now</Button>
			</div>
		</div>
	);
}

export default Cart;
