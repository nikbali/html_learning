var countOfFields = 1; // Текущее число полей
var curFieldNameId = 1; // Уникальное значение для атрибута name
var maxFieldLimit = 6; // Максимальное число возможных полей
butAdd = document.getElementById('addfields');
butAdd.addEventListener('click', addField, false);

function deleteField(a)
 {
		 // Получаем доступ к ДИВу, содержащему поле
		 var contDiv = a.parentNode;
		 // Удаляем этот ДИВ из DOM-дерева
		 contDiv.parentNode.removeChild(contDiv);
		 // Уменьшаем значение текущего числа полей
		 countOfFields--;
		 // Возвращаем false, чтобы не было перехода по сслыке
 return false;
}
    
function addField() 
{
		 // Проверяем, не достигло ли число полей максимума
		 if (countOfFields >= maxFieldLimit) {
		 alert("Число полей достигло своего максимума = " + maxFieldLimit);
		 return false;
		 }
		 countOfFields++;// Увеличиваем текущее значение числа полей
		 curFieldNameId++;// Увеличиваем ID
		 var object = document.getElementById("new_fields");
		 object.style.display = 'block' 
		 var tr_text = document.createElement("tr");// Создаем элемент ДИВ
		 // Добавляем HTML-контент с пом. свойства innerHTML
		 tr_text.innerHTML = '<td><input name="name_" + curFieldNameId + "" type="text" /></td><td><input name="isRight_" + curFieldNameId + "" type="checkbox"></td>';
		 object.appendChild(tr_text);// Добавляем новый узел в конец списка полей 
		 return false;
}
