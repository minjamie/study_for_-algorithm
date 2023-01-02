/*

*/
// Example
// 1-n까지 모두 더하는 함수를 만들어라

// 해결 책 1
function solution1(n) {
    let total = 0;
    for (let i = 1;i <= n; i++){
        total+= i
    } 
    return total;
}
// 대략 time elapsed 141425.35490000597


// 해결 책 2
function solution1(n) {
   return n * (n+1)/2
}
// 대략 time elapsed 0.00010000000894069671
// 항상 3개의 연산 - O(1)


let t1 = performance.now()
solution1(1000000000)
let t2 = performance.now()
//  어떻게 시간을 측정할 수 있을까?

console.log(`time elapsed ${(t2 - t1) / 1000} sec`) 

//  빅오 표기법
function solution3(n) {
    console.log('up')
    for (let i = 0; i< n; i++){
        console.log(i)
    }
    for (let j= n-1; j>=0; j--){
        console.log(j)
    }
    console.log('down')
}

function solution4(n) {
    console.log('up')
    for (let i = 0; i< n; i++){
        for (let j= 0; j< n; j++){
            console.log(i,j)
        }
    }
}

function logAtLeast5(n) {
    for (let i = 0; i < Math.max(5, n); i++){
        console.log(i)
        }
}

function logAtMost5(n) {
    for (let i = 0; i < Math.min(5, n); i++){
        console.log(i)
        }
}


