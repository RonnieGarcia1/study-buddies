const db = require("../db/dbConfig.js");

const getAllEvents = async(study_group_id) => {
  try {
    const allEvents = await db.any(
      "SELECT * FROM events WHERE study_group_id=$1",
      study_group_id
    );
      return allEvents;
    } catch (err) {
      return err;
  };
};

module.exports = {
  getAllEvents
};