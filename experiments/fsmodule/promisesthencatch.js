const fs=require('fs').promises;
async function writeFile(){
    try{
        await fs.writeFile("promise.txt","hello students!");
        console.log("file created and data written successfully");
    }
    catch(error){
        console.log("error:",error);
    }
}
writeFile();
//read file????
async function appendFile(){
    try{
        await fs.appendFile("promise.txt","\n welcome to FSD training.");
        console.log("data APPENDED successfully");
    }
    catch(error){
        console.log("error:",error);
    }
}
appendFile();
async function renameFile(){
    try{
        await fs.rename("promise.txt","promise_new.txt");
        console.log("file renamed successfully");}
        catch(error){
            console,log("error:",error);
        }
    }
renameFile();
//delete
async function deleteFile(){
    try{
        await fs.rename("promise.txt","promise_new.txt");
        console.log("file renamed successfully");}
        catch(error){
            console,log("error:",error);
        }
    }
renameFile();