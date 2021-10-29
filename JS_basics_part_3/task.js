// 1. Write a JavaScript function to get the last element of an array

function getLast(arr){
    let arr1 = arr[arr.length - 1]
    console.log(arr1);
}


getLast([6,8,4,32,5])

//2. Write a simple JavaScript program to join all elements of the following array into a string


function joinArray(arr){
    arr1 = arr.join(' ')
    console.log(arr1);
}

joinArray(['This', 'is', 'a', 'new', 'string'])


// 3. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays and save them to third array

function sumArray(arr1, arr2){
    let newArr=[]
    for (elem in arr1){
        let x = arr1[elem]+arr2[elem]
        newArr.push(x)
    } console.log(newArr);
}

sumArray([4,6,3], [9,6,3])


// 4. Write a JavaScript program to calculate the area and perimeter of a rectangle. Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();

let rect = {
    width:100,
    height:50,
    getArea(){
        return this.width*this.height
    },
    getPerimerer(){
        return 2*(this.width+this.height)
    }
}

console.log(rect.getArea());
console.log(rect.getPerimerer());
