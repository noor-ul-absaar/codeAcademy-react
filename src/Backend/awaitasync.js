const {readFile} =require("fs/promises");

const fs= require("fs");



const f1= async()=>{

   var data= await readFile("data.json");
   
};
readFile("data.json")
.then((data)=>{ console.log(JSON.parse( data));})
.catch((err)=>{console.log(err)});


/*
const f1= async()=>{

    for(var i=0;i<10;i++)
    {
    var data= await readFile("data.json");

    console.log(i+"th data"+JSON.parse(data));
    }

 };
*/

/*
 
const f1= async()=>{

    for(var i=0;i<10;i++)
    {
     fs.readFile("data.json",(err,data)=>{
         console.log(i+"th data "+data);
     });

   
    }

 };
 */

f1();