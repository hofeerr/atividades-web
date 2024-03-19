import './App.css'
import Pai from "./components/atividade01/questao01/01Pai";
import { PlacaMae as PCPlacaMae, Memoria as PCMemoria, PlacaDeVideo as PCPlacaDeVideo } from './components/atividade01/questao02/02MeuPC';
import { Hero, Enemy, Arena, World } from "./components/atividade01/questao03/03Batalha"


function App() {

  return (

    <div className='body'>
      <p className='question'>
        <strong>Aluno:</strong> Mariana Hofer <br/>
        <strong>Matrícula: </strong> 535809
      </p>
      <p><Pai /></p>

      <p className='question'>
        <h1 className='subHeader'>Questão 2</h1>
        <h4 className='subHeader'>Meu PC</h4>
        <hr />
        <p><PCPlacaMae nome = "Placa Mãe MSI MPG B550 Gaming Plus" preco = {899.99} /></p>
        <p><PCMemoria nome = "Memória DDR4 Hiksemi Armor, 8GB, 3200Mhz" preco = {259.99} /></p>
        <p><PCPlacaDeVideo nome = "Placa De Vídeo Gigabyte NVIDIA GeForce RTX" preco = {1799.99} /></p>
      </p>
      
      <br />
      <p className='question'>
        <h1 className='subHeader'>Questão 3</h1>
        <h4 className='subHeader'>Minha batalha</h4>
        <hr />

        <World>
          <Arena nomeArena = "Marvel">
          <Enemy img= "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/429bc812-775d-490e-8ffc-81144e7e5ecb/dftor1g-a50079ea-1a64-471c-9558-6eedc3865e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQyOWJjODEyLTc3NWQtNDkwZS04ZmZjLTgxMTQ0ZTdlNWVjYlwvZGZ0b3IxZy1hNTAwNzllYS0xYTY0LTQ3MWMtOTU1OC02ZWVkYzM4NjVlOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vPuOmBx84Og5tTBQTj6O1ZMHoQ82VUopmMSpA9a1Jsk" nome="Thanos" />
          <Hero img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/429bc812-775d-490e-8ffc-81144e7e5ecb/dft5am5-1579f6c5-5bfb-45ad-bebf-b41ac4aee7c2.png/v1/fit/w_828,h_828,q_70,strp/baby_iron_man_by_georgealanart_dft5am5-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzQyOWJjODEyLTc3NWQtNDkwZS04ZmZjLTgxMTQ0ZTdlNWVjYlwvZGZ0NWFtNS0xNTc5ZjZjNS01YmZiLTQ1YWQtYmViZi1iNDFhYzRhZWU3YzIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.b1g1uy7lFdXGJwW_Ek7XKKLZ1RdoK3dSGBHNC1pjwNc" nome= "Homem de ferro" />
          </Arena>
          <hr />
          <Arena nomeArena = "Star Wars">
          <Enemy img= "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/539e2e5b-4df7-4099-a055-4de6c36eede4/dfs3xy5-992c7be9-a966-4df8-9542-e6586b638ffd.jpg/v1/fit/w_828,h_828,q_70,strp/baby_darth_vader_by_klashmetaverse_dfs3xy5-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzUzOWUyZTViLTRkZjctNDA5OS1hMDU1LTRkZTZjMzZlZWRlNFwvZGZzM3h5NS05OTJjN2JlOS1hOTY2LTRkZjgtOTU0Mi1lNjU4NmI2MzhmZmQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ak9QcxzjffwzCWNn4rBC7vHlRwtsvz3Q6n-N4PbVT9M" nome="Darth Vader" />
          <Hero img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/539e2e5b-4df7-4099-a055-4de6c36eede4/dfs293p-1482e762-bf1c-4a1f-8962-2236d04426c4.jpg/v1/fit/w_828,h_828,q_70,strp/baby_chewbacca_by_klashmetaverse_dfs293p-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzUzOWUyZTViLTRkZjctNDA5OS1hMDU1LTRkZTZjMzZlZWRlNFwvZGZzMjkzcC0xNDgyZTc2Mi1iZjFjLTRhMWYtODk2Mi0yMjM2ZDA0NDI2YzQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FawgI3_ivaPq4zDr_JMS5SCJ7babeP2qTVdpj7DW6ys" nome= "Chewbacca" />
          </Arena>
          <hr />
          <Arena nomeArena = "Hogwarts">
          <Enemy img= "https://i.pinimg.com/564x/9a/2d/47/9a2d4700df8a9e657d65b3967f430fa2.jpg" nome= "Voldemort" />
          <Hero img= "https://i.pinimg.com/564x/2a/9f/47/2a9f47a0dac2ced9e3aed674341ef932.jpg" nome= "Snape" />
          </Arena> 

        </World>
      
      </p>
      
    </div>


  );

}

export default App;
