import { useState } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import ResultPaymentCash from "./ResultPaymentCash";

// Definición del componente
function FormPaymentCash() {
    const [inputs, setInputs] = useState({}); // Estado para manejar los inputs

    // Función para actualizar al momento el valor de los inputs
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    // Función para gestionar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevenir el envío del formulario
        
        const result = ReactDOM.createRoot(document.getElementById('resultCash')); 
        const parsedCoinTypes = JSON.parse(inputs.coin_types); // Convertir la cadena a objeto

        const dataToSend = {
            ...inputs,
            coin_types: parsedCoinTypes // Sobrescribir coin_types con el objeto
        };
        try {
            const response = await axios.post('http://localhost:8000/api/payment/cash', dataToSend, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Si la API responde correctamente, renderizas el resultado
            result.render(
                <ResultPaymentCash json={JSON.stringify(response.data)}/>
            );
            console.log(response.data);
        } catch (error) {
            // En caso de error, renderizas un mensaje de error
            result.render(
                <p>Se ha producido un error al procesar el pago en efectivo</p>
            );
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Pago en Metálico</h1>
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
                    Monedas:
                    <input
                        type="text"
                        name="coin_types"
                        value={inputs.coin_types || ""}
                        onChange={handleChange}
                        required placeholder='{"10000": 2}'
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
                <div id="resultCash" class="result-container"></div>
            </form>
            
        </div>
    );
}

export default FormPaymentCash;