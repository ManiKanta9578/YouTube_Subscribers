const mongoose = require("mongoose");

const subscriberModel = require("./models/subscribersModel");

const data = require("./data");

//connect to database
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true,  });

const db = mongoose.connection;

db.on("error", (err) => console.log(err));

db.once("open", () => console.log("Database create successfully"));

const refreshAll = async () => {
    await subscriberModel.deleteMany({});
    //console.log(connection)
    await subscriberModel.insertMany(data);
    await mongoose.disconnect();
};

refreshAll();