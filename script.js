const form = document.querySelector('.form-container');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector('#type');
const button = document.querySelector('button');
const totalPriceElement = document.querySelector('#totalPrice');

let total = 0;
let toppings = [];
let extras = [];

const pancakePriceCalc = () => {
  const priceBanner = document.querySelector('.price-banner')
  total = typeSelect.value;
  console.log(total, typeof(total));
  total = parseInt(typeSelect.value);
  totalPriceElement.textContent = `${total}€`;

  checkToppings();

  priceBanner.animate(
    [
      { transform: 'scale(1)' },
      { transform: 'scale(1.05)' },
      { transform: ' scale(1)' },
    ],
    {
      duration: 100,
      iterations: 1,
    }
  );
};

const addItem = (itemName, category, value) => {
  if (category === 'toppings') {
    toppings.push(itemName, value);
    console.log(total, typeof(total))
    console.log(value, typeof(value))
    total += value;
    totalPriceElement.textContent = total + " €"

  } else if (category === 'extras'){
    extras.push(itemName, value);
    total += value;
    totalPriceElement.textContent = total + " €"
  }
};

const checkToppings = () => {
  toppings = [];
  extras = [];
  console.log(checkboxes);

  for (const item of checkboxes) {
    const itemName = item.dataset.name;
    const category = item.dataset.category;
    const value = parseInt(item.value);
    
    console.log(itemName, category)
    console.log(item.value)

    if (item.checked) {
      //total += parseInt(item.value);
      addItem(itemName, category, value);
    } else {
    //   removeItem(itemName, category);
    }
  }
  console.log('toppings array', toppings);
  console.log('extras array', extras);
};

const displayOrder = () => {
  const customerName = document.querySelector('#customerName').value;
  const orderType = document.querySelector('#order_type');
  const orderToppings = document.querySelector('#order_toppings');
  const orderExtras = document.querySelector('#order_extras');
  const orderName = document.querySelector('#order_name');
  const orderPrice = document.querySelector('#order_price');

  orderType.textContent = typeSelect.selectedOptions[0].text;
  orderToppings.textContent = toppings.join(', ');
  orderExtras.textContent = extras.join(', ');
  orderName.textContent = customerName;
  orderPrice.textContent = total + " €";
};

form.addEventListener('change', pancakePriceCalc);
button.addEventListener('click', displayOrder);