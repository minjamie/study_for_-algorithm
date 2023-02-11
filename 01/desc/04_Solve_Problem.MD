![](https://velog.velcdn.com/images/minj9_6/post/08e64639-6ed9-4ca9-b33c-119d2c96d786/image.png)

- 알고리즘과 문제 해결 패턴 또 전략, 계획, 접근 방식 등에 관하여

## 문제 해결을 위한 두 가지 범주 나누기

#### 첫째, 해결법을 모르는 문제를 풀기 위한 기본 접근 방식
-  즉, 작업을 쉽게 수행할 수 있게 해주는 단계들

#### 두 번째, 문제들을 해결할 만한 특정 상황에 응용할 수 있는 구체적인 청사진이나 원형, 전략을 수행할 수 있게 해주는 단계

## 문제 해결의 목표
- 간단히 알고리즘이 무엇인지 정의하는 것
- 알고리즘을 해결하기 위한 계획 분할
- 비교 및 대조를 비롯한 빈도 카운터, 투 포인터 문제 등을 수립

## 알고리즘이란

- 알고리즘은 특정 작업을 달성하기 위한 과정이나 일련의 단계를 의미
- 알고리즘은 문제를 해결하기 위해 수행해야 하는 일련의 수학적 단계

### 알고리즘을 알아야하는 이유
- 프로그래밍에서 수행하는 거의 모든 작업에는 일종의 알고리즘이 포함되므로 문제를 해결할 방법을 마련할 수 있도록 결정하기에

#### 알고리즘 실력 향상
1> 첫째로 문제 해결을 위한 계획을 수립
- 이는 기술적인 문제면서도 아니기도 하지만 문제에 접근하는 방법, 문제를 세분화하기 위한 전략 즉, 방향을 잡기 위한 몇 가지 단계.

2> 다음은 일반적인 문제 해결 패턴을 파악
- 많은 알고리즘들을 일종의 여러 범주로 나눌 수 있음
- 일부 범주를 식별할 수 있는 경우 코드에 수행할 수 있는 몇 가지 단계를 통해 얻을 수 있는 알고리즘이을 해결하는 데 도움이 될 몇 가지 조합법 확보 가능

## 문제 해결법
#### 1. 문제 이해
- 문제를 이해하고, 구체적인 예시를 알아보고, 문제를 세분화하고, 문제를 해결하고 단순화하고, 문제를 복습하고 재구성
1. 자신의 단어로 문제를 재 해석하고 이해해보는가?
2. 문제가 어떤 입력 값을 담고있는가?
3. 문제에 대한 해결책으로 어떤 출력 값이 나와야하는가?
4. 입력 값이 출력값을 결정할 수 있는가?(=문제를 해결할 충분한 정보가 주어졌는가?)
5. 문제의 일부인 데이터의 중요한 부분에 어떻게 라벨을 지정할 수 있는가 (= 문제에서 중요한 것은 무엇인지 파악)

#### 2. 구체적 예제들
- 문제에 어떤 입력값을 받아서 어떤 결과를 산출할 건지 예시를 3-4개 들어보기
- 여기에 더불어 예외에 대해서 생각해보기, 가령 인자는 하나를 받지만 입력 값이 여러개라면 null이거나 empty면 어떤 리턴값을 줄지 등

```js
charCount("aaa") // {a:4, b:0, c:0}
charCount("hello") //{ h: 1, e: 1, l: 2, o: 1 }
charCount("Your Pin number is 1234!")
/**
{
  '1': 1,
  '2': 1,
  '3': 1,
  '4': 1,
  Y: 1,
  o: 1,
  u: 2,
  r: 2,
  P: 1,
  i: 2,
  n: 2,
  m: 1,
  b: 1,
  e: 1,
  s: 1
}**/
```
#### 3. 세부 분석하기
- 함수를 정의하고 세부적으로 어떤 단계로 전개될지 주석으로 적어보기
```js
function charCount(str){
  // 문제 세분화하기
  // 1.마지막 반환할 객체 만들어주고
  /*
  2.문자열에 루프 적용 
  - for each 문자열 
if 문자가 숫자/문자이며 객체에 키에 있으면 카운트 더해주고
if 문자가 숫자/문자이며 객체의 키에 없으면 키에 추가해주고 값 1로 설정
if 문자 아무것도 없다면(공백, 마침표 등) 아무것도하지 않기
  */
  // 3.최종 객체 리턴하기
}
```

#### 4. 해결 또는 단순화
- 해결 할 수 없다면 더 단순한 문제를 해결해보기
	- 수행하려는 부분에서 어려운 부분을 찾기
    - 잠시 무시하기
    - 단순한 해결책을 작성하기
    - 다시 어려운 부분으로 통합해보기
```js
function charCount(str){
  // 문제 세분화하기
  // 1.마지막 반환할 객체 만들어주고
  let result = {}
  /*
  2.문자열에 루프 적용 
// if 문자 아무것도 없다면(공백, 마침표 등) 아무것도하지 않기   
  */
 
  for(let idx=0; idx<str.length; idx++){
    let char=str[idx].toLowerCase()
    if(result[char]>0){
//if 문자가 숫자/문자이며 객체의 키에 없으면 키에 추가해주고 값 1로 설정
      result[char]++
    } else {
// if 문자가 숫자/문자이며 객체에 키에 있으면 카운트 더해주고
      result[char] =1
    }
  }  
  return result
}

// charCount("aaa") // {a:4, b:0, c:0}
charCount("hello") 
charCount("Your Pin number is 1234!")
```
#### 5. 되돌아 보기와 리팩터링
- 어떻게 더 나은 성능을 이끌어낼 수 있는지
- 주로 시간 및 공간 복잡도로 분석

> 리팩토링 질문들
- 결과를 확인할 수 있는지
- 다르게 결과를 이끌어 낼 수 있을지
- 한누에 보고 이해가능한지
- 다른 문제에 대해서도 이러한 방법과 결과를 사용할 수 있는지
- 다른 리팩터링 방식에 대해 생각해보았는지
- 다른 사람들은 어떻게 문제를 해결했는지

```js
function charCount(str){
  let result = {}
// 1. for of로 개선
	//  for(let idx=0; idx<str.length; idx++){ 
	//  let char=str[idx].toLowerCase();
  for(let char of str){
// 4. 문자나 숫자인 경우만 소문자로 바꾸도록 위치 조정하기    
    // let char = char.toLowerCase();
//    if(/[a-z0-9]/.test(char)){
     	// 3. 정규표현식을 다른 방식으로 대체해보기 - ex) charAt
        if(isAlphaNumeric(char)){
      let char = char.toLowerCase();
      result[char] =++result[char] || 1
      // 2. if else문 truthy로 단순화하기 
      /*if(result[char]>0){
        result[char]++;
      } else {
        result[char] = 1
      }
      */
    }
  }
  return result
}


function isAlphaNumeric(char){
  let code = char.charCodeAt(0)
  if(
    !(code>47 && code < 58) &&
    !(code>64 && code < 91) &
    !(code>96 && code < 123)
     ){
     return false
     } 
  return true
}
```

---

```js
function charCount(str){
  // 문제 세분화하기
  // 1.마지막 반환할 객체 만들어주고
  let result = {}
  /*
  2.문자열에 루프 적용 
// if 문자 아무것도 없다면(공백, 마침표 등) 아무것도하지 않기   
  */
 
  for(let idx=0; idx<str.length; idx++){
    let char=str[idx].toLowerCase()
    if(result[char]>0){
//if 문자가 숫자/문자이며 객체의 키에 없으면 키에 추가해주고 값 1로 설정
      result[char]++
    } else {
// if 문자가 숫자/문자이며 객체에 키에 있으면 카운트 더해주고
      result[char] =1
    }
  }  
  return result
}

// charCount("aaa") // {a:4, b:0, c:0}
charCount("hello") 


charCount("Your Pin number is 1234!")
```


#### 번외) 내가 풀어폰 해결책 
```js
function charCount(str){
  // 문제 세분화하기

// 1.마지막 반환할 객체 만들어주고
  let result = {}
  /*
  2.문자열에 루프 적용 
  - for each 문자열 
if 문자가 숫자/문자이며 객체에 키에 있으면 카운트 더해주고
if 문자가 숫자/문자이며 객체의 키에 없으면 키에 추가해주고 값 1로 설정
if 문자 아무것도 없다면(공백, 마침표 등) 아무것도하지 않기
  */
  const specialChars =
    /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  
  for(let char of str.toLowerCase().replace(/ /g,'')){
    if(
      char 
      &&
  !specialChars.test(char)
       &&
       !result.hasOwnProperty(char)
      ){
      result[char]=+1
} else if (
    char 
      &&
  !specialChars.test(char)
       &&
       result.hasOwnProperty(char)
){
  result[char]++
}
  }
  // 3.최종 객체 리턴하기
  return result
}
```


#### 요약
>1. 문제를 확실하게 이해 
2. 구체적인 예시 제시하기    
3. 문제 세분화하기 
4. 문제를 단순화해서 해결하기  
5. 되돌아보고 리팩토링하여 분석하기   


