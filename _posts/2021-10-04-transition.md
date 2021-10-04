---
title:  "CSS요소7 - transition, animation"
excerpt: "transition과 animation"

categories:
  - CSS
tags:
  - [CSS]

toc: true
toc_sticky: true
 
date: 2021-10-04
last_modified_at: 2021-10-04
---

# ✏️ transition
변환이 되는 요소의 과정을 단축속성으로 지정한다
```css
.box {
  transition: all 1s ease 2s;
}
```
- `property`, `duration`, `timing-function`, `delay`
- 시간 값(s)이 한개만 있으면 무조건 duration으로 동작
- 시간 값(s)이 두개이면 duration, delay 순서로 위치

## ▶️ transition 속성의 기본값

|프로퍼티|값|
|:---:|:---:|
| `transition-delay` | 0s |
| `transition-duration` | 0s |
| `transition-property` | all |
| `transition-timing-function` | ease |

## ▶️ transition-property
변환되는 css의 특정 요소를 지정한다
```css
.box {
  transition-property: none;
  transition-property: all;
  transition-property: element (margin,color...);
}
```
- 모든 요소를 지정하려면 `all`을 사용하면 된다
- property를 여러개 지정하는 경우 `,`로 구분한다
- `::before`, `::after`에도 적용이 가능하다

## ▶️ transition-duration
변환하는데 걸리는 시간을 얼마로 할지 지정한다
```css
.box {
  transition-duration: 1s;
}
```
- ms단위로도 지정할 수 있다(1000ms = 1s)
- property를 여러개 따로 지정해줬을 경우에는 duration을 각각 `,`로 구분해서 명시한다

## ▶️ transition-delay
변환하는 시점을 일정 시간동안 지연시킨다
```css 
.box {
  transition-delay: 1s;
}
```
- delay를 이용하면 여러개의 요소가 있을때 순차적으로 움직을 수 있다

## ▶️ transition-timing-function
시간의 흐름에 따라 어떤 방식으로 변환이 되는지를 지정한다
```css 
.box {
  transition-timing-function: 
}
```

### → timing function value

|function|설명|
|:---:|:---|
| `ease` | 느리게 시작해 빨라지다가 다시 느리게 |
| `ease-in` | 느리게 시작하고 빨라짐 |
| `ease-out` | 빠른 속도로 시작해 느려짐 |
| `ease-in-out` | ease와 동일(ease는 시작속도가 조금 더 빠름) |
| `linear` | 처음부터 끝까지 일정(선형) |
| `cubic-bezier` | (x, y, x', y') 네개의 포인트로 function의 그래프를 그린다|


> cubic-bezier를 이용해서 커스텀하고 코드를 제공해주는 사이트
https://matthewlein.com/tools/ceaser

<br>
---
<br>


# ✏️ animation
단축속성으로 전환시키는 과정을 지정할 수 있다

- 특정 액션을 하지 않아도 동작하게 할 수 있다
- keyframe을 사용해서 세부적으로 애니메이션 과정을 지정해 줄 수 있다

```css
/* 단축속성사용 */
.box {
  animation: 3s ease 1s infinitie reverse forwards running test;
}
```
- `duration`, `function`, `delay`, `count`, `direction`, `mode`, `state`, `name`
- 시간값이 두개 지정되면 앞의 값은 `duration`, 뒤의 값은 `delay`가 지정된다



## ▶️ animation 속성의 기본값

|프로퍼티|값|
|:---|:---:|
| `animation-name` | none |
| `animation-duration` | 0s |
| `animation-timing-function` | ease |
| `animation-delay` | 0s |
| `animation-iteration-count` | 1 |
| `animation-direction` | normal |
| `animation-property` | all |
| `animation-fill-mode` | none |
| `animation-play-state` | running |

## ▶️ @ketframes
여러가지의 애니메이션을 지정해놓을 수 있다 이후 animation을 이용해서 사용한다

keyframe을 세부적으로 지정하는 방법에는 두가지가 있다
1. **from, to**: 처음과 끝을 지정한다
2. **%**: %별로 구간을 나눠서 지정이 가능하다

두 방법 모두 `{}`로 구간을 분리해서 css를 개별 적용한다
```css
/* from - to 이용 */
@keyframes 이름 {
  from{
    내용
  }
  to {
    내용
  }
}

/* % 이용 */
@keyframes 이름 {
  0% { 내용 }
  25% { 내용 }
  50% { 내용 }
  75% { 내용 }
  100% { 내용 }
}
```

