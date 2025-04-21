const timeouts:number[] = []

const ogSetTimeout = setTimeout
type Callback<K> = (...arg:[...K[]])=>void
const mySetTimeout = <T,>(callback: Callback<T>,delay:number,...args:[...T[]]){
    const timer = ogSetTimeout(callback,delay,...args)
    timeouts.push(timer)
    return timer
}

const clearMyTimeouts = ()=>{
    for(const timer of timeouts){
        clearTimeout(timer)
    }
}

mySetTimeout(()=>console.log("hi"),1000)
mySetTimeout(()=>console.log("hi"),2000)
mySetTimeout(()=>console.log("hi"),3000)
clearMyTimeouts()
mySetTimeout(()=>console.log("hi"),3000)
