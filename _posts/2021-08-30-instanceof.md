---
title:  "instanceof"
excerpt: "typeof와 instanceof"

categories:
  - Method
tags:
  - [JavaScript, Method]

toc: true
toc_sticky: true
 
date: 2021-08-30
last_modified_at: 2021-08-30
---


개인 프로젝트(car_management)를 진행하면서 웹페이지에서 check박스를 클릭해 db의 값을 수정하는 것이 목표였다. 프론트에서 데이터를 넘겨줬을때 백에서 request.body에 checkbox에서 지정한 name으로 값이 넘어오는 것을 알게 되었다.   
<br>
<u>문제는 여러개를 선택했을때는 배열값으로 넘어오고 한개를 선택했을때는 문자열값으로 데이터가 전달된다는 것이었다.</u>   
<br>
update를 진행하려면 mongose를 이용해 id값을 입력하고 update하려는 값을 인자로 전달해주어야했기 때문에 어떻게 해야 수정하려는 값이 한개일 때 혹은 여러개일 때 어떻게 처리할지 고민하였다.

처음 생각한 방법은 다음과 같다.  
```javascript
// 전달된 값의 타입이 object일때
if(typeof target === "object") {
    // target의 길이만큼 반복
    for (let i = 0; i < target.length; i++) {   
        // DB update
    }
} else {
    // DB update
}
```

하지만 `if(typeof target === "object")` 이 부분이 작동하지 않았었다. **하지만 해당 글을 기록하면서 테스트를 해보다가 되는걸 알게되고 다시 `typeof`를 적용해보니 아주 잘 정상 작동한다...!**


어쨌든...! `instanceof`의 결과를 보자면 제대로 작동했고 다음과 같다.

```javascript
if (target instanceof Array) {
    for (let i = 0; i < target.length; i++) {
        // DB update
    };
} else {
    // DB update
}
```

<br>

## instanceof
instanceof는 `true`, `false`값을 반환 받을 수 있다.
```javascript
const obj = {}

// typeof
console.log(typeof obj)     // object

// instanceof
console.log(obj instanceof Object)      // true
console.log(obj instanceof Array)      // false
```

## MDN문서를 확인해보았을때 정확하게 말하자면 다음과 같다.

> `instanceof` 연산자는 생성자의 `prototype` 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별합니다.

<u>또한 `instanof`는 생성자의 프로퍼티를 확인하는 것이기 때문에 내가 정의한 생성자함수로도 확인이 가능하다!</u>

<br>

typeof의 문제점은 이런점이 있다.

```javascript
console.log(typeof {})     // object
console.log(typeof [])     // object
console.log(typeof null)     // object
```

객체와 배열, `null`값이 모두 `object`로 반환된다는 점이다. 이럴때 instanceof를 사용하면 좋을 것 같다!



~~조금 허무하지만 instanceof라는 메소드를 알게되서 다행이라고 생각해야겠다..~~