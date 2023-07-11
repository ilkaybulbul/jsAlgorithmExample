// input [[4,3,2-1],[3,-2,-1,6],[5,-4,0,-1]] kaç " - " li değer vardır..

const solution = (arr) => {
    let newArray = [];
     for(let x = 0; x < arr.length; x++) {
        for(let y = 0; y < arr[x].length ; y++) {
            if(arr[x][y] < 0) {
                newArray.push(arr[x][y]);
            }
    }  
   
}  
return newArray.length
}

console.log(solution([[4,3,2,-1],[3,-2,-1,6],[5,-4,0,-1]]));


// çözüm 2 

const solution2 = (arr) => {
    return arr.map(row => row.filter(r => r < 0).length).reduce((a, b) => a + b, 0);
}



console.log(solution2([[4,3,2,-1],[3,-2,-1,6],[5,-4,0,-1]]));