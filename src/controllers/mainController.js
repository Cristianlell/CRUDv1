const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let discount = (n, d) => {
  let descuento = (n * d) / 100;
  descuento = descuento.toFixed(0);
  return n - descuento;
};

const controller = {
	index: (req, res) => {
		res.render('index',{
			products,
			toThousand,
			discount,
		})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
