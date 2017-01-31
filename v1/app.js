var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var nodemon = require('nodemon');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Rock Creek", image: "http://www.itoda.com/photos/albums/lake-sabrina,little-lakes-valley%26tj-barrett-lakes/2-107.jpg"},
    {name: "Big Sandy", image: "https://media-cdn.tripadvisor.com/media/photo-s/03/2d/69/41/several-of-the-ten-cabins.jpg"},
    {name: "Lake Mary", image: "https://www.recreation.gov/webphotos/NRSO/pid72775/1/540x360.jpg"},
    {name: "Silver Lake", image: "https://www.recreation.gov/webphotos/NRSO/pid75194/1/540x360.jpg"},
    {name: "Convict Lake", image: "https://www.recreation.gov/webphotos/NRSO/pid75172/2/540x360.jpg"},
    {name: "Lake George", image: "http://www.californiasbestcamping.com/photos10/lake_george_camp.jpg"},
     {name: "Rock Creek", image: "http://www.itoda.com/photos/albums/lake-sabrina,little-lakes-valley%26tj-barrett-lakes/2-107.jpg"},
    {name: "Big Sandy", image: "https://media-cdn.tripadvisor.com/media/photo-s/03/2d/69/41/several-of-the-ten-cabins.jpg"},
    {name: "Lake Mary", image: "https://www.recreation.gov/webphotos/NRSO/pid72775/1/540x360.jpg"},
    {name: "Silver Lake", image: "https://www.recreation.gov/webphotos/NRSO/pid75194/1/540x360.jpg"},
    {name: "Convict Lake", image: "https://www.recreation.gov/webphotos/NRSO/pid75172/2/540x360.jpg"},
    {name: "Lake George", image: "http://www.californiasbestcamping.com/photos10/lake_george_camp.jpg"}
];
    
// GET - / - home
app.get("/", function(req,res) {
    res.render("landing");
});

// GET - /campgrounds - index
// Campgrounds will be an array with objects inside of name and image
app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

// POST -> /campgrounds - create
// POST route to create new campgrounds
app.post("/campgrounds", function(req,res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page. defaults to GET request for /campgrounds
    res.redirect("/campgrounds");
});

// GET - /campgrounds/new - new
app.get("/campgrounds/new", function(req,res) {
    res.render("new")
    
});

// GET -/campgrounds/:id - show

// GET -/campgrounds/:id/edit - edit

// PUT/PATCH -/campgrounds/:id - update

// DELETE -/campgrounds/:id - destroy

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp server has started!!");
});