const express=require('express')
const multer=require('multer');
const uploadFile = require('../service/storage.service');

const songModel=require('../models/songs.models')



const router=express.Router();




const upload=multer({storage:multer.memoryStorage()})
// title
// artist 
// audioFile
router.post("/songs",upload.single("audio"),async(req,res)=>{
  
    //  const{title,artist}=req.body;
    
console.log(req.body);
console.log(req.file);

const fileData= await uploadFile(req.file)

const song= await songModel.create({
    title:req.body.title,
    artist:req.body.artist,
    audio:fileData.url,
    mood:req.body.mood
})

     res.status(201).json({
        message:'song uploaded sucessfully',
        song:song
     })
})


router.get('/songs',async(req,res)=>{

       const {mood}=req.query


       const songs=await songModel.find({
          mood:mood
       })

       res.status(200).json({
        message:"Featched successfully",
        songs
       })
})





module.exports=router;