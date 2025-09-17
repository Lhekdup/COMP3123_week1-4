async function getData() {
    
}

//console.log(getData());

//Promise
async function myAsyncFunction(a) {
    const myPromise = new Promise((resolve, reject) => {
        if(a > 50){
            const result = {
                status: true,
                data: 'Some data',
                info: 'Additional info'
            }
            //resolve('Promise resolved successfully!');
            resolve(result);
        }else {
            reject('Promise rejected!');
        }
    })

    return myPromise;
}

// myAsyncFuntion(100).then((message) => {
//     console.log(message);
// }, (error) => {
//     console.log(error);
// });

async function callPromise(){
    try{
        var res = await myAsyncFunction(100)
        console.log(res);
        res = await myAsyncFunction(10)
        console.log(res);
        res = await myAsyncFunction(80)
        console.log(res);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Finally excuted");
    }
}

callPromise()