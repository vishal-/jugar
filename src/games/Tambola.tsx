import { useState, useEffect, useRef } from "react";
import Header from "../components/common/Header";

function Tambola() {
  const [calledNumbers, setCalledNumbers] = useState<number[]>([]);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };

  const callNumber = () => {
    const remaining = Array.from({ length: 90 }, (_, i) => i + 1).filter(
      (n) => !calledNumbers.includes(n)
    );
    if (remaining.length === 0) {
      setIsRunning(false);
      return;
    }
    const num = remaining[Math.floor(Math.random() * remaining.length)];
    setCurrentNumber(num);
    setCalledNumbers((prev) => [...prev, num]);

    speak(num.toString());
    setTimeout(() => speak(num.toString()), 3000);
    // setTimeout(() => speak(num.toString()), 6000)
  };

  const start = () => {
    setIsRunning(true);
    callNumber();
  };

  const pause = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    pause();
    setCalledNumbers([]);
    setCurrentNumber(null);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        callNumber();
      }, 7000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, calledNumbers]);

  return (
    <>
      <Header />
      <div className="min-h-screen p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Tambola</h1>

        <div className="bg-gray-800 rounded-lg p-6 mb-4 text-center">
          <div className="text-6xl font-bold text-sky-blue mb-2">
            {currentNumber || "-"}
          </div>
          <div className="text-sm text-gray-400">
            {calledNumbers.length}/90 called
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          {!isRunning ? (
            <button
              onClick={start}
              disabled={calledNumbers.length === 90}
              className="flex-1 py-3 bg-sky-blue text-gray-900 font-bold rounded-lg disabled:opacity-50"
            >
              Start
            </button>
          ) : (
            <button
              onClick={pause}
              className="flex-1 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg"
            >
              Pause
            </button>
          )}
          <button onClick={reset} className="px-6 py-3 bg-gray-700 rounded-lg">
            Reset
          </button>
        </div>

        <div className="grid grid-cols-10 gap-1">
          {Array.from({ length: 90 }, (_, i) => i + 1).map((num) => (
            <div
              key={num}
              className={`aspect-square flex items-center justify-center text-xs rounded ${
                calledNumbers.includes(num)
                  ? "bg-sky-blue text-gray-900 font-bold"
                  : "bg-gray-800 text-gray-500"
              }`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tambola;
