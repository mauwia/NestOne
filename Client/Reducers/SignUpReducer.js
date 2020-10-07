export default (state={},action)=>{
    switch(action.type){
        case "EMAIL_AND_PASS":
            return {...action.payload}
        case "SIGN_UP":
            console.log(action)
            return{...action.payload}
        case "LOGIN_IN":
            // console.log(action)
            return{...action.payload}
        default:
            return state
    }
}