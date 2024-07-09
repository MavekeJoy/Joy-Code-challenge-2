let listItems = [];

//constant values
const itemInput = document.querySelector('input[name="New Item"]');
const list = document.querySelector('.list-container ul');
const addBtn = document.querySelector('#add-btn');
const clearBtn = document.querySelector('#clear-btn');
const purchasedBtn = document.querySelector('#mark-btn')


//Event Listeners
addBtn.addEventListener('click', appendItem);
clearBtn.addEventListener('click', appendClearList);
purchasedBtn.addEventListener('click', appendPurchaseItem);


//Appending
        
