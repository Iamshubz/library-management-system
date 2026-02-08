const express= require('express');
const app = express();
const port = 8081;
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).json({
        message:'HOME PAGE'});
});
app.all('*',(req,res)=>{
    res.status(404).json({
        message:'PAGE NOT Build'});
});
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});