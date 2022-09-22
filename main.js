var iItem;
let prod;
var mood = 'create' ;

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDesc = document.getElementById("productDesc");
var numberProducts = document.getElementById("numberProducts");
var tableRow = document.getElementById("tableRow");
var btnAddProduct = document.getElementById("btnAddProduct");
var productsArr;



if (localStorage.getItem("products") == null) {
    productsArr = [];
} else {
    var productsArr = JSON.parse(localStorage.getItem("products"));
    display();
}

function addProduct() {
    var productObjct = {
        pNeame: productName.value,
        pPrice: productPrice.value,
        pCat: productCat.value,
        pDesc: productDesc.value,
    };

    if (mood == 'create') {
    productsArr.push(productObjct);
    display();
    clear();
    localStorage.setItem("products", JSON.stringify(productsArr));
    }if (mood == 'updat') {
        productsArr[iItem] = productObjct;
        localStorage.setItem("products", JSON.stringify(productsArr));
        btnAddProduct.innerHTML = 'add product';
        mood = 'create';
        display();
        clear();
    }
}

function clear() {
    productName.value = "";
    productPrice.value = "";
    productCat.value = "";
    productDesc.value = "";
}
function display() {
    var box = ``;

    for (var i = 0; i < productsArr.length; i++) {
        let prod = productsArr.length;
        box += `
        <tr>
        <td>${i + 1}</td>
        <td>${productsArr[i].pNeame}</td>
        <td>${productsArr[i].pPrice}</td>
        <td>${productsArr[i].pCat}</td>
        <td>${productsArr[i].pDesc}</td>
        <td><button data-tran="Update" class="btn btn-primary" onclick="UpdateProduct(${i});">Update</button></td>
        <td><button data-tran="Delete" class="btn btn-danger" onclick="DeleteProduct(${i});">Delete</button></td>
        </tr>`;

    }
    tableRow.innerHTML = box;
    numberProducts.innerHTML =  productsArr.length;
}

function UpdateProduct(item) {
    productName.value = productsArr[item].pNeame;
    productPrice.value = productsArr[item].pPrice;
    productCat.value = productsArr[item].pCat;
    productDesc.value = productsArr[item].pDesc;
    iItem = item;
    mood = 'updat';
    btnAddProduct.innerHTML = 'updat';
    scroll({
        top:0,
        behavior:"smooth"
    })
}

function DeleteProduct(item) {
    productsArr.splice(item, 1);
    localStorage.setItem("products", JSON.stringify(productsArr));
    display();
}