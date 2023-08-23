const message=require('mongoose');
const db=process.env.CONNECTION_STRING;
const dbconnection=async() => {
try{
await mongoose.connect(db,{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndia:true
});
console.log('mongodb connected'); 
}
catch(err){
console.error(err.message);
process.exit(1);
}


}
module.exports=dbconnection;