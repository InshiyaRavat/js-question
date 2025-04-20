function myTypeOf<T> (data:T){
    if(data === "null"){
        return null
    }
    else if(data === "undefined"){
        return undefined
    }
    else{
        return Object(data).constructor.name
    }
}
console.log(myTypeOf("dsc"))
