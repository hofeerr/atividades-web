const persona = {
    padding:'0px',
    marginRight: '80px',
    fontStyle: "italic",
}

const imgStyle = {
    borderRadius: '10px',
    padding:'0px',
    margin:'0px',
    backgroundSize: 'cover'
}

const box = {
    display:'flex',
    fontStyle: 'italic',
    justifyContent: 'center',
    content: 'center',
    alignContent: 'center',
    alignitems: 'center',
}


const Hero = ({ nome, img }) => {
    return (
      <div style={persona}>
        <center>
            <img src={img} style={imgStyle} width="170" height="200" alt="hero" />
            <p>{nome}</p>
        </center>
      </div>
    );
  }
  
  const Enemy = ({ nome, img }) => {
    return (
        <div style={persona}>
        <center>
            <img src={img} style={imgStyle} width="170" height="200" alt="enemy" />
            <p>{nome}</p>
        </center>
      </div>
    )
  }

  const Arena = ({children, nomeArena}) => {
    return (
      <div >
            <h4> Arena {nomeArena}</h4>
            <p style={box}>{children}</p>
      </div>
    )
  }
  
  const World = ({ children }) => {
    return (
      <div>
        {children}
      </div>
    )
  }
  
  export { Hero, Enemy, Arena, World };