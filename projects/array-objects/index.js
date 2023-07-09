/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами.
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el)); // выведет каждый элемент массива
 */
function forEach(arr, fn) {
  for(const [i, el] of arr.entries()){
      fn(el, i, arr)
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами.
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   const newArray = map([1, 2, 3], (el) => el ** 2);
   console.log(newArray); // выведет [1, 4, 9]
 */
function map(arr, fn) {
  const newArray = [];
  for(const [i, el] of arr.entries()){
    newArray.push(fn(el, i, arr));
  }
  return newArray;
}


/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами.
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   const sum = reduce([1, 2, 3], (all, current) => all + current);
   console.log(sum); // выведет 6
 */
function reduce(array, fn, inital) {
  let startIndex = 0;
  let all = inital;

  if(inital === undefined){
    startIndex = 1;
    all = array[0];
  }

  for(let i = startIndex; i < array.length; i++){
    all = fn(all, array[i], i, array);
  }

  return all;

}


/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   const keys = upperProps({ name: 'Сергей', lastName: 'Петров' });
   console.log(keys) // выведет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  let arr = Object.keys(obj);
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toUpperCase();
  }
  return(arr);
}

export { forEach, map, reduce, upperProps };