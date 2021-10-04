---
title:  "CSS요소6 - transform"
excerpt: "transform"

categories:
  - CSS
tags:
  - [CSS]

toc: true
toc_sticky: true
 
date: 2021-10-04
last_modified_at: 2021-10-04
---

# transform 
회전, 크기 조절, 기울이기, 이동효과 등을 부여할 수 있다

- 직교좌표를 사용한다 (0,0)이 왼쪽 상단
- **원본의 자리를 유지한다**
- 값으로 함수를 사용 (`matrix`, `translate`, `scale`, `rotate`, `skew`)
- 여러개의 함수를 함께 사용하면 **오른쪽**부터 적용한다
- (0,0) (왼쪽 위) - x축은 오른쪽으로 진행, y축은 이래쪽으로 진행 

## ▶️ scale
`scale()`은 2d를 기준으로 크기를 변경
```css
.box {
  transform: scale(sx);
  transform: scale(sx, sy);
}
```
- 값으로 한개 또는 두개(sx), (sx, sy)
- 값을 입력하면 곱해져서 적용된다
- `width: 100px`에 `scale(1.5)` → `width: 200px`
- `scaleX()`, `scaleY()`, `scaleZ()`
- 3차원적으로 적용하기 위해서는 `scale3d(x, y, z)`를 사용한다

## ▶️ rotate
요소를 회전시키는 회전하는 함수
```css
.box {
  transform: rotate(value);
}
```
- 값을 하나만 받는다
- deg(일반적으로 사용하는 각도)-  `transform: rotate(360deg)` (한바퀴)
- grad(1회전이 400) - `transform: rotate(400grad)` (한바퀴)
- rad(π*rad = 180도) - `transform: rotate(6.2832rad)` (한바퀴)
- turn(1은 한바퀴) - `transform: rotate(1turn)` (한바퀴)
- 양수는 오른쪽으로 회전, 음수는 왼쪽으로 회전
- `rotateX()`, `rotateY()`, `rotateZ()`
- 각 축을 기준으로 회전한다
- `rotate3d(x, y, z, a)` -> 각 값은 0과 1 사이값 / a는 각도를 나타낸다

## ▶️ translate
요소를 이동하게함
```css
.box {
    transform: translate(x, y);
    transform: translateX(x);
    transform: translateY(y);
}
```
- 값으로 한개(x, 0) 또는 두개(x, y)
- 값으로 px이나 %을 사용한다
- %를 사용할 경우 요소를 기준으로 이동한다
- `translateX`(x축만 이동), `translateY`(y축만 이동), `translateZ`(z축만 이동)
- 3차원적으로 이동하기 위해서는 `translate3d(tx, ty, tz)` → 각 값에 px단위로 지정

## ▶️ skew
기울이는 함수
```css
.box {
  transform: skew(ax);
  transform: skew(ax, ay);
}
```
- 값을 하나만 사용할 경우 **x축만 적용된다**
- 값으로 각도(deg)를 입력
- 90도를 기울이면 보여지지 않음
- z축이 없다

## ▶️ transform-origin
(별도의 프로퍼티) 기준점을 변경한다
```css
.box {
  transform-origin: center;
}
```
- 기본값은 center (50% 50% 0)
- top, buttom, left, right 사용가능
- px, % 사용가능

## ▶️ perspective
(별도의 프로퍼티)요소에 원근감을 준다
```css
.parent {
  perspective: 500px;
}
```
- **부모요소에 적용한다**
- 개별적인 투영점을 설정할때는 **각 값**에 `transform: perspective(px)`을 준다
- 개별적으로 줄때 맨 앞에 위치한다 (오른쪽에서부터 계산해서 그런것 같다)
- `transform-style: preserve-3d`는 부모의 perspective를 자식까지도 전달해준다
- <u>IE는 지원하지 않는다</u>

## ▶️ perspective-origin
어느 방향에서 보는지를 지정
```css
.box {
  perspective-origin: 50% 50%;
}
```
- **부모요소에 적용한다**
- 키워드를 조합해서 사용가능 (top, buttom, left, right)
- %로도 입력가능


