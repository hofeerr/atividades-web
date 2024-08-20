import './App.css';
import Questao01A from './components/ap1/questao01';
import Questao02 from './components/ap1/questao02';
import Questao03 from './components/ap1/questao03';
import Questao04 from './components/ap1/questao04';


function App() {

  return (

    <div className='body'>
      <p className='questionWhite'>
        <strong><h1>AP1 - Desenvolvimento Web 20/08</h1></strong><br/>
        <strong>Aluno:</strong> Mariana Aparecida Hofer Gama <br/>
        <strong>Matrícula: </strong> 535809 <br/>
        <strong>Turma: </strong> T02
      
      </p>
        
      <p className='questionWhite'>
        <h1 className='subHeader'>Questão 01 </h1>
        <h4 className='subHeader'>Extraindo maiores valores de objetos</h4>
        <hr />
        <Questao01A />
      </p>

      <p className='questionWhite'>
        <h1 className='subHeader'>Questão 02 </h1>
        <h4 className='subHeader'>Pokemon Vira Vira</h4>
        <hr />
        <Questao02 />
      </p>

      <p className='questionWhite'>
        <h1 className='subHeader'>Questão 03 </h1>
        <h4 className='subHeader'>Capitais e suas populações usando async-await</h4>
        <hr />
        <Questao03 />
      </p>

      <p className='questionWhite'>
        <h1 className='subHeader'>Questão 04 </h1>
        <h4 className='subHeader'>Capitais e suas populações, substituindo a chamada de API por promise interna</h4>
        <hr />
        <Questao04 />
      </p>

      <p className='questionWhite'>
        <h1 className='subHeader'>Questão 05 </h1>
        <h4 className='subHeader'>React X Props Drilling</h4>
        <hr />
        <p>No "Props Drilling" ou  problema de propagação de propriedades temos passados de um componente pai para um componente filho, e então passar esses dados para outro componente neto (componentes aninhados), e assim por diante... Gerndo assim uma passagem de propriedades por vários compontes que não precisam destas props imediatamente.
        <br/><br/>
        Com React, através da definição de um contexto (createContext()) e da passagem dele(Provider) qualquer componente na árvore pode consumir esse valor diretamente, sem precisar passar props manualmente. Além disso, melhora-se a legibilidade, manutenção do código, e reutilização de componentes.
        <br/><br/>
        Exemplos no TXT do projeto.
        </p>
      </p>
      
    </div>


  );

}

export default App;
