import { useEffect, useState } from "preact/hooks";
import { Fade } from "./Fade";
import { usePersistedState } from "./usePersistedState";
import {Result} from './MultiGame';

export function DoneModal({
  className,
  onClose,
  result,
}: {
  onClose(): void;
  className: string;
  result: Result[];
}) {
  const getRow = (r: Result) => {
    return r.tries.map((t) =>
          <div>{t
            .split("")
            .map((l, i) => {
              const isMiss = r.word.indexOf(l) === -1;
              const isHit = r.word[i] === l;
              const hitIsElsewhere =
                !isHit &&
                t
                  ?.split("")
                  .filter((l2, i) => r.word[i] === l2)
                  .includes(l);
              const isClose = !isHit;
              return isMiss || hitIsElsewhere ? "⬛" : isHit ? "🟩" : "🟨";
            })
          }</div>
    );
}

  return (
    <>
      <div className={"modal center gap-m " + className}>
        <div role="button" tabIndex={0} onClick={onClose} className="close-btn">
          ⨯
        </div>
        <h3>Du är klar</h3>
        <div>
          {
            result.map((r,i) => 
            <div>Spel {i+1}:
              <div>
              {getRow(r)}
              </div>           
            </div>)
          }
        </div>
        <div className="row gap-l" style={{ marginTop: "36px", gap: "56px" }}>
          <Share result={result} />
        </div>
      </div>
      <div className={"modal-bg " + className} />
    </>
  );
}

function Stat(props: { number: string | number; label: string }) {
  return (
    <div className="center">
      <div style={{ fontWeight: "900" }}>{props.number}</div>
      <div style={{ fontSize: "0.75rem" }}>{props.label}</div>
    </div>
  );
}

function Share({ result }: { result: Result[] }) {
  let resultsString = result
    .map((r,gameIndex) => {
      return "Spel " + (gameIndex+1) + ":\n" + r.tries.map((t) =>
          t
            .split("")
            .map((l, i) => {
              const isMiss = r.word.indexOf(l) === -1;
              const isHit = r.word[i] === l;
              const hitIsElsewhere =
                !isHit &&
                t
                  ?.split("")
                  .filter((l2, i) => r.word[i] === l2)
                  .includes(l);
              const isClose = !isHit;
              return isMiss || hitIsElsewhere ? "⬛" : isHit ? "🟩" : "🟨";
            })
            .join("")
        )
        .join("\n");
  
    }).join("\n");
    
  const data = {
    url: window.location.href,
    text: `Stava, ${window.location.href}

${resultsString}
`,
    title: "Stava",
  };

  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      const v = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(v);
    }
  }, [copied]);

  return (
    <>
      <Fade show={copied}>
        {(c) => (
          <div style={{ top: "-20px" }} className={"warning " + c}>
            Resultatet har kopierats
          </div>
        )}
      </Fade>
      <button
        className="share-btn"
        onClick={() => {
          if (navigator.share) {
            navigator.share(data);
          } else if (navigator.clipboard) {
            navigator.clipboard.writeText(data.text);
            setCopied(true);
          } else {
            alert("Kunde inte dela");
          }
        }}
      >
        Dela
      </button>
    </>
  );
}

function monthStr(m: number) {
  return [
    "januari",
    "febriari",
    "mars",
    "april",
    "maj",
    "juni",
    "juli",
    "augusti",
    "september",
    "oktober",
    "november",
    "december",
  ][m];
}
