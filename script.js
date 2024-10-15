let customers = [
    {id: 1, name:"Lainey McPhillimey", age: 90, address:{city:"Wanliang", street: "Vernon", house: 12}, newsLetter: true},
    {id: 2, name:"Isahella Bitchener", age: 53, address:{city:"Saint-Brieuc", street: "Upham", house: 21}, newsLetter: false},
    {id: 3, name:"Bax Pozer", age: 20, address:{city:"Kilafors", street: "Artisan", house: 28}, newsLetter: false},
    {id: 4, name:"Justine St. Ledger", age: 62, address:{city:"Kuz’minskiye", street: "Otverzhki", house: 2}, newsLetter: false},
    {id: 5, name:"Zaria Bownde", age: 17, address:{city:"Gardutanjak", street: "Dottie", house: 14}, newsLetter: false},
    {id: 6, name:"Bryanty Wycliff", age: 26, address:{city:"Al Jīb", street: "Esch", house: 3}, newsLetter: false},
    {id: 7, name:"Perkin Corn", age: 20, address:{city:"Norabats’", street: "Kings", house: 22}, newsLetter: true},
    {id: 8, name:"Baron Le Guin", age: 36, address:{city:"Ropcha", street: "Corben", house: 20}, newsLetter: false},
    {id: 9, name:"Carita Elsie", age: 9, address:{city:"Maria Aurora", street: "Spaight", house: 28}, newsLetter: false},
    {id: 10, name:"Arnaldo Ashbrook", age: 47, address:{city:"Komaki", street: "Dovetail", house: 24}, newsLetter: true}
];

function displayCustomers() {
    const tableBody = document.getElementById('customerTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    customers.forEach(customer => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.address.city}</td>
            <td>${customer.address.street}</td>
            <td>${customer.address.house}</td>
            <td>${customer.newsLetter ? 'Yes' : 'No'}</td>
            <td>
                <button onclick="deleteCustomer(${customer.id})">Delete</button>
                <button onclick="modifyCustomer(${customer.id})">Modify</button>
            </td>
        `;
    });
}

function modifyCustomer(id) {
    const customer = customers.find(cust => cust.id === id);
    if (customer) {
        document.getElementById('editId').value = customer.id;
        document.getElementById('editName').value = customer.name;
        document.getElementById('editAge').value = customer.age;
        document.getElementById('editCity').value = customer.address.city;
        document.getElementById('editStreet').value = customer.address.street;
        document.getElementById('editHouse').value = customer.address.house;
        document.getElementById('editNewsletter').checked = customer.newsLetter;

        document.getElementById('editCustomerForm').style.display = 'block';
    }
}

document.getElementById('editCustomerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById('editId').value);
    const name = document.getElementById('editName').value;
    const age = parseInt(document.getElementById('editAge').value);
    const city = document.getElementById('editCity').value;
    const street = document.getElementById('editStreet').value;
    const house = parseInt(document.getElementById('editHouse').value);
    const newsLetter = document.getElementById('editNewsletter').checked;

    const customerIndex = customers.findIndex(cust => cust.id === id);
    if (customerIndex !== -1) {
        customers[customerIndex].name = name;
        customers[customerIndex].age = age;
        customers[customerIndex].address.city = city;
        customers[customerIndex].address.street = street;
        customers[customerIndex].address.house = house;
        customers[customerIndex].newsLetter = newsLetter;

        displayCustomers();
        document.getElementById('editCustomerForm').reset();
        document.getElementById('editCustomerForm').style.display = 'none';
    }
});

function addCustomer(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const city = document.getElementById('city').value;
    const street = document.getElementById('street').value;
    const house = parseInt(document.getElementById('house').value);
    const newsLetter = document.getElementById('newsletter').checked;

    const newId = customers.length ? customers[customers.length - 1].id + 1 : 1;

    customers.push({
        id: newId,
        name: name,
        age: age,
        address: { city: city, street: street, house: house },
        newsLetter: newsLetter
    });

    displayCustomers();
    document.getElementById('customerForm').reset();
}

function deleteCustomer(id) {
    const index = customers.findIndex(customer => customer.id === id);
    if (index !== -1) {
        customers.splice(index, 1);
        displayCustomers();
        document.getElementById('errorMessage').textContent = '';
    } else {
        document.getElementById('errorMessage').textContent = 'Error: Customer ID does not exist.';
    }
}

document.getElementById('customerForm').addEventListener('submit', addCustomer);
document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const idToDelete = parseInt(document.getElementById('deleteId').value);
    deleteCustomer(idToDelete);
    document.getElementById('deleteForm').reset();
});

displayCustomers();