- animation에 이름을 입력하고 다른 속성을 입력해서 사용 (`alternate` 속성을 주면 다시 되돌아옴)
- `keyframes`의 이름은 `animation-name`의 값이 된다
- `keyframes` 네이밍 규칙
  - 대소문자를 구분한다
  - 특수문자는 `-`,`_`만 사용가능
  - 글로벌 값으로 지정해서는 안된다(`initial`, `inherit`, `revert`, `unset`...)

<br>

## ▶️ animation-name
미리 작성한 keyframe중 어떤 keyframe을 사용할지 명시한다
```css
.box {
  animation-name: keyframes-name; 
}
```
- 기본값은 `none`

## ▶️ animation-duration
애니메이션이 동작하는 시간을 명시한다(한 사이클을 완료하는데 걸리는 시간)
```css
.box {
  animation-duration: 1s
  /* 1초동안 애니메이션의 한 사이클이 1초 */
}
```
- ms, s단위를 사용한다
- 음수 사용 불가

## ▶️ animation-delay
애니메이션을 시작하기 전에 지연시킬 시간을 지정
```css
.box {
  animation-delay: 3s
  /* 3초 이후에 애니메이션이 동작한다 */
}
```
- ms, s단위 사용
- 음수값을 사용할 경우 곧바로 재생이 되는 대신 음수값만큼의 도중에서 시작된다

## ▶️ animation-timing-function
동작하는 방식을 지정(시간에 흐름에 따른 변화 속도)
```css
.box {
  animation-timing-function: linear;
  /* 일정한 속도로 애니메이션을 진행 */
}
```
- `transition`의 `timing-function`과 동일하다
- `ease`, `ease-in`, `ease-out`, `ease-in-out`, `linear`, `cubic-bezier`
- `ease`: 중간까지 속도 증가, 이후 느려짐 / `cubic-bezier(0.25, 0.1, 0.25, 1.0)`과 동일
- `ease-in`: 천천히 증가하면서 시작됨 / `cubic-bezier(0.42, 0, 1.0, 1.0)`과 동일
- `ease-out`: 빠르게 시작해 속도가 줄어든다 / `cubic-bezier(0, 0, 0.58, 1.0)`과 동일
- `ease-in-out`:천천히 증가하면서 시작했다가 속도가 즐어든다 /  `cubic-bezier(0, 0, 0.58, 1.0)`과 동일
- `linear`: 동일한 속도 유지 / `cubic-bezier(0.0, 0.0, 1.0, 1.0)`과 동일
- `cubic-bezier`: 값(x, y, x', y')을 지정하는대로 속도의 증가 및 변환이 이루어진다

## ▶️ animation-iteration-count
반복하는 횟수를 지정한다
```css
.box {
  animation-iteration-count: infinite;
}
```
- 값으로 숫자가 들어가거나 `infinite`(무한반복)이 들어갈 수 있음
- 0.5도 가능 (50% 재생)

## ▶️ animation-direction
애니메이션을 반대로 재생할 수 있음
```css
.box {
  animation-direction: reverse;
}
```
- `normal`: 원래대로 진행(기본값)
- `reverse`: 반대로 진행 
- `alternate`: 정방향, 역방향으로 반복해서 진행
- `alternate-reverse`: 역방향, 정방향 반복해서 진행

## ▶️ animation-play-state
재생 유무를 설정한다(일시정지)
```css
.box {
  animation-play-state: running;
  }
.box:hover {
  animation-play-state: paused;
}
/* 기존에 애니메이션이 동작하다가 마우스를 올리면 중지됨 */
```
- `running`: 재생되고 있는 상태(기본값)
- `paused`: 일시정지

## ▶️ animation-fill-mode
애니메이션이 실행하기 전과 후의 css를 적용하는지의 경우를 지정한다
```css
.box {
  color: skyblue;
  animation-fill-mode: forwards;
  animation: colorChange 1s;
  /* colorChange를 1초 사이클로 동작한다 */
}
@keyframes colorChange {
  from {
    color: yellow;
  }
  to {
    color: red;
  }
}
/* 애니메이션이 끝났음에도 color는 red이다 */
/* fill-mode가 backwards라면 시작할때부터 yellow의 color값을 가진다 */
```
- `none`: 재생될때만 keyframes에 있는 스타일 적용(기본값)
- `forwards`: 끝난 모습의 스타일을 유지
- `backwards`: 지연시간동안에도 스타일을 적용
- `both`: `forwards`, `backwards` 둘 다 적용






