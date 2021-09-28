const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Book");
const multer = require("multer")
const fileUpload = require("express-fileupload")

const PORT = 4011;

mongoose.connect("mongodb+srv://book:book123@book.qggwf.mongodb.net/books?retryWrites=true&w=majority", 
{ useNewUrlParser: true ,useUnifiedTopology: true}).then((result)=>
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  }));

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});



const app = express();
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


app.post("/create",upload.single('pic'),(req, res) => {
  console.log(req.body); 
  const todo = new Todo({
    title:req.body.title,
    price:req.body.price,
    body:req.body.body,
    author:req.body.author,  
    pic:req.file.originalname
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


app.post("/pdf", async (req, res) => {
  try {
    if(!req.files){
      res.send({
        status: false,
        message: "No files"
      })
    } else {
      const {pic} = req.files


      pic.mv("./uploads/" + pic.name)

      res.send({
        status: true,
        message: "File is uploaded"
      })
    }
  } catch (e) {
    res.status(500).send(e)
  }
})






