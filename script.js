selectedRow =null
function  OnFormSubmit(){

    if(validate()){
        var formData =  readFormData();
        if( selectedRow == null){
           insertNewRecord(formData);
        }else{
           updateData(formData); 
        }
        resetFormData();
    }
     
}

function readFormData(){
    var formData={};
    formData["fname"] = document.getElementById("fname").value;
    formData["fproject"] = document.getElementById("fproject").value;
    formData["ftask"] = document.getElementById("ftask").value;
    formData["fradio"] = document.getElementById("fradio").value;
    formData["fsdate"] = document.getElementById("fsdate").value;
    formData["ftdate"] = document.getElementById("ftdate").value;
   return formData;
}

function insertNewRecord(data){

    var table = document.getElementById("tasklist").getElementsByTagName("thead")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fproject;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.ftask;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fradio;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.fsdate;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.ftdate;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> 
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetFormData(){
    document.getElementById("fname").value = ""; 
    document.getElementById("fproject").value = ""; 
    document.getElementById("ftask").value = ""; 
    document.getElementById("fradio").value = ""; 
    document.getElementById("fsdate").value = ""; 
    document.getElementById("ftdate").value = ""; 
    selectedRow =null;
}

function onEdit(td){
 selectedRow = td.parentElement.parentElement;
 document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
 document.getElementById("fproject").value = selectedRow.cells[1].innerHTML;
 document.getElementById("ftask").value = selectedRow.cells[2].innerHTML;
 document.getElementById("fradio").value = selectedRow.cells[3].innerHTML;
 document.getElementById("fsdate").value = selectedRow.cells[4].innerHTML;
 document.getElementById("ftdate").value = selectedRow.cells[5].innerHTML;
}

function updateData(formData){
    selectedRow.cells[0].innerHTML = formData.fname;  
    selectedRow.cells[1].innerHTML = formData.fproject;  
    selectedRow.cells[2].innerHTML = formData.ftask;  
    selectedRow.cells[3].innerHTML = formData.fradio;  
    selectedRow.cells[4].innerHTML = formData.fsdate;  
    selectedRow.cells[5].innerHTML = formData.ftdate;  
}

function onDelete(td){
   if(confirm("Are you sure you wants to Delete!")){
       row = td.parentElement.parentElement; 
       document.getElementById("tasklist").deleteRow(row.rowIndex);
       resetFormData();
}
}

function clearError(){
    errors = document.getElementsByClassName("formerror");
     for( let item of errors){
          item.innerHTML="";
     }
}

function seterror(id, error){
    element =document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validate(){

    var returnVal = true;
    clearError();

    var fname = document.getElementById("fname").value;
    if(fname.length == 0){
        seterror("name","Please enter your name!");
        returnVal = false;
    }
  
    var femail = document.getElementById("femail").value;
    if(femail.length == 0){
        seterror("email","Please enter your email!");
        returnVal = false;
    }

    var fphone = document.getElementById("fphone").value;
    if(fphone.length == 0){
        seterror("phone","Please enter your phone number!");
        returnVal = false;
    }
    if(isNaN(fphone)){
        seterror("phone","Please enter number only!");
        returnVal = false;
    }
    // if(fphone>10){
    //     seterror("phone","Please enter 10 Digit number");
    //     returnVal = false;
    // }


    var fproject = document.getElementById("fproject").value;
    if(fproject.length == 0){
        seterror("project","Please enter your project name!");
        returnVal = false;
    }

    var ftask = document.getElementById("ftask").value;
    if(ftask.length == 0){
        seterror("task","Please enter your task name!");
        returnVal = false;
    }

    var fname = document.forms["myForm"]["fradio"].value;
    if(fname.length == 0){
        seterror("radio","Please select any!");
        returnVal = false;
    }

    var fsdate= document.getElementById("fsdate").value;
    if(fsdate.length == 0){
        seterror("sdate","Please enter your name!");
        returnVal = false;
    }
    var ftdate = document.getElementById("ftdate").value;
    if(ftdate.length == 0){
        seterror("tdate","Please enter your name!");
        returnVal = false;
    }
    return returnVal;
}

function radio(){
    let radio= document.forms["myForm"]["fradio"];
    let radioVal ="";
    for(let i=0;i<radio.length;i++){
        if(radio[i].checked) {
            radioVal = radioVal+radio[i]; 
        }
        document.getElementById("fradio").value = radioVal;
    }
}
