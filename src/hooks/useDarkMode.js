import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = () => {

    const [value, setValue] = useLocalStorage('darkmode', initalValues);

    useEffect(() => {
        const body = document.querySelector('body');

        if (value) {
            body.classList.add('dark-mode ')
        } else {
            body.classList.remove('dark-mode')
        }
    }, [])

}

