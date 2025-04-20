type Action = 
    { type: "greet"; name: string } | { type: "sleep"; time: number } | { type: "eat"; food: string }

const sleep = (time:number) => {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time*1000)
    })
}
function LazyMan(personName:string, logFn:(str:string)=>void){
    const actions:Action[] = []
    actions.push({ type:"greet", name: personName})

    async function exec(){
        while(actions.length !== 0){
            const actionToPerform = actions.shift()!;
            switch (actionToPerform.type){
                case "greet":{
                    logFn(`Hi, I'm ${actionToPerform.name}.`);
                    break;
                }
                case "sleep":{
                    logFn(`( after ${actionToPerform.time} seconds )`)
                    await sleep(actionToPerform.time);
                    logFn(
                    `Wake up after ${actionToPerform.time} ${
                        actionToPerform.time === 1 ? "second" : "seconds"
                    }.`
                    );
                    break;
                }
                case "eat":{
                    logFn(`Eats ${actionToPerform.food}`);
                    break;
                }
            }
        }
    }

    Promise.resolve().then(()=>exec());

    return {
        eat(food:string){
            actions.push({ type: "eat", food: food})
            return this;
        },
        sleep(time: number){
            actions.push({ type: "sleep", time: time})
            return this;
        },
        sleepFirst(time: number){
            actions.unshift({ type: "sleep", time: time})
            return this
        },
    }
}
LazyMan("Jack", console.log)
  .eat("banana")
  .sleepFirst(10)
  .eat("apple")
  .sleep(1);
// (after 10 seconds)
// Wake up after 10 seconds.
// Hi, I'm Jack.
// Eat banana
// Eat apple
// (after 1 second)
// Wake up after 1 second.
