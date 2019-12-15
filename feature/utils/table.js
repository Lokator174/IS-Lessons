function drawCells(cells, element, $tr, $t) {
    // динамически создавать ячейки и присваивать им данные из обьекта
    for (let index = 0; index < cells.length; index++) {
        const cellName = cells[index];
        const $cell = document.createElement($t);
        $cell.innerHTML = element[cellName];
        $tr.appendChild($cell);
    }
}
/**
 * Это Функция которая позволяет сгенерировать 
 * тело таблицы из указанного списка
 * @param {*} list - Список элементов для вывода
 * @param {*} selector Селектор для получения тела таблицы
 * @param {*} cells - Список колонок
 * @example 
 * const list = [
   {id: 1, name: 'Документ 1'},
   {id: 2, name: 'Документ 2'},
   {id: 3, name: 'Документ 3'}
];

const cellName = ['id', 'name'];

var tableSelector = 'table tbody';

drawTableBody(list, tableSelector);
 */
function drawTableBody(list, selector, cells) {
    const $tbody = document.querySelector(selector);
    $tbody.innerHTML = '';
    const $t = 'td';
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        const $tr = document.createElement('tr');
        drawCells(cells, element, $tr, $t);
        $tbody.appendChild($tr);
    }
}

function drawTableHeader(list, selector, cells) {
    const $thead = document.querySelector(selector);
    $thead.innerHTML = '';
    const $t = 'th';
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        const $tr = document.createElement('tr');
        drawCells(cells, element, $tr, $t);
        $thead.appendChild($tr);
    }
}

function filter(array, propName, predicat) {
    var result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const property = element[propName];
        if (property.indexOf(predicat) > -1) {
            result.push(element);
        }
    }
    return result;
}