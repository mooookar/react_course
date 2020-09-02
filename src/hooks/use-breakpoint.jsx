import {useState, useEffect} from 'react';

export default function useBreakpoints(w) {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = w;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width < breakpoint;
}