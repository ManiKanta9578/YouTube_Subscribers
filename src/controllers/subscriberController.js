const mongoose = require("mongoose");

const subscriber = require("../models/subscribersModel")

//GET all subscribers
const getSubscribers = async (req,res) => {
    try{
        //GET all subscribers from the db
        const subscribers = await subscriber.find({}).sort({ createdAt : -1}).select("-__v");
        //returns status code 200 OK & get all subscribers
        res.status(200).json(subscribers);
    }catch(error){
        //if error, then shows error message and return status code 400
        res.status(400).json({error : error.message});
    }
};

//create a subscriber 
const createSubscribers = async (req,res) => {
    //add document to db
    const { name,subscribedChannel } = req.body;

    try{
        //create subscriber and added to db
        const subscribers = await subscriber.create({  name, subscribedChannel });

        res.status(200).json(subscribers);
    }catch(error){
        //if error, then shows error message and return status code 400
        res.status(400).json({ error: error.message });
    }
};

//DELETE a subscriber
const deleteSubscriber = async (req,res) => {
    try{
        //The req.params property is an object containing properties mapped to the named route “parameters”. 
        //For example, if you have the route /subscriber/:id, then the “id” property is available as req.params.id.
        const { id } = req.params;
        // to validate a string for correct MongoDB ID. 
        //if not valid returns the status code 404 & show error message
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error : "No such id found"})
        }

        const subscribers = await subscriber.findOneAndDelete({ _id : id});
        // checks for vaild id. If not valid id found returns status code 400 & error message
        if(!subscribers) {
            return res.status(400).json({error : "No such subscriber found"})
        }
        //if valid id found , return status code 200 with success message
        res.status(200).json({message : "Deleted successfully"})
    }catch(error){
        //if error found, returns error message & status code 400 
        res.status(400).json({ error : error.message });
    }
};

//GET a single subcriber
const getSubscriber = async (req,res) => {
    try{//The req.params property is an object containing properties mapped to the named route “parameters”. 
        //For example, if you have the route /subscriber/:id, then the “id” property is available as req.params.id.
        const { id } = req.params;

        // to validate a string for correct MongoDB ID. 
        //if not valid returns the status code 404 & show error message
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error : "No such scuscriber found with this id"})
        }

        const subscribers = await subscriber.findById(id).select("-__v");
        //if no such subscriber found,returns error with status 400
        if(!subscribers) {
            return res.status(400).json({error : "No such subscriber found"})
        }else{
            //if valid id found , return status code 200 with success message
            res.status(200).json(subscribers);
        }
    }catch(error) {
        //if error found, returns error message & status code 400
        return res.status(200).json({error : error.message});
    }
};

//GET a subscribers by names
const getSubscribersNames = async (req,res) => {
    try{
        //GET all subscribers only with name and subscribed channel
        const subscribers = await subscriber.find().select("-__v -_id -subscribedDate");
        //if successfully get all subscribers return a response with status 200 with list of subscribers 
        res.status(200).json(subscribers);
    }catch (error) {
        //if error found,returns error message & status code 400
        res.status(404).json({error:error.message});
    }
};

//UPDATE a subscriber

const updateSubscriber = async (req,res) => {
    try{
        //get id from params
        const { id } = req.params;
        // check for valid Id, if not valid returns status 404 with error message
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "No such scuscriber found with this id" });
        }
        // update subscriber for particular id
        const subscribers = await subscriber.findOneAndUpdate({ _id : id },{
            ...req.body,
        },{ new : true});
        // if no subscriber found with given Id , return error with status 400
        if(!subscribers) {
            return res.status(400).json({  error : "No such subscriber found" })
        }else{
            res.status(200).json(subscribers);
        }

    }catch (error) {
        // if error occurs, return status 400 with error message
        return res.status(400).json({  error : error.message });
    }
};

module.exports = {
    getSubscribers,
    getSubscriber,
    createSubscribers,
    getSubscribersNames,
    deleteSubscriber,
    updateSubscriber
}