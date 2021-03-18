const mongoose =require('mongoose')
const yup=require('yup');



//sports schema
const SportSchema=new mongoose.Schema({
    quote:{
        type:String,
        required:true,
        minlength:2,
        maxlength:200
    },
    author:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    }
});

   const validateSport=sport=>{
          const schema=yup.object().shape({
              Quote:yup.string().required().min(2).max(100),
              Author:yup.string().required().min(2).max(50),
          });
          return schema
          .validate(sport)
          .then(sport=>sport)
          .catch(error=>{
              return{
                  message:error.message
              }
          });
   };
exports.Sport=new mongoose.model('Sport',SportSchema);
exports.validateSport=validateSport;