// # - refers to HTML tag's IDs
//. - refers to HTML tag's CLASSES

//Search button. Button click
document.querySelector("#add-time")
.addEventListener('click', cloneField)

//Do something
function cloneField() {
    //Clone fields. Which fields?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Node refers to HTML elements //true clones all field's dependences

    //Clean fields. Which field?
    const fields = newFieldContainer.querySelectorAll('input') //Search on all inputs an add to 'fields'
    
    //for each field, clean
    fields.forEach(function(field) {
        //Get actual field and reset it
        field.value = ""
    })

    //Add on page. Where?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}