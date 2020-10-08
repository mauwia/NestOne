import _ from 'lodash'
export default (state={},action)=>{
    switch(action.type){
        case "USER_POSTS":
            return{...state,..._.mapKeys(action.payload,'_id')}
        case "ADD_POST":
                return {...state,[action.payload._id]:action.payload}
        case "LOGOUT":
                return {}
        default:
            return state
    }
}