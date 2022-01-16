import { MultiGame } from "./MultiGame";
import Obfuscation from "./Obfuscation";

export function App() {
  const getSeed = () => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    if (code){
      const seed = parseInt(code);
      return seed || new Date().valueOf();
    } else {
      
      const newSeed = new Date().valueOf();
      window.location.search = 'code=' + newSeed
      return newSeed;
    }
    
  }
  const seed = getSeed();
  const obfuscation = new Obfuscation(seed);
  

  return (<MultiGame numberGames={2} obfuscation={obfuscation} />);
}