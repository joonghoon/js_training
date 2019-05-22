var a = "eee";

console.log(a);

var data = 123;
console.log(data);

var test = ['haha','haha1','haha2'];
test.hehe = "eee";
console.log(test[0]);

for(var i in test){
  console.log(i + "," +test[i]);
}
console.log(test.length);

function hahaeee(){

  debugger;
}

hahaeee();

var fufu = new Array();
console.log(fufu);

// 함수표현식
var add = function(x, y) {

  return x + y;
}
// 함수변수 add는 함수의 참ㅈ값을 가지므로 plus 에도 그 값을 그대로 할당가능
var plus = add;

// 하단의 변수에 익명함수를 넣지않고, 함수명칭을 선언할 경우는, testFnc() 는 정상 접근이 가능하지만,
// test1111() 는 내부적으로 접근이 불가능하다. testFnc 를 실행하면 js엔진에 의해 testFnc 명칭을 익명함수에 부여한다.
var testFnc = function test1111(x,y){
  console.log(x+y);
}

testFnc(1,2);

var ffff = function(){
  return 43;
}

(function(){
  console.log("erewrewrw");
})

function fncPropertyTest(){
  console.log("fncPropertyTest");
}

fncPropertyTest.ttt = "ee";

fncPropertyTest();

console.log(fncPropertyTest.ttt);


function test1(){
  return function(){
    console.log("푸푸");
  }
}

test1();

var test2 = function(){
  return function(){
    console.log("헤헤");
  }
}

var test2_var = test2();
test2_var();

function test3(){
  console.log("프로퍼티속성보기");
}

console.dir(test3.name);

test3.prototype.aaa = ";r;rerwe";
var test3_3 = new test3();
console.log(test3_3.aaa);

// 즉시실행함수
(function(aa){
  function aaaa(aa1){
      console.log(aa1);
  }
  aaaa(aa);
})('haha');


// 함수 스코프 내부
function parent(){
  var a = 100;
  var child = function(){
    console.log('gewgew');
  }
  return child;
}
parent();
var inner = parent();
inner();



var self = function(){
  console.log('a');
  return function(){
    console.log('b');
  }
}
self();
self();
self = self();
self();


var myTest = {

  aaaa : "HAHA",

  test : function () {
    var that = this;
    console.log(this.aaaa);

    function test_1(){

        console.log("function [test_1] " + this.aaaa);
    }

    var a = function(){
      console.log("method [a] " + this.aaaa);

      console.log("method [a] " + that.aaaa);
      that.aaaa += "haha";
      console.log("method [a] " + that.aaaa);
    }

    test_1();

    a();

    console.log(this.aaaa);
  }
}

myTest.test();
console.log(myTest.aaaa);


var Person = function(name){

  this.name = name;
  console.log(this);
}


Person.prototype.haha = "eee";
Person.prototype.ffff = function(){

  console.log("eeee");
}


var foooo = new Person('foo');
console.log(foooo.name);
foooo.ffff();

console.log("------------");
function Test(){
  console.log(!(this instanceof Test));
  if(!(this instanceof Test))
    return new Test();

  this.GAGA = "rrr";
}vewqveqwveqwveqwveqw


var a = new Test();
var b = Test();

console.log(a.GAGA);
console.log(b.GAGA);
