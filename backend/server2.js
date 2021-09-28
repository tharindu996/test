const express = require("express")
const fileUpload = require("express-fileupload")
const cors = require("cors")
const morgan = require("morgan")
const Todo = require("./models/Book");
const app = express()
const mongoose = require("mongoose");

const PORT = 4011;

mongoose.connect("mongodb+srv://book:book123@book.qggwf.mongodb.net/books?retryWrites=true&w=majority", 
{ useNewUrlParser: true ,useUnifiedTopology: true}).then((result)=>
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  }));

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

app.use(fileUpload({
  createParentPath: true
}))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))


app.get("/", (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
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
      const {picture} = req.files


      picture.mv("./uploads/" + picture.name)

      res.send({
        status: true,
        message: "File is uploaded"
      })
    }
  } catch (e) {
    res.status(500).send(e)
  }
})

const port = 4011

app.listen(port, () => console.log(`Server is running on port ${port}`))