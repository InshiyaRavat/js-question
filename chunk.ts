function chunk<T>(arr:Array<T>,split:number){
  if(split >= arr.length){
    return arr
  }
  const result = []
  for(let i=0;i<arr.length;i){
    const newArr:T[] = []
    for(let j=split-1;j>=0;j--){
      if(arr[i] !== undefined){
        newArr.push(arr[i])
      }
      i++
    }
    result.push(newArr)
  }
  console.log(result)
}
chunk([1, 2, 3, 4, 5], 1); //[[1],[2],[3],[4],[5]]
chunk([1, 2, 3, 4, 5], 2); //[[1,2],[3,4],[5]]
chunk([1, 2, 3, 4, 5], 3); //[[1,2,3],[4,5]]
