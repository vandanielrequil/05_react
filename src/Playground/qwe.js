import { useRef, useEffect } from 'react';

function InputFocus() {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <input
            ref={inputRef}
            type="text"
        />
    );
}