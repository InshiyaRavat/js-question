function once<T>(func:(...arg:T[])=>T){
  let result:ReturnType<typeof func>;
  return function(...args:Parameters<typeof func>){
    if(result){
      console.log("direct reutn")
      return result
    }
    else{
      console.log("calling")
      result = func(...args)
      return result
    }
  }
}
function multiply(a:number,b:number){
  return a*b
}
const onced = once(multiply)
console.log(onced(3,4))
console.log(onced(3,4))
console.log(onced(3,4))
console.log(onced(3,4))
