const { response } = require("express");

const knex = require("knex")(require("../knexfile"));

const getAllUsers = (req, res) => {
	knex("users as u")
		.select(
			"u.id",
			"u.first_name",
      "u.last_name",
			"u.email",
			"u.password",
			"u.phone"
		)
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send(`${err}`);
		});
};

const getTotalUsers = (req, res) => {
	knex("users as u")
		.max(
			"u.id"
		)
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send(`${err}`);
		});
};

const getSingleUser = (req, res) => {
  knex("users as u")
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

const createNewUser = (req, res) => {
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone
  ) {
    res.status(400).send("Please fill in all fields");
    return;
  }
    knex("users")
    .insert(req.body)
    .then((result) => {
        console.log(`User ${result} added succesfully`);
        return knex("users").where({ id: result[0] });
      })
    .then((newItem) => {
        res.status(201).json(newItem);
        return newItem;
      })
    .catch(() => {
      res.status(500);
    });
};

const login = (req, res) => {
  if (
    !req.body.email ||
    !req.body.password
  ) {
    res.status(400).send("Please fill in all fields");
    return;
  }
  knex("users as u")
    .where({ email: req.body.email})
    .then((item) => {
      if (item == null) {
        res.status(404).send(`User not found`);
      }
      else if (item[0].password !== req.body.password) {
        res.status(404).send(`User password does not match`);
      } 
      else {
        res.status(200).send(item[0]);
      }
    })
    .catch((err) => {
      res.status(500).send(`${err}`);
    });
};

module.exports = {
  getAllUsers,
  getTotalUsers,
  getSingleUser,
  createNewUser,
  login,
};
