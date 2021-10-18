import React,  { useRef } from 'react';
import './style.css';

export default function Contato() {

    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current?.focus();
        inputRef.current.value = 'O input foi focalizado!';
    }

    return (
        <div className="Contato">
            Página de Contato
            <p>
                <input 
                    ref={inputRef}
                    type="text"
                    placeholder="Clique no botão abaixo"
                />
            </p>
            
            <button onClick={handleFocus}> Realizar Foco </button>
        </div>
    );
}
