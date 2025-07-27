require('dotenv').config()

const app=require('./src/app')
const connectToDb=require('./src/db/db')


connectToDb()
app.listen(3000,()=>{
    console.log('server running at port 3000');
    
})