function addData(){
  // window.alert("sjhdga");

  var career=document.querySelector("#Career").value;
    //personal details
  var name=document.querySelector("#Name").value;
  var email=document.querySelector("#Email").value;
  var phonenumber=document.querySelector("#Phonenumber").value;
  var role=document.querySelector("#Role").value;
  //Graduation Details
  var college1=document.querySelector("#College1").value;
  var degree1=document.querySelector("#Degree1").value;
  var branch1=document.querySelector("#Branch1").value;
  var percentage1=document.querySelector("#Sgpa").value;
  //intermediate details
  var college2=document.querySelector("#College2").value;
  var branch2=document.querySelector("#Branch2").value;
  var percentage2=document.querySelector("#Percentage").value;
  //SSC details
  var college3=document.querySelector("#College3").value;
  var branch3=document.querySelector("#Branch3").value;
  var percentage3=document.querySelector("#Gpa").value;
//Skills
  var skills=document.querySelector("#Skills").value;

var idb=window.indexedDB|| window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
var open=idb.open("StoreData",1);
console.log("indexedDB is Created");

open.onupgradeneeded=function(event){
  var request=event.target.result;
  var storeDB=request.createObjectStore("Formatdata",{keyPath:"id",autoIncrement:true});
}
 open.onerror=function(event){
  console.log("Object store is not created",+error);
}
open.onsuccess=function(event){
var request=event.target.result;
var transaction=request.transaction("Formatdata","readwrite");
var storeDB=transaction.objectStore("Formatdata");
storeDB.put({
Career:career,
Name:name,
Email:email,
Phonenumber:phonenumber,
Role:role,
Education:[
{
College:college1,
degree:degree1,
Branch:branch1,
Percentage:percentage1
},
{
College:college2,
degree:"",
Branch:branch2,
Percentage:percentage2
},
{
College:college3,
degree:"",
branch:branch3,
Percentage:percentage3
}
],
Skills:skills
});
window.open("index.html");
}
}
