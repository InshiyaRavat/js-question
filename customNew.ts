function SuperHero(name: string) {
  this.name = name;
}
function newCreator(constructor,arg){
   const obj = {}
    const result = constructor.call(obj,arg)
    if(result && typeof result == 'object'){
        return result
    }else{
        Object.setPrototypeOf(obj,constructor.prototype);
        return obj
    }
}
const batman = newCreator(SuperHero, "bruce");
console.log(batman instanceof SuperHero); //true
console.log(batman.name); //bruce
