import { useState } from "react";

const App = () => {
  const [numero,setNumero] = useState(0);
  const [mode, setMode] = useState(false);
  const [nome,setNome] = useState('');
  const [nomes,setNomes] = useState([]);

  const css ={
    header: {
      backgroundColor: "cyan"
    }
  }

  return (
    <>
      <div style={{width: '100vw', height: '100vh', backgroundColor: mode ? '#333' :  '#FFF', color: mode ? '#FFF' : '#333'}}>

      <button
        style={css.header}
        onClick={
        
        () => {
          setMode(!mode)
          setNumero(numero + 1)
        }
        }> +1 </button>
      <h2>O valor é {numero}</h2>
      <input type="text" onChange={(e) => setNome(e.target.value)} />
      <button onClick={() => setNomes([nomes, nome])}>Guardar</button>
      <h3>Nomes : {nomes.toString()}</h3>
      </div>

    </>
  );
}
 
export default App;