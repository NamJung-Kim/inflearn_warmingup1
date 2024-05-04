
const menuButton = document.querySelector('#menu');
const koFoodButton = document.querySelector('#koFood');
const foFoodButton = document.querySelector('#foFood');

const foodList = [
  {
    category: "한식",
    name: "김치찌개",
    price: '8000원',
    desc: "lorem1",
    img: "imgs/kimchi.jpg",
  },
  {
    category: "한식",
    name: "김밥",
    price: '4500원',
    desc: "lorem2",
    img: "imgs/kimbap.jpg",
  },
  {
    category: "양식",
    name: "파스타",
    price: '8000원',
    desc: "lorem3",
    img: "imgs/pasta.jpg",
  },
  {
    category: "양식",
    name: "피자",
    price: '10000원',
    desc: "lorem4",
    img: "imgs/pizza.jpg",
  },
];

const createFoodList = (data) => {
  const menu = document.createElement('div');
  menu.className = 'list';
  menu.innerHTML = `<img src="${data.img}"/>
  <div>
  <span>${data.name}</span>
  <span>${data.price}</span>
  <span>${data.desc}</span>
  </div>`

  return menu;
};

menuButton.addEventListener('click', () => {
  const item = document.querySelector('#list');
  item.innerHTML = '';
  
  foodList.forEach(i => {
    item.append(createFoodList(i));
  });
});

koFoodButton.addEventListener('click', () => {
  const item = document.querySelector('#list');
  item.innerHTML = '';

  foodList.filter(item => item.category === '한식').forEach((i) => {
    item.append(createFoodList(i));
  });
});

foFoodButton.addEventListener('click', () =>{
  const item = document.querySelector('#list');
  item.innerHTML = '';

  foodList.filter(item => item.category === '양식').forEach((i) => {
    item.append(createFoodList(i));
  });
})
