import { useEffect, useState } from "react";
import { getPokemonList } from "./api/pokemon";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPokemonList();
      setPokemonData(response.results);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: '30px',
          marginTop: "40px",
          width: "90%",
          margin: "auto",
        }}
      >
        {pokemonData?.map((data, i) => (
          <div
          key={i}
            style={{
              width: "300px",
              height: "300px",
              border: "2px solid green",
              margin: "30px 0",
              marginBottom: "30px",
            }}
          >
            <div style={{padding: '5px 10px'}}>
              <h2 style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                {data.name}
              </h2>
            </div>
            <img
              key={i}
              style={{ height: "300px", width: "300px" }}
              alt={data.name}
              src={`https://img.pokemondb.net/artwork/large/${data.name}.jpg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
