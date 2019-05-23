function innerFunction() {

  console.dir(arguments);

  // arguments.shift();

  // arguments 객체를 배열로 변환함
  var arar = Array.prototype.slice.apply(arguments);
  console.dir(arar);

}

// 하단 내역 참조
innerFunction(1,2,3);

/*

[ 프로퍼티가 Object - Arguments 가 객체이므로 Object ]

Arguments(3)
0: 1
1: 2
2: 3
callee: ƒ innerFunction()
length: 3
Symbol(Symbol.iterator): ƒ values()
__proto__: Object


[ 프로퍼티가 Array ]
Array 타입으로 변경되고, 배열로 인식 됨

Array(3)
0: 1
1: 2
2: 3
length: 3
__proto__: Array(0


  */
