const race = function(arr:Array<Promise<any>>){
  return new Promise((resolve,reject)=>{
    let count = 0;
    arr.forEach((promise)=>{
      promise.then((msg)=>{
        resolve(msg)
      }).catch((error)=>{
        count++
        if(count >= arr.length){
          reject("all promise failed")
        }
      })
    })
  })
}
const promise1 = function(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject("1")
    },100)
  })
}
const promise2 = function(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("2")
    },200)
  })
}
race([promise1(),promise2()]).then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.error(error)
})
