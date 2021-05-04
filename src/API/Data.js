export const restaurants = [
	{
		id: 1,
		popular: true,
		logo: "/img/bk.svg",
		name: "Burger King",
		distance: 2.2,
		product: [
			{
				id: 1,
				partnerid: 1,
				name: "HP Thin",
				price: 25000,
				logo:
					"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
			},
			{
				id: 2,
				partnerid: 1,
				name: "Aourus ROG",
				price: 25000,
				logo:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXouY4ZZXvwEAM7ojzbl3Be1Hzvw5JDAuwYg&usqp=CAU",
			},
			{
				id: 3,
				partnerid: 1,
				name: "Msi",
				price: 25000,
				logo:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaa6-CSoL1C8nHlKyozAZowyT8A7NINkXS8g&usqp=CAU",
			},
		],
	},
	{
		id: 2,
		popular: true,
		logo: "/img/sb.svg",
		name: "Starbucks",
		distance: 2.2,
	},
	{
		id: 3,
		popular: true,
		logo: "/img/kfc.svg",
		name: "KFC",
		distance: 2.2,
	},
	{
		id: 4,
		popular: true,
		logo: "/img/jco.svg",
		name: "Jco",
		distance: 2.2,
	},
	{
		id: 5,
		popular: false,
		logo: "/img/bensu.png",
		name: "Geprek Bensu",
		distance: 0.2,
	},
	{
		id: 6,
		popular: false,
		logo: "/img/nasgor.png",
		name: "Nasi Goreng Mas Rony",
		distance: 0.6,
	},
	{
		id: 7,
		popular: false,
		logo: "/img/pecel.png",
		name: "Pecel Ayam Prambanan",
		distance: 0.6,
	},
	{
		id: 8,
		popular: false,
		logo: "/img/kopi.png",
		name: "Kopi Kenangan",
		distance: 1.6,
	},
];

export const products = [
	{
		id: 1,
		partnerid: 1,
		name: "HP Thin",
		price: 25000,
		logo:
			"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
	},
	{
		id: 2,
		partnerid: 1,
		name: "Aourus ROG",
		price: 25000,
		logo:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXouY4ZZXvwEAM7ojzbl3Be1Hzvw5JDAuwYg&usqp=CAU",
	},
	{
		id: 3,
		partnerid: 1,
		name: "Msi",
		price: 25000,
		logo:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaa6-CSoL1C8nHlKyozAZowyT8A7NINkXS8g&usqp=CAU",
	},
	{
		id: 4,
		partnerid: 1,
		name: "ROG Keren Lainnya Tapi gak Terkenal",
		price: 25000,
		logo:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPCBTJcYfmHa6pz80BKuy6Jpc2ZUvAn7ocQ&usqp=CAU",
	},
	{
		id: 5,
		partnerid: 1,
		name: "Laptop Abu-abu",
		price: 25000,
		logo:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3gj43UTAnXLbncc5L9udkDBvDH_RKwSEOA&usqp=CAU",
	},
	{
		id: 6,
		partnerid: 1,
		name: "Laptop Pelangi",
		price: 25000,
		logo:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9sknrkZKnFZfjFMWTZE1cGPIMU7tJklhWA&usqp=CAU",
	},
];

export const users = [
	{
		id: 1,
		email: "user@gmail.com",
		name: "Aris User",
		password: "qwerty1234",
		type: 1,
		phone: "0987654421",
		img:
			"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
	},
	{
		id: 1,
		email: "partner@gmail.com",
		name: "Aris Partner",
		password: "qwerty1234",
		phone: "0827654421",
		type: 2,
		img:
			"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
	},
];

export const transaction = [
	{
		id: 1,
		partnerid: 1,
		userid: 1,
		location: "alamat",
		order: 1,
		approve: 1,
		date: "Selasa, 16 Maret 2021",
	},
	{
		id: 2,
		partnerid: 1,
		userid: 1,
		location: "alamat",
		order: 1,
		approve: 1,
		date: "minggu, 14 Maret 2021",
	},
	{
		id: 3,
		partnerid: 1,
		userid: 1,
		location: "alamat",
		order: 1,
		approve: 1,
		date: "minggu, 14 Maret 2021",
	},
];

export const order = [
	{
		id: 1,
		tranid: 1,
		productid: 1,
		qty: 3,
		price: 24000,
	},
	{
		id: 2,
		tranid: 1,
		productid: 1,
		qty: 3,
		price: 24000,
	},
	{
		id: 4,
		tranid1: 1,
		productid: 1,
		qty: 3,
		price: 24000,
	},
	{
		id: 5,
		tranid: 2,
		productid: 1,
		qty: 3,
		price: 24000,
	},
];
