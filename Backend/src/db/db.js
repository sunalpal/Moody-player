const mongoose=require('mongoose');


function connectToDb(){
    mongoose.connect(process.env.DB_CONNECTION)
    .then(()=>{
        console.log('DB connected successfully');
        
    })
    .catch((err)=>console.log(err+"occured")
    )
}



module.exports=connectToDb;