import { createContext, useContext, useState } from "react";


 const StateContext = createContext({
    user:null,
    token:null,
    notification:'',
    setUser:()=>{},
    setToken:()=>{},
    setNotification:()=>{}
})

export const ContextProvider = (props)=>{
    const [user,setUser] = useState({});
    const [notification , _setNotification] = useState('');
    const [token,_setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    // localStorage.getItem('ACCESS_TOKEN')
    const  setToken=(token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN',token)
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    const setNotification = (message)=>{
        _setNotification(message);
        setTimeout(()=>{
            _setNotification('');
        },5000)
    }
    
return(
<StateContext.Provider value={{
    user,
    token,
    setUser,
    setToken,
    notification,
    setNotification
}}>
{props.children}
</StateContext.Provider>)
}

export const useStateContext =()=> useContext(StateContext)
