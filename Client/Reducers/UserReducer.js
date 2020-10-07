import _ from 'lodash'
export default (state=false,action)=>{
    switch(action.type){
        case "Hit":
            return !state 
        default:
            return state
    }
}