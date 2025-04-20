//All async functions have following interface
type Callback = (error: Error | undefined, data: any) => void;
type AsyncFunc = (callback: Callback) => void;
const async1 = (callback:Callback) => {
  callback(undefined, 1);
};

const async2 = (callback:Callback) => {
  callback(undefined, 2);
};

const async3 = (callback:Callback) => {
  callback(undefined, 3);
};

function parallel(arr:AsyncFunc[]){
  const result:number[] = []
  return function(callback:Callback,originalData:number){
    arr.forEach((a)=>{
      a((error, data)=>{
        if(error){
          callback(error,undefined)
          return
        }else{
          result.push(data)
        }
      })
    })
    callback(undefined,result)
  }
}
const all = parallel([async1, async2, async3]);

all((error, data) => {
  console.log(data); // [1, 2, 3]
}, 1);
