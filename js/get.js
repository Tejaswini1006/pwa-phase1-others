var request;
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
var finalData=storeDB.getAll();
finalData.onsuccess=function(event){
 var result=event.target.result;
  console.log(event.target.result);
  display(event.target.result);
}
}
function display(data){
var parent=document.querySelector(".parent");
for(var i=0;i<data.length;i++){
  var child=document.createElement("div");
  child.classList.add("child");
  var img=document.createElement("img");
  img.src="images/profile.png";
  var name=document.createElement("h2");
  name.textContent=data[i].Name;

  var role=document.createElement("p");
  role.textContent=data[i].Role;

  var link=document.createElement("a");
  link.href="resume.html?id="+data[i].id;
  link.textContent="view Profile";

  child.append(img);
  child.append(name);
  child.append(role);
  child.append(link);
  parent.append(child);

}
}
