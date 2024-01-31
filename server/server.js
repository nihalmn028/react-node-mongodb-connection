const express = require('express');
const mongoose = require('mongoose');
const schema=require('./model/dbSchema')
const cors=require('cors');
const app = express();
mongoose.connect('mongodb://localhost:27017/namedata',{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(()=>{
  console.log("db connected")
})
const ip={ 
  origin: 'http://localhost:3000',
  methods: 'GET,PUT,POST,DELETE',
  credentials: true, 
}
app.use(cors(ip)); 
app.use(express.json())

app.post('/',async (req, res) => { 
  const {name} = req.body
 await schema.create({name})
    res.status(200).json({Message:'success'});
  } 
);
 
app.get('/', async (req, res) => {

 
    const data= await schema.find()
    res.status(200).json(data)
  } 
  
);
app.listen(3001,() => {
  console.log(`Server is running `);
});
