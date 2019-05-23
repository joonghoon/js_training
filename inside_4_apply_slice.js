var arr_A = [1, 2, 3];
var arr_B = arr_A.slice(0);
var arr_C = arr_A.slice();
var arr_D = arr_A.slice(1);
var arr_E = arr_A.slice(1, 2);


console.log(arr_B);
console.log(arr_C);
console.log(arr_D);
console.log(arr_E);

// slice 메서드는 인자 없이 호출 한 경우, 이 메서드를 호출한 배열을
// 복사해서 새로운 배열을 생성한다. (응용가능)
// 생성 된 배열을 해당 객체에 리턴해준다.
