function debounce<T>(func: (...arg:[...T[]])=>void,delay:number){
    let timer:number;
    let argumentss:T[];
        function debounced (...args: [...T[]]){
            argumentss = args
            clearTimeout(timer);
            timer = setTimeout(()=>{
                func(...args)
            },delay)
        }
        function cancel(){
            clearTimeout(timer)
        }
        function flush(){
            clearTimeout(timer);
            func(...argumentss);
        }

        debounced.cancel = cancel
        debounced.flush = flush

        return debounced;
    
}

const debounced = debounce(() => console.log("debounced"), 500);
debounced();
debounced.cancel(); //cancel the invocation.
// no log displayed in console.

debounced();
debounced.flush(); //delayed function invoked immediately.
// log will be displayed in console immediately.
