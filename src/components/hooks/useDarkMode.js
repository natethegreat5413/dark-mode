import { useEffect } from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (toggleDarkMode) => {
    const [value, setValue] = useLocalStorage(toggleDarkMode)

    useEffect(() => {
        if(value){
            window.document.body.classList.add('dark-mode')
        }else{
            window.document.body.classList.remove('dark-mode')
        }
    }, [value])
    
    return [value, setValue]
}
