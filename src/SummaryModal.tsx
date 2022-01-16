import { usePersistedState } from "./usePersistedState";

export function SummaryModal({
  className,
  onClose,
  tries,
  word,
  gameDoneCallback
}: {
  onClose(): void;
  className: string;
  tries: string[];
  word: string;
  gameDoneCallback: () => void;
}) {

  return (
    <>
      <div className={"modal center gap-m " + className}>
        <div role="button" tabIndex={0} onClick={onClose} className="close-btn">
          ⨯
        </div>
        <h3>Statistik</h3>
        <p>
          Ordet:{word}
        </p>
        <p>{tries[tries.length - 1] === word ? `Du klarade det på ${tries.length} av 6`: 'Bättre lycka nästa gång'}
          
        </p>
        
        <div className="row gap-l" style={{ marginTop: "36px", gap: "56px" }}>
          <Next gameDoneCallback={gameDoneCallback} />
        </div>
      </div>
      <div className={"modal-bg " + className} />
    </>
  );
}


function Next({gameDoneCallback}:{gameDoneCallback: () => void}) {
  return (
    <button onClick={gameDoneCallback} >Nästa ord</button>
  );
}



