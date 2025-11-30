// const http=require('http');
// const firstserver=http.createServer(function(userreq,serverres){
//     serverres.end("hello user")
// })
// firstserver.listen(5000,
//     function(){
//         console.log("Server is Running")
//     });

const fs=require('fs');
function createFile(){
    fs.writeFileSync('Data.txt','Hello From Server')
    console.log("File is Created")
}
function readFile(){
    let Data= fs.readFileSync('Data.txt','utf-8')
    console.log(Data)
}
function updateFile(){
    fs.appendFileSync('Data.txt','Hi Saikripa this is server')
    console.log('file Updated')
}
function deleteFile(){
    Data= fs.unlinkSync('Data.txt')
console.log('file Deleted')
}
// createFile();
// readFile();
// updateFile()
deleteFile()