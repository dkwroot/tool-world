import React, { useState, useEffect } from "react";
import { Inventory as myInventory } from "../../constants/inventory";
import { Pagination, Card, Button, Modal, Image } from "react-bootstrap";
import { useStoreActions } from "easy-peasy";

import "./style.css";

const Inventory = () => {
	const addToCart = useStoreActions(actions => actions.cart.addItem);

	const [filters, setFilters] = useState({
		price: 2,
		brand: "Any",
		tool: "Any"
	});
	const [active, setActive] = useState(1); // Set Active Page
	const [toolList, setToolList] = useState([]);
	const [show, setShow] = useState(false);
	const [activeItem, setActiveItem] = useState({
		name: "",
		price: "",
		image: "",
		description: ""
	}); //Set Active Tool for Modal

	const handleClose = () => setShow(false);
	const handleShow = item => {
		setActiveItem(item);
		setShow(true);
	};

	const handleFilter = (e, type) => {
		setFilters({ ...filters, [type]: e.target.value });
		setActive(1);
	};

	const paginationBar = () => {
		let items = [];
		for (let number = 1; number <= Math.ceil(toolList.length / 6); number++) {
			items.push(
				<Pagination.Item
					key={`page_${number}`}
					active={number === active}
					onClick={() => setActive(number)}
				>
					{number}
				</Pagination.Item>
			);
		}
		return items;
	};

	const drawItems = () => {
		let items = [];
		let range = active * 6;
		if (toolList.length > 0) {
			for (let number = range - 6; number < range; number++) {
				if (number < toolList.length) {
					items.push(
						<Card key={`item_${number}`} className="inventory__item-card">
							<Card.Img variant="top" src={toolList[number].image} />
							<Card.Body>
								<Card.Title>{toolList[number].name}</Card.Title>
								<Card.Text>${toolList[number].price}</Card.Text>
								<Button
									variant="success"
									onClick={e => handleShow(toolList[number])}
								>
									Add to Cart
								</Button>
							</Card.Body>
						</Card>
					);
				}
			}
		}
		return items;
	};

	// Update Tool List on Filter Changes
	useEffect(() => {
		const filteredItems = () => {
			const items = myInventory.filter(x => {
				const brandChk = x.brand === filters.brand || filters.brand === "Any";
				const priceChk = x.price >= filters.price ** 3;
				const typeChk = x.type === filters.tool || filters.tool === "Any";
				return brandChk && priceChk && typeChk;
			});

			setToolList(items);
		};
		filteredItems();
	}, [filters]);

	return (
		<div>
			<div className="center-h bg-secondary text-light py-4">
				<div className="inventory__item-list">
					<div className="mx-3">
						<div>Brand:</div>
						<select onChange={e => handleFilter(e, "brand")} id="tool-brand">
							<option value="Any">Any</option>
							<option value="Dewalt">Dewalt</option>
							<option value="Bosch">Bosch</option>
							<option value="Kobalt">Kobalt</option>
							<option value="Craftsman">Craftsman</option>
							<option value="Hitachi">Hitachi</option>
							<option value="Generac">Generac</option>
							<option value="Skil">Skil</option>
							<option value="Black&Decker">Black&Decker</option>
							<option value="Cat">Cat</option>
							<option value="Werner">Werner</option>
						</select>
					</div>

					<div className="mx-3">
						<div>Tool:</div>
						<select onChange={e => handleFilter(e, "tool")}>
							<option value="Any">Any</option>
							<option value="Drill">Drill</option>
							<option value="MiterSaw">Miter Saw</option>
							<option value="CircularSaw">Circular Saw</option>
							<option value="TableSaw">Table Saw</option>
							<option value="DemoHammer">Jackhammer</option>
							<option value="Ladder">Ladder</option>
							<option value="Generators">Generator</option>
						</select>
					</div>

					<div className="mx-3">
						<div>Price: >${filters.price ** 3}</div>
						<input
							onChange={e => handleFilter(e, "price")}
							type="range"
							min="2"
							max="10"
							id="priceRange"
							value={filters.price}
						/>
					</div>
				</div>
			</div>

			<Pagination className="center-h mt-3">{paginationBar()}</Pagination>

			<div className="inventory__item-container">
				<div className="inventory__item-list">{drawItems()}</div>
			</div>

			<Pagination className="center-h mt-3">{paginationBar()}</Pagination>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{activeItem.name}</Modal.Title>
				</Modal.Header>
				<Image
					style={{ maxWidth: "280px", alignSelf: "center" }}
					src={activeItem.image}
				/>
				<Modal.Body>
					<div>
						<b>PRICE:</b> ${activeItem.price}
					</div>
					<div>
						<b>DETAILS:</b>
					</div>
					<div>{activeItem.description}</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={e => addToCart(activeItem)}>
						Add to Cart
					</Button>
				</Modal.Footer>
			</Modal>

			<button
				onClick={() => {
					let tval = "1";
					let test = {};
					test[tval] = "HI";
					console.log(test[1]);
				}}
			>
				CLICK ME
			</button>
		</div>
	);
};

export default Inventory;
