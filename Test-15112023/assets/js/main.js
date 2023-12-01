document.addEventListener('DOMContentLoaded', function() {
    var productList = [];  //declare productList as empty array
    loadData();
});

function addProduct(){
    //get the data from the inputs
    var nameData = document.getElementById("name").value;   //input
    var priceData = document.getElementById("price").value;   //input
    var categorySelect = document.getElementById("id_category");
    var categoryData = categorySelect.options[categorySelect.selectedIndex].text;   //input selection text
    var urlData = document.getElementById("photoUrl").value;       //input

    //
    var data = new Object();
    data.urlData = urlData;
    data.priceData = priceData;
    data.categoryData = categoryData;
    data.nameData = nameData;

    productList.push(data);

    createTable();
    saveData(); 
    document.getElementById("productForm").reset();    
   
}

function createTable(){
    var data = document.getElementById("data");                     //output

    var info = "";
    if(productList.length>0){
        for (var index=0;index<productList.length;index++){
            info += `
            <tr>
            <td>${productList[index].nameData}</td>
            <td>${productList[index].priceData}</td>
            <td>${productList[index].categoryData}</td>
            <td><img src="${productList[index].urlData}" style="max-height: 100px;"/></td>
            </tr>
        `
        }
        data.innerHTML=info;
    }

}

function loadData(){
    //localStorage.getItem get data from local storage by name
    //JSON.parse => convert the string (in json format to object again)
    var storedData = localStorage.getItem("products");
    productList = storedData ? JSON.parse(storedData) : [];
    createTable();
}

function saveData(){
    //localStorage => save the data to user hard disk
    //sessionStorage => save the data as long as the window/tab is open
    //localStorage.setItem => save the data to specific item.....
    localStorage.setItem("products",JSON.stringify(productList));
    //the command to convert an object to a string is JSON.stringify(object)
}