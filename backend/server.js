const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Book");
const multer = require("multer")
const fileUpload = require("express-fileupload")
const path = require("path")
const bodyParser = require('body-parser')

const PORT = 4011;
const app = express();
mongoose.connect("mongodb+srv://book:tharindu123@book.qggwf.mongodb.net/books?retryWrites=true&w=majority", 
{ useNewUrlParser: true ,useUnifiedTopology: true}).then((result)=>
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  }));
mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});




app.use(cors());
app.use(express.json());






app.get("/", (req, res) => {
 
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

//storage for images
const storage  = multer.diskStorage({
  destination:(req,file, callback)=>{
    callback(null,"../public/uploads")
  },
  //adding the extentions
  filename:(req,file, callback)=>{
    callback(null,file.originalname)
  }
})

//upload params for multer
const upload = multer({storage: storage });

var cpUpload = upload.fields([{ name: 'pic', maxCount: 1 }, { name: 'image', maxCount: 8 }])


app.post("/create",cpUpload,(req, res) => {  
  console.log(req.files); 
  console.log(req.body); 
  const todo = new Todo({
    title:req.body.title,
    price:req.body.price,
    body:req.body.body,
    author:req.body.author,  
    pic:req.body.fname,
    image:req.body.fname2
  });
  todo.save()
  .then(() =>res.json("Book created"))
  .catch((err)=>res.status(400).json('err : ${err}'));    
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});
app.get("/book/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

app.delete("/admin/:id", async(req, res) => {
  const {id} = req.params.id;
  console.log(id);
  try {
   
    const task = await Todo.findByIdAndRemove(req.params.id);
    res.send(task);

    console.log(task);

   } catch (error) {
     console.log(error.message);
     res.send(error.message);
   }
});



// app.delete("/admin/:id",(req,res)=>{
//   console.log(req.params.id);
//  try {   
//   const task = Todo.findByIdAndDelete({'_id':req.params.id});
//   res.json(task);
//  } catch (error) {
//    //console.log(error.message);
//    res.json(error.message);
//  }
// });





app.post("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send("Todo not found");
    } else {
      todo.text = req.body.text;

      todo
        .save()
        .then((todo) => {
          res.json(todo);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});



app.get('/download/:id', async (req, res) => {
  try {
    const file = await Todo.findById(req.params.id);
    console.log(file.pic);
    res.set({
      'Content-Type': 'pdf'
    });
    res.sendFile(path.join(__dirname, '../public/uploads/', file.pic));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});





