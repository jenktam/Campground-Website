#Add Mongoose
* Install and configure mongoose
    * 
     
* Setup campground model
    * 

* Use campground model inside of our routes!
    * 
    

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
    * used to delete everything in db
    * will do occasionally. ex: if existing collection data doesn't have all description fields want in the schema. can just delete this data and then update. easier
* Add a show route/template


RESTFUL ROUTES(7)

name          url           HTTP Verb   desc.
==============================================================
INDEX       /dogs           GET         Display a list of all dogs
NEW         /dogs/new       GET         Displays form to make a new dog
CREATE      /dogs           POST        Add new dog to DB, then redirect somewhere
SHOW        /dogs/:id       GET         Shows info about one dog. use findbyID
EDIT        /dogs/:id/edit  GET         Show edit form for one specific dog
UPDATE      /dogs/:id       PUT         Update a particular dog, then redirect somewhere 
DESTROY     /dogs/:id       DELETE      Delete a particular dog, then redirect somewhere


- INDEX and SHOW are both read routes in CRUD. Just uses GET verb to get dogs.
- used with express.js