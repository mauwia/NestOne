import _ from 'lodash'
export default (state={},action)=>{
    switch(action.type){
        case "ADD_POST":
            return {...state,[action.payload._id]:action.payload}
        case "GET_POSTS":
            return{...state,..._.mapKeys(action.payload,'_id')}
        default:
            return state
    }
}