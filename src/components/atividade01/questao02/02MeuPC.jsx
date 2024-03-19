const style = {
    backgroundColor: '#e6e6fa',
    padding: '10px',
    margin: '0px',
    borderRadius: '10px',
    fontSize: "14px"
}

const title = {
    padding: "0px",
    margin: "0px"
}

const priceStyle = {
    fontStyle: "italic"
}


const PlacaMae = ({ nome, preco }) => {
    return (
      <div style={style}>
        <h4 style={title}>{nome}</h4>
        <hr />
        <p style={priceStyle}>Preço: R$ {preco}</p>
      </div>
    );
  };
  
  const Memoria = ({ nome, preco }) => {
    return (
      <div style={style}>
        <h4 style={title}>{nome}</h4>
        <hr />
        <p style={priceStyle}>Preço: R$ {preco}</p>
      </div>
    );
  };
  
  const PlacaDeVideo = ({ nome, preco }) => {
    return (
      <div style={style}>
       <h4 style={title}>{nome}</h4>
        <hr />
        <p style={priceStyle}>Preço: R$ {preco}</p>
      </div>
    );
  };
  
  export { PlacaMae, Memoria, PlacaDeVideo };