import Filho from './01Filho';

const Pai = () => {

    const style = {
        backgroundColor: '#ffff',
        padding: '10px',
        margin: '0px',
        borderRadius: '10px'
    }

    const cabecalho = {
        padding: '0px',
        margin: '0px'
    }
    
    return (
    <div style={style}> 
        <h1 style={cabecalho}>Questão 1</h1>
        <h4 style={cabecalho}> passando props para meu filho calcular imc...</h4>
        <hr />
        <Filho altura = {'1.55'} peso = {'49'}/>
        <hr />
        <Filho altura = {'1.80'} peso = {'150'}/>
        <hr />
        <Filho altura = {'1.60'} peso = {'30'}/>
    </div>
    )
}

export default Pai