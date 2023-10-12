import mongoose from "mongoose"

const DBConnection = async () =>{
    const MONGODB_URI = `mongodb+srv://satyakipakrashi123:satyaki@file-sharing.zhu34cn.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
        console.log('Database Connected Successfully')

    } catch (error){
        console.error('Error while connectting with the database',error.message)
    }
}

export default DBConnection