//All async functions have following interface
type Callback = (error: Error | undefined, data: any) => void;
type AsyncFunc = (callback: Callback, data: any) => void;
function sequence(arr:AsyncFunc[]){
  return function(callback:Callback, originalData:number){
    let currentIndex = 0;
    function fn(data:number){
      if(currentIndex < arr.length){
        arr[currentIndex]((error, newData)=>{
          if(error){
            callback(error, undefined)
          }else{
            currentIndex++
            fn(newData)
          }
        },data)
      }else{
        callback(undefined, data)
        return
      }
    }
    fn(originalData)
  }
}
const asyncTimes2 = (callback:Callback, num:number) => {
  setTimeout(() => callback(undefined, num * 2), 100);
};

const asyncTimes4 = sequence([asyncTimes2, asyncTimes2]);

asyncTimes4((error, data) => {
  console.log(data); // 4
}, 1);
