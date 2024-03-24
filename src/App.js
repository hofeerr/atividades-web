import './App.css';
import FunctionContextA from './components/atvidade02/01questao/FunctionContextA';
import ClassA from './components/atvidade02/01questao/ClassContext';
import ComponenteAvo from './components/atvidade02/02Pokemon/ComponenteAvo';
import CompAvo from './components/atvidade02/03Pokemon/CompAvo';

function App() {

  return (

    <div className='body'>
      <p className='questionWhite'>
        <strong>Aluno:</strong> Mariana Hofer <br/>
        <strong>Matrícula: </strong> 535809
      
      </p>

      <p className='questionWhite'>
        <h1 className='subHeader'>Questão 01</h1>
        <h4 className='subHeader'>usando contexto para puxar backgroundColors, com Function C na versão atual e demais na legada</h4>
        <hr />
      </p>
      <p className='question'>
        <ClassA />
        <FunctionContextA />
      </p>
        
      <p className='questionWhite'>
        <h1 className='subHeader'>Questão 02 & Questão 3</h1>
        <h4 className='subHeader'> "eu escolho você!" a evolução da espécie </h4>
        <hr />
        <ComponenteAvo />
      </p>

      <p className='questionWhite'>
        <h1 className='subHeader'>Questão 02 & Questão 3</h1>
        <h4 className='subHeader'> "eu escolho você!" a evolução da espécie </h4>
        <hr />
        <CompAvo />
      </p>

      
    </div>


  );

}

export default App;
