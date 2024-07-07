let listItems = [];

//constant values
const itemInput = document.querySelector('input[name="New Item"]');
const list = document.querySelector('.list-container ul');
const addBtn = document.querySelector('#add-btn');
const clearBtn = document.querySelector('#clear-btn');
const purchasedBtn = document.querySelector('#mark-btn')


//Event Listeners
list.addEventListener('click', appendListItemClick)
addBtn.addEventListener('click', appendItem);
clearBtn.addEventListener('click', appendClearList);
purchasedBtn.addEventListener('click', appendPurchaseItem);


//Appending
function appendListItemClick(event){
    if(EventTarget === LI){
        const selectedItem = getSelectedItem(EventTarget);
        if (selectedItem) {
            selectedItem.purchased = !selectedItem.purchased;
            renderList();
    
        }}
    }

function appendItem() {
    const newItem = itemInput.value.trim();
        if (newItem) {
           listItems.push({ item: newItem, purchased: false });
           itemInput.value = '';
           renderList();
            }
}

function appendClearList() {
    listItems = [];
    renderList();
  }

function appendPurchaseItem(){
    const selectedItem = getSelectedItem();
  if (selectedItem) {
    selectedItem.purchased = true;
    renderList();
  }
}

function renderList() {
    list.innerHTML = listItems.map((item , index) =>`
        <li${item.purchased ? 'class="purchased"' : ''}>${item.item}</li>`).join('');
}

        
