/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;


// Logical AND Assignment
// a &&= b;
// console.log(a);

// a = a && b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// a ||= b

// 부정 연산자
let reverseValue = !value

console.log(reverseValue);;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy = true && ' ' && [] && {thisIsFalsy:false} ;

// 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};

console.clear()

// let userId = prompt('아이디를 입력하세요')
// if (userId.toLowerCase() === 'admin'){
//   let userPassWord = prompt('비밀번호를 입력하세요')
//   if (userPassWord.toLowerCase() === 'themaster'){
//     alert('환영합니다!')
//   }else if(userPassWord === '' || userPassWord === null){
//     alert('취소되었습니다.')
//   }else{
//     alert('인증에 실패하였습니다.')
//   }
// }else if (userId === '' || userId === null){
//   alert('취소되었습니다.')
// }else{
//   alert('존재하지 않는 아이디입니다.')
// }

function logIn(){

  const userName = prompt('누구십니까?');

  // 만약에 userName이 null이면 아래 코드 실행하지마!

  // if(userName === null || userName === undefined) return
  if(!userName) return


  if(userName.toLowerCase() === 'admin'){

    const password = prompt('비밀번호는?');

    if(password.toUpperCase() === 'THEMASTER'){
      console.log('로그인 성공');
    }
    
    else if(password === null){
      console.log('취소했습니다.');
    }

    else{
      console.log('로그인 실패');
    }

  }
  else if(userName === null || userName.replace(/\s*/g,'') === ''){
    console.log('취소했습니다!');

  }
  else{
    console.log('로그인 실패');
  }
}


