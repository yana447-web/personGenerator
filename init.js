
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    // находим элемент firstNameOutput и меняем текст с помощью innerText на значение пола и имени
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    // VAL добавили вывод Фамилии, отчетства, года, профессии:
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#middleNameOutput').innerText = initPerson.middlename;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthDates;
    document.querySelector('#professionsOutput').innerText = initPerson.professions;
};

document.querySelector('#next').onclick = window.onload;

document.querySelector('#clear').onclick = function () {
    document.querySelector('#surnameOutput').innerText = "";
    document.querySelector('#firstNameOutput').innerText = "";
    document.querySelector('#middleNameOutput').innerText = "";
    document.querySelector('#genderOutput').innerText = "";
    document.querySelector('#birthYearOutput').innerText = "";
    document.querySelector('#professionsOutput').innerText = "";
}