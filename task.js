const returnPromise = function (data) {
	return new Promise(function (resolve, reject) {
		if (isNaN(data)) {
			reject('error');
        } else if(data%2===1) {
            setTimeout(function(){
                resolve("odd");
            },1000)
        } else if (data%2===0){
            setTimeout(function(){
                reject("even");
            },2000)
        }
	});
};

const result = returnPromise(6)

result.then(function (answer) {
	console.log(answer);
})
.catch(function (err) {
	console.log(err);
});


const myFunction = function (result) {
    result.then(function(answer) {
        console.log(`Your number is ${answer}`);
    })
    .catch(function (err) {
        if(err === 'even'){
            console.log(`Your number is ${err}`);
        }
    })
}

myFunction(result)


