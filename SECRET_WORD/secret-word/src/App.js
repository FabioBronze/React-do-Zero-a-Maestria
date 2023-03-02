// CSS
import "./App.css";
// React
import { useCallback, useEffect, useState } from "react";
// Data
import { wordsList } from "./data/words.jsx";
// Components
import StartScreen from "./components/StartScreen.jsx";
import Game from "./components/Game.jsx";
import GameOver from "./components/GameOver.jsx";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState();
  const [pickedCategory, setPickedCategory] = useState();
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickedWordAndCategory = useCallback(() => {
    const categories = Object.keys(words); // Busca as categorias das variável words
    const category =
      // Inicializa com uma palavra aleatória
      categories[Math.floor(Math.random() * Object.keys(categories).length)]; // Chaves Aleatórias
    // Busca uma palavra aleatória
    const word =
      words[category][Math.floor(Math.random() * words[category].length)]; // Valores Aleatórios

    return { word, category };
  }, [words]);

  // Starts the Secret Word Game
  const startGame = useCallback(() => {
    // Clear all letters
    clearLetterStates();
    // Resgata as letras (pick word and pick category)
    const { word, category } = pickedWordAndCategory();

    // Cria um array de letras
    let wordLetters = word.split("");
    // Coloca as letras em minusculo
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    // Altera o estágio do jogo
    setGameStage(stages[1].name);
  }, [pickedWordAndCategory]);

  // Process the Letter Input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    // Ver se a letra ja foi utilizada
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    // Adiciona uma letra ou remove uma tentativa
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessLetters) => [
        // Pega todos os elementos do array
        ...actualGuessLetters,
        // Adiciona a nova letra
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        // Pega todos os elementos do array
        ...actualWrongLetters,
        // Adiciona a nova letra nas já utilizadas
        normalizedLetter,
      ]);
      setGuesses((actualGuess) => actualGuess - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      // Reset all stages
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // Check win condition
  useEffect(() => {
    // Cria um Array de letras únicas
    const uniqueLetters = [...new Set(letters)];
    // Win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => (actualScore += 100));
      // Restart Game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  // Restarts the Game
  const restartGame = () => {
    setScore(0);
    setGuesses(3);

    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {/*Quando o gameStage for "start/game/end" vai executar o componente*/}
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={restartGame} score={score} />}
    </div>
  );
}

export default App;
