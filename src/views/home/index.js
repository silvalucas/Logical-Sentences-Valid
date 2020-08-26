import React, { useState } from "react";
import { Button, Container, Input } from "reactstrap";
import HomeContainer from "./index.styled";
import {
  FaRegTimesCircle,
  FaRegCheckCircle,
  FaCalculator,
} from "react-icons/fa";

function Home() {
  const [sentence, setSentence] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isValid, setIsValid] = useState();
  const [mode, setMode] = useState("");

  const handleDictionary = (symbol) => {
    if (sentence) {
      setSentence(sentence.concat(symbol));
    } else {
      setSentence(symbol);
    }
  };

  const handleCheckInvalidChars = () => {
    let temporary = sentence;
    for (let iteration = 0; iteration < sentence.length; iteration++) {
      temporary = temporary.replace("¬", "");
      temporary = temporary.replace("∧", "");
      temporary = temporary.replace("∨", "");
      temporary = temporary.replace("→", "");
      temporary = temporary.replace("↔", "");
      temporary = temporary.replace("(", "");
      temporary = temporary.replace(")", "");
      temporary = temporary.replace("P", "");
      temporary = temporary.replace("Q", "");
      temporary = temporary.replace("R", "");
      temporary = temporary.replace(" ", "");
    }
    if (temporary.length > 0) {
      return false;
    }
    return true;
  };

  const handleValidCheck = () => {
    if (sentence !== "") {
      setMode("valid");
      if (sentence.length > 12) {
        setIsValid(false);
        setFeedback("Sua sentença lógica é inválida!");
      } else {
        if (!handleCheckInvalidChars()) {
          setIsValid(false);
          setFeedback("Sua sentença lógica é inválida!");
        } else {
          handleCheckSequenceSymbols();
        }
      }
    }
  };

  const handleCheckSequenceSymbols = () => {
    let sentenceArray = sentence.replace(" ", "").split("");

    for (
      let characterIndex = 0;
      characterIndex < sentenceArray.length;
      characterIndex++
    ) {
      if (
        sentenceArray[characterIndex] === "∧" ||
        sentenceArray[characterIndex] === "∨" ||
        sentenceArray[characterIndex] === "→" ||
        sentenceArray[characterIndex] === "↔"
      ) {
        if (characterIndex + 1 !== sentenceArray.length) {
          if (
            sentenceArray[characterIndex + 1] === "∧" ||
            sentenceArray[characterIndex + 1] === "∨" ||
            sentenceArray[characterIndex + 1] === "→" ||
            sentenceArray[characterIndex + 1] === "↔"
          ) {
            setIsValid(false);
            setFeedback("Sua sentença lógica é inválida!");
            return;
          }
        } else {
          setIsValid(false);
          setFeedback("Sua sentença lógica é inválida!");
          return;
        }
      } else if (
        sentenceArray[characterIndex] === "(" ||
        sentenceArray[characterIndex] === ")"
      ) {
        if (
          (sentenceArray.includes("(") && !sentenceArray.includes(")")) ||
          (!sentenceArray.includes("(") && sentenceArray.includes(")"))
        ) {
          setIsValid(false);
          setFeedback("Sua sentença lógica é inválida!");
          return;
        } else if (characterIndex + 1 !== sentenceArray.length) {
          if (
            sentenceArray[characterIndex + 1] === "∧" ||
            sentenceArray[characterIndex + 1] === "∨" ||
            sentenceArray[characterIndex + 1] === "→" ||
            sentenceArray[characterIndex + 1] === "↔"
          ) {
            setIsValid(false);
            setFeedback("Sua sentença lógica é inválida!");
            return;
          }
        } else if (characterIndex + 1 === sentenceArray.length) {
          setIsValid(false);
          setFeedback("Sua sentença lógica é inválida!");
          return;
        }
      } else if (sentenceArray[characterIndex] === "¬") {
        if (characterIndex + 1 === sentenceArray.length) {
          setIsValid(false);
          setFeedback("Sua sentença lógica é inválida!");
          return;
        }
      } else {
        if (
          sentenceArray[characterIndex] === "P" ||
          sentenceArray[characterIndex] === "Q" ||
          sentenceArray[characterIndex] === "R"
        ) {
          if (
            characterIndex + 1 !== sentenceArray.length &&
            (sentenceArray[characterIndex + 1] === "P" ||
              sentenceArray[characterIndex + 1] === "Q" ||
              sentenceArray[characterIndex + 1] === "R" ||
              sentenceArray[characterIndex + 1] === "¬")
          ) {
            setIsValid(false);
            setFeedback("Sua sentença lógica é inválida!");
            return;
          }
        }
      }
    }

    setIsValid(true);
    setFeedback("Sua sentença lógica é válida!");
  };

  const handleSentence = (event) => {
    setSentence(event.target.value);
  };

  const handleCalculateSize = () => {
    let mySentence = sentence;
    mySentence = mySentence.replace("(", "");
    mySentence = mySentence.replace(")", "");
    setMode("calculate");
    setFeedback("O tamanho da sua fórmula é de: " + mySentence.length);
  };

  return (
    <HomeContainer>
      <Container>
        <div className="description">
          <div className="appresentation">
            <p><b>Nome:</b> Lucas Oliveira Silva</p>
            <p><b>Matrícula:</b> 0040498</p>
            <p><b>Disciplina:</b> Lógica para Ciência da Computação</p>
          </div>
          <h3>
            Olá, seja bem vindo ao seu Manipulador de Sentenças Lógicas. Siga as
            regras elencadas na lista abaixo e digite sua sentença no box
            abaixo. Logo após, selecione a função que preferir clicando em algum
            dos botões azuis.
          </h3>
        </div>
        <div className="rules">
          <h3>Regras:</h3>
          <ul>
            <li>
              É permitido o uso de somente 2 pontos de pontuação("(", ")").
            </li>
            <li>Utilizar só uma vez cada símbolo de pontuação;</li>
            <li>
              É permitido o uso de somente três símbolos proposicionais (P,
              Q,R);
            </li>
            <li>Tamanho máximo de cada fórmula é de 12.</li>
          </ul>
        </div>
        <div className="logical-dictionary">
          <Button onClick={() => handleDictionary("¬")}>¬</Button>
          <Button onClick={() => handleDictionary("∧")}>∧</Button>
          <Button onClick={() => handleDictionary("∨")}>∨</Button>
          <Button onClick={() => handleDictionary("→")}>→</Button>
          <Button onClick={() => handleDictionary("↔")}>↔</Button>
          <Button onClick={() => handleDictionary("(")}>(</Button>
          <Button onClick={() => handleDictionary(")")}>)</Button>
          <Button onClick={() => handleDictionary("P")}>P</Button>
          <Button onClick={() => handleDictionary("Q")}>Q</Button>
          <Button onClick={() => handleDictionary("R")}>R</Button>
        </div>
        <div className="sentence-box">
          <Input
            placeholder="Digite aqui..."
            value={sentence}
            onChange={(e) => handleSentence(e)}
          />
          <Button onClick={() => setSentence('')}>Limpar</Button>
        </div>

        <div className="buttons-box">
          <Button onClick={() => handleValidCheck()}>Verificar Validade</Button>
          <Button onClick={() => handleCalculateSize()}>
            Calcular o tamanho da Fórmula
          </Button>
        </div>
        <div className="feedback-text">
          {mode === "calculate" && (
            <div className="result">
              <FaCalculator />
              <span>{feedback}</span>
            </div>
          )}
          {mode === "valid" && isValid && (
            <div className="success">
              <FaRegCheckCircle />
              <span>{feedback}</span>
            </div>
          )}
          {mode === "valid" && !isValid && (
            <div className="fail">
              <FaRegTimesCircle />
              <span>{feedback}</span>
            </div>
          )}
        </div>
      </Container>
    </HomeContainer>
  );
}

export default Home;
