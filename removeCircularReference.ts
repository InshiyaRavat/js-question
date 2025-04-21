const a = { b: 10, c: { d: 20 } }
a.e = a; //circular dependency.
//a = { b: 10, c: { d: 20 },e:a }
//OUTPUT
// a = { b: 10, c: { d: 20 },e:undefined }
function removecycle<T extends {}>(obj:T){
    if(obj === null) return obj
    if(obj === undefined) return obj

    const set = new Set()
    set.add(obj)

    const keys = Object.keys(obj)

    for(const key of keys){
        if(set.has(obj[key])){
            obj[key] = undefined
        }else{
            if(typeof obj[key] === 'object'){
                removecycle(obj[key])
            }
        }
    }
    return obj
}
console.log(removecycle(a))
