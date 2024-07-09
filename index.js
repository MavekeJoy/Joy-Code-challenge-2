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

function createList() {
    list.innerHTML = '';
    for (let i = 0; i < listItems.length; i++) {
      let item = listItems[i];
      let li = document.createElement('li');
      li.textContent = item.item;
      if (item.purchased) {
        li.className = 'purchased';
      }
      list.appendChild(li);
    }
  }

function appendItem() {
    const newItem = itemInput.value.trim();
    if (newItem) {
    listItems.push({ item: newItem, purchased: false });
    itemInput.value = '';
    createList();
    }
    }
    
    function appendClearList() {
    listItems = [];
    createList();
    }
    
    function appendPurchaseItem(){
    const selectedItem = getSelectedItem();
    if (selectedItem) {
    selectedItem.purchased = true;
    createList();
    }
    }
    
   