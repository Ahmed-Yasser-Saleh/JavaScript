function printForecast(arr) {
    let output = ""
    for (let i = 0; i < arr.length; i++) {
        output += `${arr[i]}°c in day${i}`
        if (i === arr.length - 1)
            continue;
        output += `...`
    }
    console.log(output)
}

let arr = [17, 21, 23, 0, 5, 6];
printForecast(arr)