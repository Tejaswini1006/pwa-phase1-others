var param;
var paramValue;
var query;
query=window.location.search.substring(1).split("?");
for(i in query){
  param=query[i].split("=");
  paramValue=parseInt(param[1]);
}
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
  var info=storeDB.get(paramValue);
  info.onsuccess=function(data){
    console.log(data.target.result);
    display(data.target.result);
    resume(data.target.result);
  }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");

  function display(data)
  {
    console.log("guyt");
  var img=document.createElement("img");
  img.src="images/profile.png";
  left.append(img);

  var h3=document.createElement("h3");
h3.textContent=data.Name;
  left.append(h3);

  var h3=document.createElement("h3");
  h3.textContent=data.Role;
  left.append(h3);
  // right div
  var head=document.createElement("h1");
  head.textContent="Carrer Objective";
  right.append(head);
  var pc=document.createElement("p");
  pc.textContent=data.Career;
  right.append(pc);
}
function resume(data) {

  var head1=document.createElement("h2");
  head1.textContent="Education Details";
  right.append(head1);

  var table=document.createElement("table");
  let row="";
  row+="<tr>"+
  "<td>"+"College"+"</td>"+
  "<td>"+"degree"+"</td>"+
  "<td>"+"Branch"+"</td>"+
  "<td>"+"Percentage"+"</td>"+
  "</tr>";
  for(i in data.Education){
    row+="<tr>"+"<td>"+data.Education[i].College+"</td>"+
    "<td>"+data.Education[i].degree+"</td>"+
    "<td>"+data.Education[i].Branch+"</td>"+
    "<td>"+data.Education[i].Percentage+"</td>"+"</tr>";
    }
    table.innerHTML=row;
    right.append(table);
}
