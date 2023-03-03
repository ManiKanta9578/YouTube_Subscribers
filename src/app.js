const express = require('express')
const app = express();

const subscriberRoute = require("./routes/subscriberRoutes")

//middleware
app.use(express.json())

app.use((  req,res,next ) => {
    console.log(req.path, req.method);
    next();
});

app.get('/', (req,res) => {
    res.status(200).json({
        Capstone_Project : "GET Youtube Subscriber",
        routes : [
            {
                route: "/subscribers",
                response: "Response with an array all subscribers",
            },
            {
                route : "/subscribers/names",
                response : "Response with an array all subscribers(with only two fields name and subscribed channel)"
            },
            {
                route : "/subscriber/:id",
                response : "Response with a subscriber with given id response with status code 400 and error message, if id does not match",
            }
        ]
    });
});

//routes
app.use("/", subscriberRoute);

module.exports = app;

