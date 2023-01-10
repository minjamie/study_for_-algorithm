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

// ㅇ