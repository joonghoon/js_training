
// example 1
function Test(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;

  return {name : 'name', age : "28", gender : "man"};
}

var ttt = new Test('이름', '25', 'woman');
console.log(ttt);
console.log(ttt.name);

// new 연산자로 생성자 함수를 호출해서 새로운 객체를 생성하더라도,
// 리턴값에서 명시적으로 넘긴 객체나, 배열이 리턴된다.
// 실제 this 객체에 선언된 값도 변경된다.



// example 2
function Tests(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;

  return 100;
}


var ttt = new Tests('이름', '25', 'woman');
console.log(ttt);
console.log(ttt.name);

// 생성자 함수에서 리턴값으로 넘긴 값이 객체가 아닌경우는
// 리턴값을 무시하고, this에 바인딩 된 값을 리턴한다.
