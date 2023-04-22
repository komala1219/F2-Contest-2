
let array=[
    {id:1, name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen",age:"19",profession:"admin"}
]

let select = document.querySelector('select');
let filterButton = document.getElementById('filter');
let cardsDiv = document.getElementById('cards');
let nameInput = document.getElementById('name-btn');
let professionInput = document.getElementById('profession-btn');
let ageInput = document.getElementById('age-btn');
let addUserButton = document.getElementById('addUser');

// function to create the HTML card elements
function createCard(employee) {
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  cardDiv.innerHTML = `<p>${employee.id}.</p>
                       <p>Name: ${employee.name}</p>
                       <p>Profession:${employee.profession}</p>
                       <p>Age: ${employee.age}</p>`;
  cardsDiv.appendChild(cardDiv);
}

// function to filter the employees by profession
function filterEmployees() {
  let selectedProfession = select.value;
  if(selectedProfession === 'Profession') {
    alert('Please select a profession before clicking the button.');
    return;
  }
  cardsDiv.innerHTML = '';
  let filteredArray = array.filter(employee => employee.profession === selectedProfession);
  filteredArray.forEach(employee => createCard(employee));
}

// function to add a new employee to the array and the UI
function add() {
  let name = nameInput.value;
  let profession = professionInput.value;
  let age = ageInput.value;
  let id = array.length + 1;
  let newEmployee = {id, name, profession, age};
  array.push(newEmployee);
  createCard(newEmployee);
  nameInput.value = '';
  professionInput.value = '';
  ageInput.value = '';
}

// create the initial cards
array.forEach(employee => createCard(employee));

// add event listeners
select.addEventListener('select', filterEmployees);
filterButton.addEventListener('click', filterEmployees);
addUserButton.addEventListener('click', add);
