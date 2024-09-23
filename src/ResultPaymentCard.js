//Componente para cargar
function ResultPaymentCard({ cardNumber, isValidCard }) {
  if (cardNumber) {
    return (
      <p class={isValidCard ? "valid" : "invalid"}>
        La tarjeta {cardNumber || ""} es {isValidCard ? "correcta" : "incorrecta"}
      </p>
    );
  }

  return;
}

export default ResultPaymentCard;
