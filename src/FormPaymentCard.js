import valid from "card-validator";
import { useState } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import ResultPaymentCard from "./ResultPaymentCard";
import { cardNumber } from "card-validator/dist/card-number";

//Definición componente
function FormPaymentCard() {
    const [inputs, setInputs] = useState({}); // Definición de variable inputs y función setinputs para actualizar el valor de input
    const [isValidCard, setIsValidCard] = useState({});
    
    // Función para actualizar al momento el valor de los inputs
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };
    //Función para gestionar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevenir el envío del formulario
        setIsValidCard(valid.number(inputs.card_num).isValid); //Usamos la libreria card-validator, para validar el num de tarjeta y asignar si es valida.
        const result = ReactDOM.createRoot(document.getElementById('result')); 
        if (isValidCard){
        try {
            const response = await axios.post('http://localhost:8000/api/payment/card', inputs, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
           
            result.render(
                <ResultPaymentCard cardNumber={inputs.card_num} isValidCard={response.data.success} />
            );
            console.log(response.data);
          } catch (error) {
            result.render(
               <p>Se ha producido un error </p>
            );
            console.error('Error:', error);
          }
        }
    };

    return (
       <div>
            <form onSubmit={handleSubmit}>
            <h1>Pago en Tarjeta</h1>
                <label>
                    Importe:
                    <input
                        type="number"
                        name="amount"
                        value={inputs.amount || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Número de tarjeta:
                    <input
                        type="number"
                        name="card_num"
                        value={inputs.card_num || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Moneda:
                    <select name="currency" onChange={handleChange}>
                        <option value = "">Seleciona una opción</option>
                        <option value= "eur">Euros</option>

                    </select>
                </label>
               
            
            <input type="submit" />
            <div id="result" class="result-container"></div>
           </form>
            
        </div>
    );
}

export default FormPaymentCard;