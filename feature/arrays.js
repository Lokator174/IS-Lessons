const numbers = [1,2,3,4,5,6,7,8,9];
// Нужно узнать все возрасты посетителей
const peoples = [{name: 'Misha', age: 15}, {name: 'Vasya', age: 30}, {name: 'Petya', age: 20}, {name: 'Masha', age: 25}]

function getPeopleAge(people){
    return people.age;
}

function add(a,b){return a+b;};

function gt(a,b){ a > b; }

function gtPartial(a){
   return function (b){
        return a > b;
    }
}

gtPartial(18);

function isAdult(age){
    return age > 18;
}

function isChild(age){
    return age < 18;
}

const ages = peoples
.map(getPeopleAge)
//.filter(isChild)
.concat([1,500,8,44,99])
.sort()

.join('-')
//.reduce(add, 0);
debugger;


function addOne(element){
    return element + 1;
    };

const total = numbers
.map(addOne)
.reduce(function(acc, value, index, collection){
    return acc + value;
}, 0);

//.forEach(logElement);

// Вывести элементы в консоль
function logElement(value){
    console.log(value);
};



// numbers.forEach(logElement);


/* for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
} */

