// 생성자 함수 생성
function Ferson(name, age, gender) {

  this.name = name;
  this.age = age;
  this.gender = gender;

  debugger;
}

//빈 객체 생성
var haha = {};

// 메서드 호출
Ferson.apply(haha, ['중훈', 28, 'man']);
console.dir(haha);

// - 첫 매개변수를 Ferson 함수에서 this로 바인딩
// - 두번째 매개변수는 함수의 매개변수 값을 배열로 호출
// Ferson('중훈', 28, 'man') 를 호출하고, this 값을 haha에 바인딩하는 것과 동일
