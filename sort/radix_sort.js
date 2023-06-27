function getDigit(num, pos){
    return Math.floor((Math.abs(num) / Math.pow(10, pos))) % 10
}

function digitCount(num) {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr){
    if(arr.length === 0) return 0
    let mostDigits = 0
    for(let i = 0; i < arr.length; i++){
        const count =  digitCount(arr[i])
        if(mostDigits < count){
            mostDigits = count
        }
    }
    return mostDigits
}

function radixSort(arr){
    const most = mostDigits(arr)
    let newArr = [...arr]
    for(let k = 0; k < most; k ++)
    {
        let bucket = Array.from({length: 10}, () => [])
        for(let i = 0; i < newArr.length; i++){
            let el = newArr[i]
            let digit = getDigit(el, k)
            bucket[digit].push(newArr[i])
        }
        // console.log(bucket)
        // newArr = bucket.reduce((x, aggr)=>{return x.concat(aggr)}, [])
        newArr = [].concat(...bucket)
        // console.log(newArr)
    }
    return newArr
}
console.log(radixSort([123,1,11,1111]))