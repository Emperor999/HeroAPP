
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [heroes, setHeroes] = useState([]);
  const [id, setId] = useState("");
  const [heroName, setHeroName] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          "https://60dff0ba6b689e001788c858.mockapi.io/heroes"
        );
        const data = res.data;
        console.log(data);
        setHeroes(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {heroes.map((hero, index) => (
        <button
          key={index}
          onClick={() => {
            setId(hero.id);
            setHeroName(hero.name);
            setMessage(
              (previousMes) =>
                previousMes + `HeroesComponent: Selected hero id=${hero.id}\n`
            );
          }}
        >
          {hero.id}|{hero.name}
        </button>
      ))}
      <br />
      <h3>{heroName} details</h3>
      <span>{id}</span>
      <input type="text" defaultValue={heroName} />
      <br />
      <button onClick={() => setMessage("")}>Clear message</button>
      <h2>
        {message.split("\n").map((mes, index) => (
          <p key={index}>{mes}</p>
        ))}
      </h2>
    </div>
  );
}
