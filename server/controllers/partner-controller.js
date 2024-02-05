const { response } = require("express");

const knex = require("knex")(require("../knexfile"));

const getAllPartners = (req, res) => {
	knex("partners as p")
		.select(
			"p.id",
			"p.name",
      "p.image_url",
			"p.store_website",
		)
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send(`${err}`);
		});
};

const getSinglePartner = (req, res) => {
  knex("partners as p")
    .where({ id: req.params.id })
    .then((item) => {
      if (item == null) {
        res.status(404).send(`Item id: ${req.params.id} not found`);
      } else {
        res.status(200).send(item);
      }
    })
    .catch((err) => {
      res.status(500).send(`${err}`);
    });
};

module.exports = {
  getAllPartners,
  getSinglePartner,
};
