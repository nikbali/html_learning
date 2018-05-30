function addfields()
{
    var p = d.createElement('p');
    p.innerHTML += '<label>Input text answer:</label><br><input type="text"><br><label>IsRight: </label><input name="isRight" type="checkbox"><br>';
    newFields.appendChild(p);
    return false;
}
var d = document,
    myForm = d.getElementById('createQuestionForm'),
    newFields = myForm.querySelector('#new_fields'),
    field = myForm.querySelector('input[type=file]'),
    butAdd = d.getElementById('addfields');
    butAdd.addEventListener('click', addfields, false);