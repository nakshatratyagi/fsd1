fs= require("fs");
//write

fs.writeFileSync("student.txt","this is experiment number 5 of the fsd workshop","utf8");
console.log("file is written sucessfully");
//read

const data=fs.readFileSync("student.txt","utf8");
console.log("file is readen suksesfully",data);
//append

fs.appendFileSync("student.txt","\n this is a new line added","utf8");
console.log("file is appended");
//delete
fs.unlinkSync("example.txt");
//make folder
fs.mkdirSync("sample folder");
console.log("new folder is created");
//delete folder
rmdirSync("sample folder");
console.log("folder is deleted successfully");

if(fs.existsSync(Student.txt)){
    console.log("file exists");
}
else{
    console.log("file not found, need to create this file");
}