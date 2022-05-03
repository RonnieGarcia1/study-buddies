//import express object
const express = require("express");
//Rename router
const groups = express.Router();
//Import queries
const { getAllGroups,
        getOneGroup,
        createGroup,
        getEventsByGroupId,
        updateGroup
}= require("../queries/groups");

//End points
//request handlers

//Get all groups
groups.get("/", async(req, res) => {
        const allGroups = await getAllGroups();
        if(allGroups[0]){
            res.status(200).json(allGroups);
        } else {
            res.status(500).json({ error: "server error" });
        }

});

//Get one Group
groups.get("/:gid", async (req, res) => {
    const { gid } = req.params;
    try{
        const group = await getOneGroup(gid);
        if(group.id){
            res.status(200).json(group)
        } else {
            res.status(404).json({error: "server error"})
        }
    }catch(err){
        console.log(err)
    }
});

//Create New Group
groups.post("/", async (req, res) => {
    const { body } = req;
    try {
        const createdGroup = await createGroup(body)
        if(createdGroup.id){
            res.status(200).json(createdGroup)
        } else {
            res.status(422).json({error: "error"})
        }
    }catch(err){
        console.log(err)
    }
});

//Update Group by id
groups.put("/:gid", async (req, res) => {
    const { gid } = req.params;
    const { body } = req;
    const updatedGroup = await updateGroup(gid, body);
    if(updatedGroup.id){
        res.status(200).json(updatedGroup);
    } else {
        res.status(404).json({error: "error"});
    }
});

//Get events by Group
groups.get("/:gid/events", async (request, response) => {
    const { gid } = request.params;
    try {
      const group = await getEventsByGroupId(gid);
      console.log(group);
      response.status(200).send(group);
    } catch (error) {
      response.status(404).send({ error: "Error" });
    }
  });
  

//Create new event 
  groups.post("/:gid/events", async (request, response) => {
    let event = request.body;
    try {
      const newEvent = await createEvent(event);
      response.status(200).send(newEvent);
    } catch (error) {
      response.status(404).send({ error: "Error" });
    }
  });

module.exports = groups;