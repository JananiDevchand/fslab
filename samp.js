fs= require('fs');
function ReadData(){
    try{
         const data= fs.readFileSync('data.json','utf-8');
         return JSON.parse(data);
    }catch(err){
        console.error("Error reading or parsing data.json:", err.message);
        return [];
    }
}

function writeData(data){
    try{
        fs.writeFileSync('data.json',JSON.stringify(data,null,2),'utf-8');
        console.log("Data written successfully to data.json");
    }catch(err){
        console.error("Error writing to data.json:", err.message);
    }}

function UpdatedData(id, newData){

let products= ReadData();
console.log("Initial Products:", products);
products.push({"id":4,"name":"David","age":28,"city":"Miami"});
writeData(products);
products= ReadData();
console.log("Updated Products:", products);

