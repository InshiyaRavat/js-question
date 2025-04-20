const el = document.getElementsByTagName('body')
function getMaxHeight(root){
    if(!root) return 0;
    let maxHt = 0;
    for(const child of root.children){
        console.log(child)
        const childHt = getMaxHeight(child)
        console.log(maxHt,childHt)
        if(childHt > maxHt){
            maxHt = childHt
        }
    }
    return maxHt+1
}
console.log(getMaxHeight(el[0])-1)
