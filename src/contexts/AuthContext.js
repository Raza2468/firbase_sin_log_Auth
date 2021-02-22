import React,{ useContext, useState, useEffect } from "react"
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return (
        useContext(AuthContext)
    )
}

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    function singup(email, password) {
        return (
            auth.createUserWithEmailAndPassword(email, password)
        )
    }

    useEffect(() => {

      const unsubscriber = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscriber 
    }, [])


    const value = {
        currentUser,
        singup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
