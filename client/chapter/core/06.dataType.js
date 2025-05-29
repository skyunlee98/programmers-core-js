/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);


// 2. 값이 할당되지 않은 상태
let notDefined;
console.log(typeof notDefined);


// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let text = "Hello";
console.log(typeof text);


// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 3.14;
console.log(typeof number);


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt);


// 6. 참(true, yes) 또는 거짓(false, no)
let isTrue = true;
console.log(typeof isTrue);


// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
let obj = { name: "kyun", age: 28 };
console.log(typeof obj);


// 8. 고유한 식별자(unique identifier)
let uniqueId = Symbol("id");
console.log(typeof uniqueId);


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
let value1 = 10;
console.log(typeof value1);

// 2) 함수 typeof()
let value2 = 20;
console.log(typeof(value2 + 5));

// 언어 상, 오류
// null은 객체는 아님



// Object
console.log(typeof {});


// Array
console.log(typeof []);


// function
console.log(typeof function() {});


// this
console.log(typeof this);

