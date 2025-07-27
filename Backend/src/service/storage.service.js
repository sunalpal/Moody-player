var mongoose=require('mongoose')
var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLICKEY,
    privateKey : process.env.IMAGEKIT_PRIVATEKEY,
    urlEndpoint : process.env.
    IMAGEKIT_URLENDPOINT
});


function uploadFile(file){

    return new  Promise((resolve,reject)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:new mongoose.Types.ObjectId().toString(),
            folder:"cohort-audio"
        },(error,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}


module.exports=uploadFile;