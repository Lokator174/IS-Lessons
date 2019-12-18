const listBody = [
    { id: 1, name: 'Документ 1' },
    { id: 3, name: 'Документ 3' },
    { id: 2, name: 'Документ 2' },
    { id: 5, name: 'Документ 5' },
    { id: 4, name: 'Документ 4' },
    { id: 7, name: 'Документ 7' },
    { id: 9, name: 'Документ 9' }
];

const listHead = [
{id: '№', name: 'Название <button onclick="tableSortUp()">↑</button><button onclick="tableSortDown()">↓</button>'}
];

var headSelector = 'table thead';
var bodySelector = 'table tbody';

const $searchButton = document.querySelector('.filter button');
const $filterInput = document.querySelector('.filter input');

function drawTableHeader(element) { //Разметка шапки
    return `<tr>
        <th>${element.id}</th>
        <th>${element.name}</th>
    </tr>`
}

function drawTableBody(element) { //Разметка тела
    return `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
    </tr>`
}

const headInformation = listHead.map(drawTableHeader).join(''); //формирование из массива табличные элементы и вывод их на страницу
const bodyInformation = listBody.map(drawTableBody).join('');

document.querySelector(headSelector).innerHTML = headInformation;
document.querySelector(bodySelector).innerHTML = bodyInformation;

function tableSortUp() { // Сортировка
    let sortedRows = listBody.sort((a, b) => a.name > b.name ? 1 : -1).map(drawTableBody).join('');

    document.querySelector(bodySelector).innerHTML = sortedRows;
};

function tableSortDown() { // Сортировка
    let sortedRows = listBody.sort((a, b) => a.name > b.name ? -1 : 1).map(drawTableBody).join('');

    document.querySelector(bodySelector).innerHTML = sortedRows;
};

function searchDocuments(element) { // Проверка элементов на схожесть
    var property = element.name;
            if (property.indexOf(searchValue) > -1) {
                return true;
            }
    }

function search(){ // Поиск
    searchValue = $filterInput.value;
    const filter = listBody.filter(searchDocuments).map(drawTableBody).join('');
    document.querySelector(bodySelector).innerHTML = filter;
}

$searchButton.addEventListener('click', search);