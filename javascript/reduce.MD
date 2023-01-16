## Reduce

>```js
const array = [
    {
      "userId": 2,
      "firstName": "AAAAA",
      "price": 1234,
      el:[1,2,3]
    },
    {
      "userId": 2,
      "firstName": "BBBB",
      "price": 1234,
      el:[1,2,3]
    },
    {
      "userId": 3,
      "firstName": "CCCCC",
      "price": 1,
      el:[1,2,3]
    },
    {
      "userId": 3,
      "firstName": "DDDDD",
      "price": 2,
      el:[1,2,3]
    },
   {
      "userId": 3,
      "firstName": "eee",
      "price": 2,
       el:[1,2,3]
   },
    {
      "userId": 4,
      "firstName": "EEEEE",
      "price": 5,
       el:[1,2,3]
    }
  ]
const res = array.reduce((finalArr, current)  => {
  let obj = finalArr.find((item) => item.userId === current.userId); 
  if(obj){
    // 같은 키를 가진 객체가 있다면 true 이므로 발견한 
    // 첫 번째 객체 바로 리턴
    // reduce 속성 활용해 같은 속성 값 누적 가능
       obj.price = obj.price + current.price
 return finalArr
  } 
  // 없다면 undefined이므로 false가 되고 이전 것과 합쳐주기
    return finalArr.concat([current])
}, [])
// console.log('res->', res)
```
- 특정 키와 일치하는 객체를 찾아 있으면 그대로 리턴, 일치하지 않을 경우 최종 배열에 합쳐버리기


#### 2. 중복된 키 제거하고 객체 내 배열 합치기

>```js
const reducedArr = array.reduce((obj, item)=>{  
// 객체 내 userId가 존재하면 객체 el 값을 item의 el과 합침 
  obj[item.userId] ? obj[item.userId].el.push(...item.el) :
  obj[item.userId] = item
  // 존재하지 않을 시 userId 키와 item 값의 객체 할당
  return obj
},{})
// console.log('reducedArr->', reducedArr)
console.log('reducedArr->', Object.values(reducedArr))


#### 3. map으로 중복 제거
```js
const unique = [...array.reduce((map, obj)=> 
map.set(obj.userId, obj), new Map()).values()]
console.log('reducedArr->', unique)
```