import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
function Reloj({hora}){
    return <h3>{hora}</h3>;
}
export default function RelojHooks (){

    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let temporizador;
        if (visible) {
            temporizador= setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        }else{
            clearInterval(temporizador);
        }
        return ()=>{
            console.log("desmontado");
            clearInterval(temporizador);
        };
    }, [visible]);

    return(
        <>
            <h1>Reloj hecho con hooks</h1>
            {visible && <Reloj hora={hora}/>}
            <Button variant='success' onClick={()=>setVisible(true)}>Iniciar</Button>{' '}
            <Button variant='danger' onClick={()=>setVisible(false)}>Detener</Button>
        </>
    );
}