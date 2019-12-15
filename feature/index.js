const list = [
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

const cellName = ['id', 'name'];

var tableSelector = 'table tbody';
var headSelector = 'table thead';

drawTableHeader(listHead, headSelector, cellName);
drawTableBody(list, tableSelector, cellName);

const $searchButton = document.querySelector('.filter button');
const $filterInput = document.querySelector('.filter input');

// Бизнес логика
const filterClickHandler = function (e) {

    const q = $filterInput.value;
    drawTableBody(filter(list, 'name', q), tableSelector, cellName);

};

$searchButton.addEventListener('click', filterClickHandler);

function tableSortUp() {
    var sortedRows = list;

    sortedRows.sort((a, b) => a.name > b.name ? 1 : -1);

    drawTableBody(sortedRows, tableSelector, cellName);
};

function tableSortDown() {
    var sortedRows = list;

    sortedRows.sort((a, b) => a.name > b.name ? -1 : 1);

    drawTableBody(sortedRows, tableSelector, cellName);
};