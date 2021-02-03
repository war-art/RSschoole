import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'

export const useAuth = () => {

    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [root, setRoot] = useState(null)
   
    const login = useCallback((jwtToken, id, root) => {
        setToken(jwtToken)
        setUserId(id) 
        setRoot(root)

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken, root: root
        }))

    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setRoot(null)

        localStorage.removeItem(storageName)

    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if(data && data.token) {
            login(data.token, data.userId)
        }
    }, [login])

    return { login, logout, token, userId, root }
}