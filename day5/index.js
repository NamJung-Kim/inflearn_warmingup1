const items = document.querySelector('.items');
const titleInput = document.querySelector('#bookTitle');
const authorInput = document.querySelector('#bookAuthor');
const submitBtn = document.querySelector('#submit');
const result = document.querySelector('.actionEvent');

function onSubmit() {
  const tText = titleInput.value;
  const aText = authorInput.value;
  if (tText === '') {
    titleInput.focus();
    return;
  } else if (aText === '') {
    authorInput.focus();
    return;
  }
  console.log(tText, aText);

  const item = createItem(tText, aText);
  items.append(item);
  resultEvent(result);
  result.innerText = '책이 추가 되었습니다.';
  titleInput.value = '';
  authorInput.value = '';
  
}

function createItem(a, b) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  span1.setAttribute('class', 'item__title');
  span2.setAttribute('class', 'item__author');
  span1.innerText = a;
  span2.innerText = b;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
    resultEvent(result);
    result.innerText = '책이 제거되었습니다';
  });

  const divider = document.createElement('div');
  divider.setAttribute('class', 'divider');

  item.append(span1, span2, deleteBtn);
  itemRow.append(item, divider);

  return itemRow;
}

function resultEvent(e) {
  e.style.width = '100%';
  e.style.height = '30px';
  e.style.backgroundColor = 'green';
  e.style.color = 'white';
  // e.innerText = '책이 추가 되었습니다';
}
submitBtn.addEventListener('click', () => {
  onSubmit();
});