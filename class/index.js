const listHead = [
    { id: '№', name: 'Название <button onclick="newTableElements.tableSortUp()">↑</button><button onclick="newTableElements.tableSortDown()">↓</button>' }
];

const listBody = [
    { id: 1, name: 'Документ 1' },
    { id: 3, name: 'Документ 3' },
    { id: 2, name: 'Документ 2' },
    { id: 5, name: 'Документ 5' },
    { id: 4, name: 'Документ 4' },
    { id: 7, name: 'Документ 7' },
    { id: 9, name: 'Документ 9' }
];

const $searchButton = document.querySelector('.filter button');
const $filterInput = document.querySelector('.filter input');

class CreateTable {
    constructor(listHead, listBody) {
        this.listHead = listHead;
        this.listBody = listBody;
    }

    createTableHeader(element) {
        return `<tr>
        <th>${element.id}</th>
        <th>${element.name}</th>
        </tr>`
    }

    createTableBody(element) {
        return `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        </tr>`
    }

    drawTableHeader() {
        let tableInformation = this.listHead.map(this.createTableHeader).join('');
        document.querySelector('table thead').innerHTML = tableInformation;
    }

    drawTableBody() {
        let tableInformation = this.listBody.map(this.createTableBody).join('');
        document.querySelector('table tbody').innerHTML = tableInformation;
    }

    tableSortUp() {
        let sortedRows = this.listBody.sort((a, b) => a.name > b.name ? 1 : -1).map(this.createTableBody).join('');
        document.querySelector('table tbody').innerHTML = sortedRows;
    }

    tableSortDown() {
        let sortedRows = this.listBody.sort((a, b) => a.name > b.name ? -1 : 1).map(this.createTableBody).join('');
        document.querySelector('table tbody').innerHTML = sortedRows;
    }

    searchDocuments(element) {
        let searchValue = $filterInput.value;
        let property = element.name;
        if (property.indexOf(searchValue) > -1) {
            return true;
        }
    }

    search() {
        let filter = this.listBody.filter(this.searchDocuments).map(this.createTableBody).join('');
        document.querySelector('table tbody').innerHTML = filter;
    }
}

let newTableElements = new CreateTable(listHead, listBody);
newTableElements.drawTableHeader();
newTableElements.drawTableBody();

$searchButton.onclick = function(){newTableElements.search();};