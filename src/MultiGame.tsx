
import Obfuscation from './Obfuscation';
import {Game} from './Game';
import {DoneModal} from './DoneModal';
import { useState } from 'preact/hooks';
import { Fade } from "./Fade";

type MultiGameProps = {numberGames: number, obfuscation: Obfuscation};
export type Result = {word: string, tries: string[]}

export function MultiGame({numberGames, obfuscation}: MultiGameProps) {
  const [currentGame, setCurrentGame] = useState(0);
  const [result, setResult] = useState<Result[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [indicies,] = useState(Array.from({length: numberGames}, (_, i) => obfuscation.getNextIndex()));

  const getGame = (i: number) => {
    return <Game hidden={i !== currentGame} n={indicies[i]} idx={i} total={numberGames} gameDoneCallback={gameDoneCallback} isLast={i+1 === numberGames}/>
  }

  const gameDoneCallback = (word: string, tries: string[]) => {
    setCurrentGame(currentGame+1)

    setResult(t => [...t, {word: word, tries: tries}]);
    if (currentGame >= numberGames - 1){
      setShowModal(true);
    }
  };

  
  return (
    <>
      {Array.from({length: numberGames}, (_, i) => getGame(i))}
      <Fade show={showModal}>
          {(c) => (
            <DoneModal
              className={c}
              result={result}
              onClose={() => setShowModal(false)}
            />
          )}
        </Fade>
    </>
    );
};