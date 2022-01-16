import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useState,
  } from "preact/hooks";
  import { Fade } from "./Fade";
  import { Help } from "./Help";
  import { Keyboard } from "./Keyboard";
  import { SummaryModal } from "./SummaryModal";
  import { Tries } from "./Tries";
  import { useViewportHeight } from "./useViewportHeight";
  import { words } from "./words";
  
  type GameProps = {
      n: number;
      idx: number;
      total: number;
      gameDoneCallback: (w: string, t: string[]) => void;
      hidden: boolean;
      isLast: boolean;
  }
  export function Game({n, idx, total, gameDoneCallback, hidden, isLast}: GameProps) {
    
    const word = words[(n % words.length)];

    const [tries, setTries] = useState<string[]>([]);
    
    const [currentTry, setCurrentTry] = useState("");
    
    const [warning, setWarning] = useState(false);
    const [showModal, setShowModal] = useState(false);
    
    const hasWon = () => tries[tries.length - 1] === word;
    const hasLost = () => !hasWon() && tries.length === 6;
    const height = useViewportHeight();
  
    useEffect(() => {
      if (warning) {
        const v = setTimeout(() => {
          setWarning(false);
        }, 2000);
        return () => clearTimeout(v);
      }
    }, [warning]);

    useEffect(() => {
        setTries([]);
        setCurrentTry("");
    }, [word]);

    useLayoutEffect(() => {
        if (!isLast && (hasWon() || hasLost())) {
          setShowModal(true);
        }
      }, [hasWon, hasLost]);

    const handlePress = useCallback(
      (key: string) => {
        if (key === "Backspace") {
          setCurrentTry((v) => v.substring(0, v.length - 1));
        } else if (key === "Enter") {
          const isAWord = currentTry.length === 5 && words.indexOf(currentTry) > -1;

          if (isAWord) {
            setTries((t) =>{
                const newTries = [...t, currentTry];
                if (currentTry === word){
                    if (isLast){
                        gameDoneCallback(word, newTries);
                    } else {
                        setShowModal(true);
                    }
                    
                }
                return newTries;
            } );    
            
            setCurrentTry("");
          } else {
            setWarning(true);
          }
          
        } else if (!hasWon()) {
          setCurrentTry((value) => (value.length < 5 ? value + key : value));
        }
      },
      [currentTry]
    );

    return (
      <div className="center" style={hidden ? { display: 'none', height: `${height}px` } : { height: `${height}px` }}>
        <Help />
        <Fade show={warning}>{(c) => <Warning className={c} />}</Fade>
        <Fade show={showModal}>
          {(c) => (
            <SummaryModal
              tries={tries}
              word={word}
              className={c}
              onClose={() => setShowModal(false)}
              gameDoneCallback={() => {
                  
                  setShowModal(false);
                  gameDoneCallback(word, tries);
                }
              }
            />
          )}
        </Fade>
        <span><h2>Stava</h2><h3> (spel {idx+1} av {total})</h3></span>
        <Tries word={word} tries={tries} currentTry={currentTry} />
        <Keyboard word={word} tries={tries} onPress={handlePress} />
      </div>
    );
  }
  
  function Warning({ className }: { className: string }) {
    return (
      <div className={"warning " + className}>
        Ordet finns inte med i ordlistan.
      </div>
    );
  }
  