import React from 'react';

const Resultado = ({ total, plazo, cantidad }) =>  (
       <div className="u-full-width resultado">
    
        <h3>Resumen cotización</h3>
        <p><span className="span">Cantidad solicitada: </span>$ {cantidad}</p>
        <p><span className="span">Plazo de devolución:</span> {plazo} meses</p>
        <p><span className="span">Monto a devolver:</span> $ {(total).toFixed(2)}</p>
        <p><span className="span">Cuota mensual:</span> $ {(total / plazo).toFixed(2)}</p>
            
    </div>
    );


export default Resultado;