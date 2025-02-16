const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');


function addItem(e){
    e.preventDefault();


    //validate Input
    const newItem = itemInput.value;
    if(newItem ===''){
        alert('Please add an item');
        return;
    }

    //create list item
    const li = document.createElement('li');
    //append child adds an item to a list
    li.appendChild(document.createTextNode(newItem));

    //call button functiuon
    const button = createButton('remove-item btn-link text-red');

    //append the button to the list object
   li.appendChild(button);
   itemList.appendChild(li);

   //clear the input value
   itemInput.value = '';
 
}


function createButton(classes){
    //instantiate the button
    const button = document.createElement('button');
    button.className = classes;

    //call the icon function
    const icon = createIcon('fa-solid fa-xmark');
    
    //append the icon to the button
    button.append(icon);

    //return the button
    return button;

}


function createIcon(classes){
    //instantiate the button
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}



//event listeners
itemForm.addEventListener('submit', addItem);




