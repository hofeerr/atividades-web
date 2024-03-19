const Filho = ({peso, altura}) => {
    
    const style = {
        fontSize: '14px',
        padding: '0px',
        margin: '0px'
    }


    const imc = (peso / (altura * altura));
    return (
    <>
        <h4 style={style}>Peso: {peso}</h4>        
        <h4 style={style}>Altura: {altura}</h4>
        <h4>IMC: {imc}</h4>

        {imc < 18 ? <h3> Cuidado, você está abaixo do peso</h3> : null}
        {imc > 25 ? <h3>Cuidado, você está acima do peso</h3> : null}
        {imc > 18 && imc < 25 ? <h3>Parabéns, peso ideal!</h3> : null}
    </>
    )
}

export default Filho