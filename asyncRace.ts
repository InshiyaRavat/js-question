//All async functions have following interface
type Callback = (error: Error|undefined, data: any) => void;
type AsyncFunc = (callback: Callback) => void;
const async1 = (callback:Callback) => {
  setTimeout(() => callback(undefined, 1), 300);
};

const async2 = (callback:Callback) => {
  setTimeout(() => callback(undefined, 2), 500);
};

const async3 = (callback:Callback) => {
  setTimeout(() => callback(undefined, 3), 200);
};

function race(arr:AsyncFunc[]){
  return function(callback:Callback,originalData:number){
    new Promise((resolve,reject)=>{
      let result:number;
      arr.forEach((a)=>{
        a((error, data)=>{
          if(!error){
            arr.forEach((a)=>{
              a((error, data)=>{
                result = data
              })
              if(result){
                resolve(result)
              }
            })
          }
        })
      })
    }).then((data)=>{
      callback(undefined, data)
    })
  }
}
const first = race([async1, async2, async3]);

first((error, data) => {
  console.log(data); // 2, since 2 is the first to be given
}, 1);
