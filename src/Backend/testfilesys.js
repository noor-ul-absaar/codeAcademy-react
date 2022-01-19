const fs=require("fs");
//fs.writeFile()

var arr=[];

fs.readFile("data.json",(err,data)=>{
    if(err){

    }
    else{
        console.log("reading done");
        console.log(data);
        arr=JSON.parse(data);
        console.log(arr);
        arr.push({id:4,title:"smd",room:"cs2"});

        fs.writeFile("data.json",JSON.stringify(arr),()=>{
            console.log("writting done");
        });
    }
});

/*
arr.push({id:1,title:"web",room:"seminar"});
arr.push({id:2,title:"web 1",room:"seminar 1"});
arr.push({id:3,title:"web 2",room:"seminar2"});

const str1=JSON.stringify(arr);
console.log(arr);
console.log(str1);

fs.writeFile("data.json",str1, ()=>{
    console.log("json data written");
});

*/