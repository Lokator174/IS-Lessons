const list = [
    {id: 1, name: 'Документ 1'},
    {id: 3, name: 'Документ 3'},
    {id: 2, name: 'Документ 2'},
    {id: 5, name: 'Документ 5'},
    {id: 4, name: 'Документ 4'},
    {id: 7, name: 'Документ 7'},
    {id: 9, name: 'Документ 9'}
];

const $tbody = document.querySelector('table tbody');
$tbody.innerHTML = '';
for (let index = 0; index < list.length; index++) {
    const element = list[index];
    const $tr = document.createElement('tr');
    const $tdId = document.createElement('td');
    const $tdNumber = document.createElement('td');
    $tdId.innerHTML = element.id;
    $tdNumber.innerHTML = element.name;
    $tr.append($tdId, $tdNumber);
    $tbody.appendChild($tr);
}

const $searchButton = document.querySelector('.filter button');
const $filterInput = document.querySelector('.filter input');
const filterClickHandler = function (e) {

    const q = $filterInput.value;
    $tbody.innerHTML = '';
    for (let index = 0; index < list.length; index++) {
        const element = list[index];

        if (element.name.indexOf(q) > -1) {
            const $tr = document.createElement('tr');
            const $tdId = document.createElement('td');
            const $tdNumber = document.createElement('td');
            $tdId.innerHTML = element.id;
            $tdNumber.innerHTML = element.name;
            $tr.append($tdId, $tdNumber);
            $tbody.appendChild($tr);
        }
    }
};
$searchButton.addEventListener('click', filterClickHandler);

function tableSort() {
    debugger;
    let sortedRows = Array.from(table.rows[1].cells[1]);
    console.log(sortedRows);
    sortedRows.slice(1);
      
    console.log(sortedRows);
    sortedRows.sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
      console.log(sortedRows);
    table.tBodies[0].append(...sortedRows);
};

function tableSortUp() {
    $tbody.innerHTML = '';
    var sortedRows = list;

    sortedRows.sort((a, b) => a.name > b.name ? 1 : -1);

    for (let index = 0; index < sortedRows.length; index++) {
    const element = sortedRows[index];
    const $tr = document.createElement('tr');
    const $tdId = document.createElement('td');
    const $tdNumber = document.createElement('td');
    $tdId.innerHTML = element.id;
    $tdNumber.innerHTML = element.name;
    $tr.append($tdId, $tdNumber);
    $tbody.appendChild($tr);
    }
};

function tableSortDown() {
    $tbody.innerHTML = '';
    var sortedRows = list;

    sortedRows.sort((a, b) => a.name > b.name ? -1 : 1);

    for (let index = 0; index < sortedRows.length; index++) {
    const element = sortedRows[index];
    const $tr = document.createElement('tr');
    const $tdId = document.createElement('td');
    const $tdNumber = document.createElement('td');
    $tdId.innerHTML = element.id;
    $tdNumber.innerHTML = element.name;
    $tr.append($tdId, $tdNumber);
    $tbody.appendChild($tr);
    }
};