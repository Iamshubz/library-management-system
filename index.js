const express= require('express');
const app = express();
const port = 8081;
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).json({
        message:'HOME PAGE'});
});
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});