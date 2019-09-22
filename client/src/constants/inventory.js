import HITACHI_DRILL from "../resources/drill_1.jpg";
import DEWALT_DRILL from "../resources/drill_2.jpg";
import BOSCH_DRILL from "../resources/drill_3.jpg";
import BLACKDECKER_DRILL from "../resources/drill_4.jpg";

import DEWALT_SAW from "../resources/saw_1.jpg";
import BOSCH_SAW from "../resources/saw_2.jpg";
import KOBALT_SAW from "../resources/saw_3.jpg";
import HITACHI_SAW from "../resources/saw_4.jpg";

import DEWALT_TABLESAW from "../resources/table_1.jpg";
import BOSCH_TABLESAW from "../resources/table_2.jpg";

import DEWALT_CIRCLESAW from "../resources/circle_1.jpg";
import SKIL_CIRCLESAW from "../resources/circle_2.jpg";

import KOBALT_AIR from "../resources/air_1.jpg";
import DEWALT_AIR from "../resources/air_2.jpg";
import CRAFTSMAN_AIR from "../resources/air_3.jpg";

import CAT_GENERATOR from "../resources/gen_1.jpg";
import CRAFTSMAN_GENERATOR from "../resources/gen_2.jpg";
import GENERAC_GENERATOR from "../resources/gen_3.jpg";

import DEWALT_HAMMER from "../resources/hammer_1.jpg";
import BOSCH_HAMMER from "../resources/hammer_2.jpg";

import LADDER from "../resources/ladder_1.jpg";

const Drills = [
	{
		id: 1001,
		name: "Hitachi 6.6-Amp 1/4-in Keyless Corded Drills",
		brand: "Hitachi",
		image: HITACHI_DRILL,
		price: 18.58,
		type: "Drill",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 1002,
		name: "DEWALT 7.8-Amp 1/2-in Keyless Corded Drill",
		brand: "Dewalt",
		image: DEWALT_DRILL,
		price: 25.67,
		type: "Drill",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 1003,
		name: "Bosch 6.3-Amp 3/8-in Keyless Corded Drill",
		brand: "Bosch",
		image: BOSCH_DRILL,
		price: 22.34,
		type: "Drill",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 1004,
		name: "BLACK+DECKER 5.2-Amp 3/8-in Keyless Corded Drill",
		brand: "Black&Decker",
		image: BLACKDECKER_DRILL,
		price: 24.21,
		type: "Drill",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	}
];

const MiterSaw = [
	{
		id: 2001,
		name: "DEWALT 12-in 15-Amp Dual Bevel Sliding Compound Miter Saw",
		brand: "Dewalt",
		image: DEWALT_SAW,
		price: 152.46,
		type: "MiterSaw",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 2002,
		name: "Bosch 12-in 15-Amp Dual Bevel Bevel Sliding Compound Miter Saw",
		brand: "Bosch",
		image: BOSCH_SAW,
		price: 161.48,
		type: "MiterSaw",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 2003,
		name: "Kobalt 10-in 15-Amp Dual Bevel Bevel Sliding Compound Miter Saw",
		brand: "Kobalt",
		image: KOBALT_SAW,
		price: 178.46,
		type: "MiterSaw",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 2004,
		name: "Hitachi 10-in 10-Amp Sliding Compound Miter Saw",
		brand: "Hitachi",
		image: HITACHI_SAW,
		price: 182.54,
		type: "MiterSaw",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	}
];

const TableSaw = [
	{
		id: 3001,
		name: "DEWALT 10-in Carbide-Tipped Blade 15-Amp Portable Table Saw",
		brand: "Dewalt",
		image: DEWALT_TABLESAW,
		price: 200.48,
		type: "TableSaw",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 3002,
		name: "Bosch 4100-10 10-in Carbide-Tipped Blade 15-Amp Table Saw",
		brand: "Bosch",
		image: BOSCH_TABLESAW,
		price: 248.75,
		type: "TableSaw",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	}
];

const CircularSaw = [
	{
		id: 4001,
		name: "DEWALT 20-Volt Max 6-1/2-in Cordless Circular Saw ",
		brand: "Dewalt",
		image: DEWALT_CIRCLESAW,
		price: 220.24,
		type: "CircularSaw",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 4002,
		name: "SKIL 7-1/4-in 15-Amp Corded Circular Saw",
		brand: "Skil",
		image: SKIL_CIRCLESAW,
		price: 232.45,
		type: "CircularSaw",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	}
];

const Ladder = [
	{
		id: 5001,
		name: "Werner D1200 Aluminum 24-ft Type 2",
		brand: "Werner",
		image: LADDER,
		price: 458.54,
		type: "Ladder",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 5002,
		name: "Werner D1300 Aluminum 28-ft Type 1",
		brand: "Werner",
		image: LADDER,
		price: 589.65,
		type: "Ladder",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 5003,
		name: "Werner D1500 Aluminum 32-ft Type 1A",
		brand: "Werner",
		image: LADDER,
		price: 758.54,
		type: "Ladder",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	}
];

const AirCompressor = [
	{
		id: 6001,
		name: "Kobalt 60-Gallon Electric Vertical Air Compressor",
		brand: "Kobalt",
		image: KOBALT_AIR,
		price: 254.58,
		type: "AirCompressor",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 6002,
		name: "DEWALT 15-Gallon Portable Electric Vertical Air Compressor",
		brand: "Dewalt",
		image: DEWALT_AIR,
		price: 120.54,
		type: "AirCompressor",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 6003,
		name: "CRAFTSMAN 6-Gallon Portable Electric Pancake Air Compressor",
		brand: "Craftsman",
		image: CRAFTSMAN_AIR,
		price: 64.24,
		type: "AirCompressor",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	}
];

const DemoHammer = [
	{
		id: 7001,
		name: "DEWALT 120-Volt Corded Demolition Hammer",
		brand: "Dewalt",
		image: DEWALT_HAMMER,
		price: 515.45,
		type: "DemoHammer",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 7002,
		name: "Bosch 120-Volt Corded Demolition Hammer",
		brand: "Bosch",
		image: BOSCH_HAMMER,
		price: 478.54,
		type: "DemoHammer",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	}
];

const Generators = [
	{
		id: 8001,
		name: "Cat RP5500 CARB Compliant 6875-Watt Gasoline Portable",
		brand: "Cat",
		image: CAT_GENERATOR,
		price: 805.99,
		type: "Generators",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 8001,
		name: "CRAFTSMAN 5000-Running-Watt Gasoline Portable Generator",
		brand: "Craftsman",
		image: CRAFTSMAN_GENERATOR,
		price: 783.99,
		type: "Generators",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	},
	{
		id: 8001,
		name: "Generac GP 17500-Running-Watt Gasoline Portable Generator",
		brand: "Generac",
		image: GENERAC_GENERATOR,
		price: 754.84,
		type: "Generators",
		description:
			"Donec massa velit, volutpat et urna sed, varius congue leo. Cras laoreet molestie consequat. Quisque massa neque, ullamcorper nec consectetur a, tristique in arcu. Morbi dignissim metus sit amet"
	}
];

export const Inventory = [
	...Drills,
	...MiterSaw,
	...CircularSaw,
	...TableSaw,
	...Ladder,
	...AirCompressor,
	...DemoHammer,
	...Generators
];
