//import express object
const express = require("express");

//renaming router
const groups = express.Router();

//import queries
const { getAllGroups, getOneGroup, createGroup, deleteGroup, updateGroup}= require("../queries/groups");

//Get all groups
//end point
groups.get("/", async(req, res) => {
        const allGroups = await getAllGroups();
        if(allGroups[0]){
            res.status(200).json(allGroups);
        } else {
            res.status(500).json({ error: "server error" });
        }

});

//request handlers
//Get one Group
groups.get("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const group = await getOneGroup(id);
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

//Delete Group by id
groups.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedGroup = await deleteGroup(id);
        if(deletedGroup.id){
            res.status(200).json(deletedGroup)
        } else {
            res.status(404).json({error: "error"})
        }
    }catch(err){
        console.log(err)
    }
});

//Update Group by id
groups.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const updatedGroup = await updateGroup(id, body);
    if(updatedGroup.id){
        res.status(200).json(updatedGroup);
    } else {
        res.status(404).json({error: "error"});
    }
});

module.exports = groups;