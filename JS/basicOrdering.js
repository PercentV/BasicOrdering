"use strict";

const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");
const clear = document.getElementById("clear");

const minus1 = document.getElementById("minus1");
const minus2 = document.getElementById("minus2");
const minus3 = document.getElementById("minus3");
const plus1 = document.getElementById("plus1");
const plus2 = document.getElementById("plus2");
const plus3 = document.getElementById("plus3");

const quantity_1 = document.getElementById("quantity1");
const quantity_2 = document.getElementById("quantity2");
const quantity_3 = document.getElementById("quantity3");

const order1 = 60;
const order2 = 80;
const order3 = 50;

let quantity = 0;
let quantity1 = 0;
let quantity2 = 0;

let price1 = 0;
let price2 = 0;
let price3 = 0;

const total_price = document.getElementById("total-price");

function TotalPrice() {
    total_price.value = price1 + price2 + price3;
}

function Increment1() {
    quantity++;
    quantity_1.value = quantity;
    price1 = (quantity_1.value * order1);
    TotalPrice();
}

function Decrement1() {
    if (quantity_1.value > 0) {
        quantity--;
        quantity_1.value = quantity;
        price1 -= order1;
    } else {
        quantity = 0;
        quantity_1.value = quantity;
    }
    TotalPrice();
}

function Increment2() {
    quantity1++;
    quantity_2.value = quantity1;
    price2 = (quantity_2.value * order2);
    TotalPrice();
}

function Decrement2() {
    if (quantity_2.value > 0) {
        quantity1--;
        quantity_2.value = quantity1;
        price2 -= order2;
    } else {
        quantity1 = 0;
        quantity_2.value = quantity1;
    }
    TotalPrice();
}

function Increment3() {
    quantity2++;
    quantity_3.value = quantity2;
    price3 = (quantity_3.value * order3);
    TotalPrice();
}

function Decrement3() {
    if (quantity_3.value > 0) {
        quantity2--;
        quantity_3.value = quantity2;
        price3 -= order3;
    } else {
        quantity2 = 0;
        quantity_3.value = quantity2;
    }
    TotalPrice();
}

function SendOrder() {
    const customer_Name = document.getElementById("customer_name");
    const customer_Address = document.getElementById("customer_address");
    const customer_Contact = document.getElementById("customer_contact");
    
    const customer_info = document.querySelector(".customer_info");


    if (customer_Name.value === "" || customer_Address.value === "" || customer_Contact.value === "") {
        alert("Input required field");
    } else {
        if (quantity_1.value === 0 && quantity_2.value === 0 && quantity_3.value === 0) {
            alert("Select order");
        } else {
            if ( confirm("Send?") ) {
                customer_info.innerHTML = `Customer Name: ${customer_Name.value} <br>
                                           Address: ${customer_Address.value} <br>
                                           Contact: ${customer_Contact.value} <br>
                                           `;
                Orders();
            }
            cancel.disabled = true;
            cancel.style.cursor = "no-drop";
        }
    }
}

function Orders() {
    const orders = document.querySelector(".orders");

    if (quantity_1.value > 0 && quantity_2.value > 0 && quantity_3.value > 0) {
        orders.innerHTML = `Burger: ${price1} <br> Pizza: ${price2} <br> Fries: ${price3} <br> Total Amount = ${total_price.value}`;
    } else if (quantity_1.value > 0 && quantity_2.value > 0) {
        orders.innerHTML = `Burger: ${price1} <br> Pizza: ${price2} <br> Total Amount = ${total_price.value}`;
    } else if (quantity_1.value > 0 && quantity_3.value > 0) {
        orders.innerHTML = `Burger: ${price1} <br> Fries: ${price3} <br> Total Amount = ${total_price.value}`;
    } else if (quantity_2.value > 0 && quantity_3.value) {
        orders.innerHTML = `Pizza: ${price2} <br> Fries: ${price3} <br> Total Amount = ${total_price.value}`;
    } else if (quantity_1.value > 0) {
        orders.innerHTML = `Burger: ${price1} <br> Total Amount = ${total_price.value}`;
    } else if (quantity_2.value > 0) {
        orders.innerHTML = `Pizza: ${price2} <br> Total Amount = ${total_price.value}`;
    } else if (quantity_3.value > 0) {
        orders.innerHTML = `Fries: ${price3} <br> Total Amount = ${total_price.value}`;
    }
}

function CanceOrder() {
    if ( confirm("Cancel Order?") ) {
        document.getElementById("customer_name").value = "";
        document.getElementById("customer_address").value = "";
        document.getElementById("customer_contact").value = 0;
    
        document.getElementById("total-price").value = 0;

        quantity_1.value = 0;
        quantity_2.value = 0;
        quantity_3.value = 0;
    }
}

function ClearField() {
    document.querySelector(".customer_info").innerHTML = "Customer Info";
    document.querySelector(".orders").innerHTML = "Orders";
    document.getElementById("customer_name").value = "";
    document.getElementById("customer_address").value = "";
    document.getElementById("customer_contact").value = 0;

    document.getElementById("total-price").value = 0;

    quantity_1.value = 0;
    quantity_2.value = 0;
    quantity_3.value = 0;
}

plus1.onclick = Increment1;
minus1.onclick = Decrement1;
plus2.onclick = Increment2;
minus2.onclick = Decrement2;
plus3.onclick = Increment3;
minus3.onclick = Decrement3;
submit.onclick = SendOrder;
cancel.onclick = CanceOrder;
clear.onclick = ClearField;