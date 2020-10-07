export default (state=null,action)=>{
    switch(action.type){
        
        case "ERROR":
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}