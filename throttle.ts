function throttle<T>(func: (...arg: [...T[]])=>void, delay:number){
    let timer:number|null = null;
    let canExecute = true
    return function(...args: [...T[]]){
        if(timer === null && canExecute === true){
            canExecute = false;
            timer = setTimeout(()=>{
                timer = null
                canExecute = true
            },delay)
            func(...args);
        }
    }
}
function myFn(arg: number) {
  console.log(arg);
}

const throttled = throttle(myFn, 5);
throttled(1); //1
throttled(2); //ignored
throttled(3); //ignored
throttled(4); //ignored
// assume now throttling phase is finished.
// we have to call function with argument 4 because it was the last function call during throttling phase.
