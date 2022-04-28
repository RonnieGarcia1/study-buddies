const db = require("../db/dbConfig.js");
const groups = require("../controllers/groupsController.js")

    const getAllGroups = async() => {
        try{
        const allgroups = await db.any("SELECT * FROM groups;")
            return allgroups;
        } catch(err){
            return err;
    }
}

    const getOneGroup = async(id) => {
        try{
            const oneGroup = await db.one("SELECT * FROM groups WHERE id=$1;", id);
            return oneGroup;
        } catch(err){
            return err;
    }
}
    
    const createGroup = async(Group) => {
        try{
            const newGroup = await db.one(
                "INSERT INTO groups (name, main_focus, date_formed, contact) VALUES($1, $2, $3, $4) RETURNING *",
                [group.name, group.main_focus, group.date_formed, group.contact]
            )
            return newGroup;
        } catch(err){
            return err
    }
}

    const deleteGroup = async(id) => {
        try{
            const deletedGroup = await db.one(
                "DELETE FROM groups WHERE ID = $1 RETURNING *;",
                id
            );
            return deletedGroup;
        } catch(err){
            return err;
    }
};

    const updateGroup = async(id, Group) => {
        try{
            const updatedGroup = await db.one(
                "UPDATE groups SET name=$1, main_focus=$2, date_formed=$3, contact=$4 WHERE id=$5 RETURNING *;",
                [group.name, group.main_focus, group.date_formed, group.contact, id]
            );
            return updatedGroup;
        } catch(err){
            return err;
        }
    }

    module.exports = {
        getAllGroups,
        getOneGroup,
        createGroup,
        deleteGroup,
        updateGroup
    };