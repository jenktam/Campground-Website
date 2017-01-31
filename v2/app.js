var express     = require("express"),
    app         = express(),
    bodyParser  = require('body-parser'),
    nodemon     = require('nodemon'),
    mongoose    = require('mongoose');

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// Compile schema into model
// "Campground" creates db collection pluralized(automatically updates collection to campgrounds)
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Big Sandy", 
//         image: "https://media-cdn.tripadvisor.com/media/photo-s/03/2d/69/41/several-of-the-ten-cabins.jpg",
//         description: "This is a huge campground. Big Sandy is great!"
//     }
//     , function(err, campground){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Newlly created campground: ");
//             console.log(campground);
//         }
//     });
    
// GET - / - home
app.get("/", function(req,res) {
    res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
    // GET all campgrounds from DB
    Campground.find({}, function(err,allCampgrounds){
        if(err){
            console.log(err);
        } else{
            res.render("index", {campgrounds:allCampgrounds});
        }
    });
});

// POST route to create new campgrounds
app.post("/campgrounds", function(req,res) {
    var name            = req.body.name,
        image           = req.body.image,
        desc            = req.body.description,
        newCampground   = {name: name, image: image, description: desc}
        ;
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err) {
            console.log(err);
        }
        else{
            // redirect back to campgrounds page.
        res.redirect("/campgrounds");
        }
    });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req,res) {
    res.render("new");
    
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req,res){
    // find campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else{
            // render show template with given ID
            res.render("show",{campground: foundCampground});
        }
    });
});

// GET -/campgrounds/:id/edit - edit

// PUT/PATCH -/campgrounds/:id - update

// DELETE -/campgrounds/:id - destroy

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp server has started!!");
});