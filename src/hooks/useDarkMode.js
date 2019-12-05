import { useEffect } from 'react';
import UseLocalStorage from './UseLocalStorage';

const UseDarkMode = () => {

    const [value, setValue] = UseLocalStorage('darkmode', value);

    useEffect(() => {
        const body = document.querySelector('body');

        if (value) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    }, [value])

    return [value, setValue];
}

export default UseDarkMode;
