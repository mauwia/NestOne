
export default (state=false,action)=>{
    switch(action.type){
        case "HIT":
            return !state 
        default:
            return state
    }
}