const knex = require("knex")(require("../knexfile"));

const getSingleUser = (req, res) => {
	knex("commute_tracking as c")
	  .where({ user_id: req.params.id })
	  .then((item) => {
		if (item == null) {
		  res.status(404).send(`User id: ${req.params.id} not found`);
		} else {
		  res.status(200).send(item);
		}
	  })
	  .catch((err) => {
		res.status(500).send(`${err}`);
	  });
  };

  const getTotalScore = (req, res) => {
	knex("commute_tracking as c")
	  .sum("eco_score")
	  .where({ user_id: req.params.id })
	  .then((item) => {
		if (item == null) {
		  res.status(404).send(`User id: ${req.params.id} not found`);
		} else {
		  res.status(200).send(item);
		}
	  })
	  .catch((err) => {
		res.status(500).send(`${err}`);
	  });
  };

  const getTotalCarbon = (req, res) => {
	knex("commute_tracking as c")
	  .sum("co2_saved_kg")
	  .where({ user_id: req.params.id })
	  .then((item) => {
		if (item == null) {
		  res.status(404).send(`User id: ${req.params.id} not found`);
		} else {
		  res.status(200).send(item);
		}
	  })
	  .catch((err) => {
		res.status(500).send(`${err}`);
	  });
  };
  
  const createNewRecord = (req, res) => {
	if (
	  !req.body.start_location ||
	  !req.body.end_location ||
	  !req.body.distance
	) {
	  res.status(400).send("Please fill in all fields");
	  return;
	}
	  knex("commute_tracking")
	  .insert(req.body)
	  .then((result) => {
		  console.log(`New recorded added succesfully ${result}`);
		  return knex("users").where({ id: result[0]});
		})
	  .then((newItem) => {
		  res.status(201).json(newItem);
		  return newItem;
		})
	  .catch(() => {
		res.status(500);
	  });
  };

module.exports = {
	getSingleUser,
	createNewRecord,
	getTotalScore,
	getTotalCarbon
};
