const initialState={
    IsLoggedIn:sessionStorage.getItem("UserName")!==null,
    Username: sessionStorage.getItem("userName")===null ?"":sessionStorage.getItem("userName"),
    Role: sessionStorage.getItem("role")===null ? "":sessionStorage.getItem("role")
}

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'IsLoggedIn':
            return {...state,
                IsLoggedIn:true,
                userName:sessionStorage.getItem("userid"),
                Username:sessionStorage.getItem("uname"),
                Role:sessionStorage.getItem("role")
            } 
        case 'LogOut':
            sessionStorage.clear()
            return {...state,IsLoggedIn:false,Username:'',Role:'',Userid:''}
        default:
            return state
    }
}

export default reducer;