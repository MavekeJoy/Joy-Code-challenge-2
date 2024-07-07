let items = JSON.parse(localStorage.getItem('items'))  || []

// variables that will remain constant.
const shoppingList = document.getElementById('shoppinglist')
const textInput = document.getElementById('textinput');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const markPurchasedBtn = document.getElementById('markPurchasedButton');


