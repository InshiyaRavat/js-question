function debounce<T>(func:(...arg:[...T[]])=>void,delay:number){
    let timer:number;
    return function(...args:[...T[]]){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func(...args)
        },delay
        )
    }
}
const log = (msg: string) => console.log("Debounced:"+ msg);
const debouncedLog = debounce(log, 1000);
debouncedLog("one");
debouncedLog("two");
debouncedLog("three");
debouncedLog("four");
debouncedLog("five");
