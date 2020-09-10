import { useEffect } from 'react';

export default function useClickOutside(ref, handler) {
    useEffect(()=>{
        const listener = (event) => {
            if(!ref.current.contains(event.target)){
                handler()
            }
        }

        window.addEventListener('click', listener)

        return () => {
            window.removeEventListener('click', listener)
        }
    }, [ref,handler])

}
