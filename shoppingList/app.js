const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const btn = document.querySelector(".footer_button");

function onAdd() {
  const text = input.value
  if (text === '') {
    input.focus();
    return;
  }
  
  const item = createItem(text);
  
  items.appendChild(item);
  item.scrollIntoView({block : 'center'});
  input.value = ''

}

function createItem(text) { 
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');

  const itemDiv = document.createElement('div');
  itemDiv.setAttribute('class', 'item');

  const itemSpan = document.createElement('span');
  itemSpan.setAttribute('class', 'item_title');
  itemSpan.innerText = text; 

  const itemButton = document.createElement('button');
  itemButton.setAttribute('class', 'item_delete');
  itemButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
  itemButton.addEventListener('click', () => {
    items.removeChild(itemRow);
  })

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item_divider')

  itemRow.appendChild(itemSpan);
  itemRow.appendChild(itemButton);
  itemRow.appendChild(itemDiv);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

btn.addEventListener("click", onAdd)

input.addEventListener("keypress", event => {
  if(event.key === 'Enter') {
    onAdd();
  }
})
