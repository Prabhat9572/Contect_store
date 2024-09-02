let contacts = [];

function showForm() {
  document.getElementById("contactForm").style.display = "block";
}

function addContact() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (!name || !phone || !email) {
    alert("Please fill in all fields.");
    return;
  }

  const contact = { name, phone, email };
  contacts.push(contact);

  displayContacts();
  clearForm();
}

function displayContacts() {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${contact.name}</strong><br>
                         Phone: ${contact.phone}<br>
                         Email: ${contact.email}<br>
                         <button onclick="editContact(${index})">Edit</button>
                         <button onclick="deleteContact(${index})">Delete</button>`;

    contactList.appendChild(listItem);
  });
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("contactForm").style.display = "none";
}

function editContact(index) {
  const contact = contacts[index];
  document.getElementById("name").value = contact.name;
  document.getElementById("phone").value = contact.phone;
  document.getElementById("email").value = contact.email;

  contacts.splice(index, 1);
  displayContacts();
}

function deleteContact(index) {
  contacts.splice(index, 1);
  displayContacts();
}
