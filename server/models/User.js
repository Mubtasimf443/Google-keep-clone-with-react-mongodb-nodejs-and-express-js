/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ    */
/*  إِ*/
/*اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ  */
/* I believe in Allah and he is enough for me */



import mongoose from 'mongoose'



const userSchema = new mongoose.Schema({
    name : {
        require :false ,
        type : String
    },
    email : {
        required : false,
        type : String, 
        unique : true 
    },
    password : {
        type : String,
        required : true ,
    },
    phone : {
        type: Number ,
        required: false
    },
    varified : Boolean,
    pin : Number
});





const User = mongoose.model("user", userSchema) ;

export default User ;








