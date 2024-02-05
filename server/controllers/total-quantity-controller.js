const knex = require("knex")(require("../knexfile"));

const getTotalQuantity = (req, res) => {
	knex("total_quantity as q")
		.select(
			"q.id",
			"q.total_co2_saved_kg",
		)
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send(`${err}`);
		});
};


const update = (req, res) => {

	if (!req.body.total_co2_saved_kg) {
		return res
			.status(400)
			.send("Please provide Quantity");
	}
	knex("total_quantity")
		.where({ id: 1 })
		.update(req.body)
		.then(() => {
			return knex("total_quantity").where({
				id: 1,
			});
		})
		.then((updatedQuantity) => {
			res.json(updatedQuantity[0]);
		})
		.catch(() => {
			res
				.status(500)
				.json({ message: `Unable to update quantity`});
		});
};

module.exports = {
	getTotalQuantity,
	update,
};
