import React, {useState} from 'react'
import Square from './components/Square';
import getPercentage from './utils/getPercentage';

const Context = React.createContext(null);

function App() {
  const [colorList, setColorList] = useState([])
  const [statistics, setStatistics] = useState({})

  const addSquare = (color) => {
    const newColorList = [...colorList, color]
    setColorList(newColorList)
    setStatistics(getPercentage(newColorList))
  }

  const deleteLast = () => {
    const newColorList = [...colorList]
    newColorList.pop()
    console.log(newColorList)
    setColorList(newColorList)
  }

  console.log(statistics)

  return (
    <div style={{height: "100vh"}}>
      <Context.Provider value={{colorList, setColorList}}>
        <div style={{display: "flex", flexFlow: "column nowrap", alignItems: "center", height: "100%", maxWidth: "100vw", justifyContent: "space-around", overflow: "hidden"}}>
          <div style={{display: "flex", flexFlow: "column nowrap", alignItems: "center",}}>
            <p>Clique para adicionar um quadrado</p>
            <div style={{display: "flex", flexFlow: "row nowrap", gap: "5px"}} >
              <Square onClick={() => addSquare("blue")} color="blue" />
              <Square onClick={() => addSquare("red")} color="red" />
            </div>
          </div>
          <div style={{textAlign: "center"}}>
            <p>{`Número total de jogadas: ${statistics.totalSize || 0}`}</p>
            <p>{`Ocorrência de azul (%): ${statistics.blueProbability || 0}`}</p>
            <p>{`Ocorrência de vermelho (%): ${statistics.redProbability || 0}`}</p>
            {
              statistics.isTenLength && (
                <>
                  <h2>Últimas 10 jogadas</h2>
                  <p>{`Ocorrência de azul (%): ${statistics.blueTenProbability || 0}`}</p>
                  <p>{`Ocorrência de vermelho (%): ${statistics.redTenProbability || 0}`}</p>
                </>
              )
            }
            
            <button onClick={() => deleteLast()} >Deletar último</button>
          </div>
          <div style={{display: "flex", flexFlow: "row nowrap", gap: "10px", overflowX: "scroll", width: "80%"}} >
            {
              colorList.map((color) => <Square onClick={() => {}} color={color} />)
            }
          </div>
        </div>

      </Context.Provider>
    </div>
  );
}

export default App;
