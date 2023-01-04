## 시간 복잡도
- 알고리즘이 얼마나 빠르게 실행하는지를 측정하는 것
- 입력이 커질 수록 알고리즘 실행 속도가 어떻게 바뀌는지 분석

## 공간 복잡도
- 사용되는 메모리, 입력되는 것을 제외하고 알고리즘 자체가 필요하는 공간을 의미
- 불리언, 숫자, undifined, null은 자바스크립트에서 모두 불편 공간
- 문자열은 O(N)의 공간이 필요하다
- 레퍼란스 타입, 배열과 객체도 마찬가지로 O(N)으로 여기서 n은 배열의 길이 객체의 키 갯수

```js
function sum(arr) { 
    let total = 0
    for (let i = 1;i <= arr.length; i++){
        total+= arr[i]
    } 
    return total;
}
```
여기서 공간을 차지할 요소는 우선 
1. total 변수
2. i=0 배정
배열에 크기와 상관없이 n이 커져도 크기가 차지하는 공간과는 무관, 따라서 오직 상수, O(1) 공간 복잡도를 가진다


```js
function double(arr) {
    let newArr = []; 
    for (let i = 1;i <= arr.length; i++){
        newArr.push(2* arr[i])
    } 
    return newArr;
}
 ```

- 그러나 위 함수는 차지하는 공간은 배열의 크기와 비례하여 커지게 되기에 O(N) 공간 복잡도를 가진다

## 로그
![](https://velog.velcdn.com/images/minj9_6/post/fbb8ae19-8e10-46b6-b99a-6eb5ceb685fc/image.png)

![](https://velog.velcdn.com/images/minj9_6/post/851ee31b-d281-475b-bc44-66d8172269c8/image.png)
- 로그함수는 지수함수의 역함이다. 로그함수와 지수함수는 짝
log2(8) = 3, 이는 2의 몇승 값이 8이되는지 묻는 것, 2진 로그도 10진로그도 존재
- 로그를 대략 계산하기 위해 그 숫자가 1보다 작아지기 전에 2로 나눠지는 횟수를 구해야한다.
- 어떤 알고리즘들은 로그 시간 복잡도를 갖고 있다
	- 예를 들어 탐색, 정렬 알고리즘, 재귀(시간이 아닌 공간) 등

