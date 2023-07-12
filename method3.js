 // input n = 5 => 5 elemanlı dizi yap ama toplamları 0 olsun.

 const solution = (arr) => {
    let newArray = [];
    if(arr % 2 === 1){
        newArray.push(0)        
    }
    for(let i = 1; i < arr / 2 ; i++) {
        newArray.push(i)
        newArray.unshift(-i)
    }
    return newArray;
}

console.log(solution(5))