const a = {
    name:"inshiya",
    bday:{
        day:21,
        month:5,
        year:2003
    },
    age:21
}
function deepClone<T extends Record<string,any>>(obj:T){
    const object:Record<string,any> = {}
    for(let [property,value] of Object.entries(obj))
    {
        if(typeof value === "object"){
           value = deepClone(value)
        }
        object[property] = value
    }
    return object
}
const clone = deepClone(a)
clone.name = "Mariya"
clone.bday.month = 3
console.log(clone)
console.log(a)

