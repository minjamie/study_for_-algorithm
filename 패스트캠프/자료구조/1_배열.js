//1차원 배열

const data = [1, 2, 3, 4, 5]

//2차원 배열


const data2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// 위 2차원 배열 9,8,7 순서로 출력

function printNumberSortByReverse(arr) {
    let res;
 arr.flat().reverse().map(num=> console.log(num))
}
printNumberSortByReverse(data2)

// 배열에 담긴 특정 문자 갯수 세기 - 소문자 s 빈도수 세기

const dataset = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]    


function countCharArr(arr, char) {
    let cnt = 0;
    char = 'a'

  const total = arr.join('')
 Array.from(total).map(
   oneChar => oneChar === char ? cnt +=1 : null
  )
  return cnt
}
countCharArr(dataset)