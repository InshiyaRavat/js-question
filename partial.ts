const func = <T,>(...args:[...T[]]):T[] => args;
function partial<T extends (...args: any[]) => any>(
  func: T,
  ...args: any[]
){
   return function(...placeholderAgrs){
    let index = 0;
    const newArgs = args.map((arg)=>{
        if(arg === partial.placeholder){
            const placeArg = placeholderAgrs[index];
            index++;
            return placeArg
        }else{
            return arg
        }
    })
    const remainingArg = placeholderAgrs.slice(index)
    return func.call(this, ...newArgs, ...remainingArg)
   }
}
const func123 = partial(func, 1, 2, 3);
partial.placeholder = Symbol()
console.log(func123(4));
// [1,2,3,4]

const _ = partial.placeholder;
const func1_3 = partial(func, 1, _, 3,_,6);

console.log(func1_3(2, 4));
// [1,2,3,4]
