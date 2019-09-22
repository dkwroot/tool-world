import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inventory } from "../../constants/inventory";
import Customers from "../../constants/customers";
import LOCATION from "../../resources/location.png";

const Home = () => {
	const randomTools = () => {
		let displayItems = [];
		while (displayItems.length < 3) {
			const item = Math.floor(Math.random() * Inventory.length);
			if (displayItems.every(x => item !== x)) {
				displayItems.push(item);
			}
		}

		return displayItems.map((x, id) => {
			return (
				<div className="home-inventory__card m-4" key={`item_${id}`}>
					<img
						className="home-inventory__card-image"
						src={Inventory[x].image}
						alt="tool"
					/>
					<h6 className="home-inventory__card-title text-center">
						{Inventory[x].name}
					</h6>
					<div>{Inventory[x].description}</div>
					<div className="home-inventory__tool-price">
						${Inventory[x].price}.00
					</div>
				</div>
			);
		});
	};

	const customerReview = () => {
		let random = Math.floor(Math.random() * 4);
		let review = [random, (random + 1) % 4];

		return review.map((x, id) => {
			return (
				<div
					className="col-md m-2 p-2 border border-secondary row"
					key={`review_${id}`}
				>
					<div className="col-sm-auto">
						<img src={Customers[x].picture} alt="customer" />
					</div>

					<div className="col-sm">
						<h3 className="my-2">{Customers[x].title}</h3>
						<div className="line-5 my-2" style={{ background: "black" }} />
						<p>{Customers[x].comment}</p>
					</div>
				</div>
			);
		});
	};

	return (
		<div className="home__container">
			<div className="home-landing center-v">
				<div className="home-landing__card center-v">
					<h2 className="text-center">TOOL WORLD</h2>
					<div className="line-5" />
					<div className="mt-3">
						<a className="btn btn-warning mr-2" href="/store">
							Our Tools
						</a>
						<a className="btn btn-warning" href="#About">
							About Us
						</a>
					</div>
				</div>
				<div className="home-landing__social center-h mt-5">
					<a href="http://facebook.com">
						<FontAwesomeIcon
							className="white font-2 mr-4"
							icon={["fab", "facebook"]}
						/>
					</a>
					<a href="http://twitter.com">
						<FontAwesomeIcon
							className="white font-2 mr-4"
							icon={["fab", "twitter"]}
						/>
					</a>
					<a href="http://google.com">
						<FontAwesomeIcon
							className="white font-2"
							icon={["fab", "google"]}
						/>
					</a>
				</div>
			</div>

			<div id="About" className="home-services center-v">
				<h2 className="mt-4 mb-4">SERVICES</h2>
				<div className="line-5" style={{ background: "black" }} />
				<div className="center-h wrap">
					<div className="home-services__item center-v m-3">
						<FontAwesomeIcon className="display-3" icon="toolbox" />
						<h3 className="text-center">Reason</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
							hendrerit diam et egestas facilisis. Aenean fermentum lorem a diam
						</div>
					</div>

					<div className="home-services__item center-v m-3">
						<FontAwesomeIcon className="display-3" icon="cog" />
						<h3 className="text-center">Reason</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
							hendrerit diam et egestas facilisis. Aenean fermentum lorem a diam
						</div>
					</div>

					<div className="home-services__item center-v m-3">
						<FontAwesomeIcon className="display-3" icon="hard-hat" />
						<h3 className="text-center">Reason</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
							hendrerit diam et egestas facilisis. Aenean fermentum lorem a diam
						</div>
					</div>
				</div>
			</div>

			<div className="home-inventory center-v">
				<h2 className="mt-5 text-center">LATEST DEALS</h2>
				<div className="line-5 mt-4 mb-4" style={{ background: "black" }} />
				<div className="center-h wrap">{randomTools()}</div>
			</div>

			<div className="home-reviews center-v mt-5">
				<div className="mt-5 mb-4">
					<FontAwesomeIcon className="display-4" icon="star" />
					<FontAwesomeIcon className="display-4" icon="star" />
					<FontAwesomeIcon className="display-4" icon="star" />
					<FontAwesomeIcon className="display-4" icon="star" />
				</div>
				<h3 className="text-center">Hightly rated in customer satisfaction</h3>
				<div className="line-5 mt-4 mb-4" style={{ background: "black" }} />
				<div className="row mb-4">{customerReview()}</div>
			</div>

			<div className="home-footer p-4">
				<div className="row">
					<div className="col-md mr-3 row">
						<div className="col">
							<div>Category</div>
							<div className="line-5"></div>
							<div>LINK A</div>
							<div>LINK B</div>
							<div>LINK C</div>
							<div>LINK D</div>
						</div>
						<div className="col">
							<div>Category</div>
							<div className="line-5"></div>
							<div>LINK E</div>
							<div>LINK F</div>
							<div>LINK G</div>
							<div>LINK H</div>
						</div>
						<div className="col">
							<div>Category</div>
							<div className="line-5"></div>
							<div>LINK I</div>
							<div>LINK J</div>
							<div>LINK K</div>
							<div>LINK L</div>
						</div>
					</div>
					<div className="col-auto">
						<img width="200px" src={LOCATION} alt="map" />
					</div>
				</div>

				<div className="mt-5 center-h">TOOL WORLD, INC.</div>
				<div className="center-h">Created by: Derek Root</div>
			</div>
		</div>
	);
};

export default Home;
