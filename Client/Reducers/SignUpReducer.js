export default (state={},action)=>{
    switch(action.type){
        case "EMAIL_AND_PASS":
            return {...action.payload}
        case "SIGN_UP":
            console.log(action)
            return{...action.payload}
        case "LOGIN_IN":
            return{...action.payload}
        case "USER_LOAD":
            return {...action.payload}
        case "LOGOUT":
            return {}
        default:
            return state
    }
}