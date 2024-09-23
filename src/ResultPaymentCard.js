//Componente para cargar
function ResultPaymentCard({ cardNumber, isValidCard }) {
  if (cardNumber) {
    return (
      <p class={isValidCard ? "valid" : "invalid"}>
        The card {cardNumber || ""} is {isValidCard ? "valid" : "invalid"}
      </p>
    );
  }

  return;
}

export default ResultPaymentCard;
