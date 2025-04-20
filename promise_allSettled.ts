const all = function(arr:Array<Promise<any>>){
  const result:string[] = []
  return new Promise((resolve,reject)=>{
    arr.forEach((promise)=>{
      promise.then((msg)=>{
        result.push(msg)
        if(result.length === arr.length){
          resolve(result)
        }
      }).catch((error)=>{
        result.push(error)
        if(result.length === arr.length){
          resolve(result)
        }
      })
    })
  })
}
const promise1 = function(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("1")
    })
  })
}
const promise2 = function(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject("2")
    })
  })
}
all([promise1(),promise2()]).then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.error(error)
})
