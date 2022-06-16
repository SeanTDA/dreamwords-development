
import './App.css';
import React, { createContext, useEffect, useState } from "react";

import Header from "./components/Header.js";
import Game from "./components/Game.js";
import Footer from "./components/Footer.js";
import HelpMenu from "./components/ui_components/HelpMenu.js";

import { getHydranoidSpungus, getSprondlemonusTrobian } from './levelData';

import { checkGameLost, checkGameWon } from './gameOver';

export const AppContext = createContext();









function App() {

  // CONTEXT VARIABLE DECLARATION

  const [gameState, setGameState] = useState("LOADING");
  const [levelData, setLevelData] = useState({
    goalPhrase: "...",
    imageURL: "images/loading-image.png"
  });
  const [pressedLetters, setPressedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [isLastLetterCorrect, setIsLastLetterCorrect] = useState(-1);
  const [completedLevel, setCompletedLevel] = useState(-1);
  const [streak, setStreak] = useState(-1);
  const [superStreak, setSuperStreak] = useState(-1);
  const [superStreakHighScore, setSuperStreakHighScore] = useState(-1);
  const [acceptSelectLetter, setAcceptSelectLetter] = useState(true);
  const [gameTitle, setGameTitle] = useState("");
  const [gameURL, setGameURL] = useState("");
  const [levelIndex, setLevelIndex] = useState(-1);
  const [livesCompletedPulse, setLivesCompletedPulse] = useState([-1, -1, -1]);
  const [helpMenuShown, setHelpMenuShown] = useState(-1);
  const [history, setHistory] = useState({}); // { "daysPlayed": [0,1,2,3,4,8,9,34,35], "results" : { 0:{"correctLetters":[], "wrongLetters"[]},  1:{"correctLetters":[], "wrongLetters"[]}, ...  } }  



  // CONSTANTS
  const GAME_TITLE = "Daydreams";
  const GAME_URL = "www.blah.com";
  const DEMO_MODE = false;
  const BUILD_MODE = "BUILD"; // BUILD / PROD
  const INTERVAL = 1; // 0 = day, 1 = minute
  const KEY_DELAY_MS = 200;


  // EVENTS

  const onSelectLetter = (keyVal) => {

    keyVal = keyVal.toLowerCase();


    if (gameState !== "RUNNING") return; // ignore key inputs if game is not running
    if (helpMenuShown === 1) return; // ignore key inputs if help menu is shown

    if (pressedLetters.includes(keyVal)) return; // ignore key inputs if letter has been pressed

    if (!acceptSelectLetter) return;
    setAcceptSelectLetter(false);

    setTimeout(() => {
      setAcceptSelectLetter(true);
    }, KEY_DELAY_MS);

    // adds it to the pressed keys
    setPressedLetters((prev) => [...prev, keyVal]);

    // checks if its wrong or right. Adds it to that
    if (levelData.goalPhrase.toLowerCase().includes(keyVal)) {
      setCorrectLetters((prev) => [...prev, keyVal]);
      setIsLastLetterCorrect(1);
    } else {
      setWrongLetters((prev) => [...prev, keyVal]);
      setIsLastLetterCorrect(0);
    }

  }



  console.log(">>>>>>>>>>> todo: once you win / lose, add end screen");
  console.log(">>>>>>>>>>> todo: add [?] help guide with example carousel"); // should explain streak / superstreak
  console.log(">>>>>>>>>>> todo: better lives UI");
  console.log(">>>>>>>>>>> todo: super streak high score");
  console.log(">>>>>>>>>>> todo: get images onto AWS");
  console.log(">>>>>>>>>>> todo: add button to load demo showoff mode");
  console.log(">>>>>>>>>>> todo: keep a running track of how you went everyday  (array of {day, result} ) for prosperity / future proofing");
  console.log(">>>>>>>>>>> todo: Test help menu when a first time player starts");

  console.log(">>>>>>>>>>> todo: test to see if the daily system works:  [daily image], [building streak / super streak], [skipping a day]");
  console.log(">>>>>>>>>>> todo: better streak icons UI");
  console.log(">>>>>>>>>>> todo: add proper footer stuff");
  console.log(">>>>>>>>>>> todo: do a test deploy");
  console.log(">>>>>>>>>>> todo: test mobile share button copy (android / ios)");
  console.log(">>>>>>>>>>> todo: [EXTERNAL] --- ensure ergonomic keyboard/scaling on mobile");
  console.log(">>>>>>>>>>> todo: [EXTERNAL] --- fix letters moving on new line");
  console.log(">>>>>>>>>>> todo: [EXTERNAL] --- ensure its all web compliant/security checks");




  // ------ INITIALISATION

  const todayTimestamp = new Date();

  let todayDay = new Date();

  if (INTERVAL === 0)
    todayDay = new Date(todayTimestamp.getFullYear(), todayTimestamp.getMonth(), todayTimestamp.getDate()); // day refresh
  if (INTERVAL === 1)
    todayDay = new Date(todayTimestamp.getFullYear(), todayTimestamp.getMonth(), todayTimestamp.getDate(), todayTimestamp.getHours(), todayTimestamp.getMinutes());   // minutes refresh





  useEffect(() => {
 //   localStorage.clear();


  //  localStorage.clear("SAVE_HISTORY");

    setGameTitle(GAME_TITLE);
    setGameURL(GAME_URL);

    // Load Level
    getHydranoidSpungus(todayDay, DEMO_MODE, INTERVAL).then((hybronuSprillabrib) => {
      setLevelIndex(hybronuSprillabrib);
      console.log("image index: " + hybronuSprillabrib);
      getSprondlemonusTrobian(hybronuSprillabrib).then((dailyLevelData) => {
        setGameState("RUNNING");
        setLevelData(dailyLevelData);
      }).then(() => {


        // Check to see if new day has passed (compare it to the previous save time stamp and update it)
        let previousPageOpenDate = new Date(localStorage.getItem(BUILD_MODE+"_"+"SAVE_TIMESTAMP_OPEN")); // todo < test with a different thing (as a new user)
        if (previousPageOpenDate === null)
          previousPageOpenDate = todayTimestamp;


        let previousPageOpenDay = new Date();

        // get a new date with just the DAY
        if (INTERVAL === 0)
          previousPageOpenDay = new Date(previousPageOpenDate.getFullYear(), previousPageOpenDate.getMonth(), previousPageOpenDate.getDate()); // day previous

        if (INTERVAL === 1)
          previousPageOpenDay = new Date(previousPageOpenDate.getFullYear(), previousPageOpenDate.getMonth(), previousPageOpenDate.getDate(), previousPageOpenDate.getHours(), previousPageOpenDate.getMinutes()); // minute previous


        let oneDayAfterPreviousPageOpenDay = new Date();


        if (INTERVAL === 0)
          oneDayAfterPreviousPageOpenDay = new Date(previousPageOpenDay.getFullYear(), previousPageOpenDay.getMonth(), previousPageOpenDay.getDate() + 1);

        if (INTERVAL === 1)
          oneDayAfterPreviousPageOpenDay = new Date(previousPageOpenDay.getFullYear(), previousPageOpenDay.getMonth(), previousPageOpenDay.getDate(), previousPageOpenDay.getHours(), previousPageOpenDay.getMinutes() + 1);


        let newDayArrived = previousPageOpenDay < todayDay;
        let moreThanOneNewDayArrived = oneDayAfterPreviousPageOpenDay < todayDay;

        // ensures every refresh will clear data
        if (DEMO_MODE)
          newDayArrived = true;


        console.log("Comparing days: " + previousPageOpenDay + "  " + todayDay);


        // If new day arrived, 
        if (newDayArrived) {
          // and the previous level hasnt been completed yet
          const saveDataPreviousCompletedLevel = localStorage.getItem(BUILD_MODE+"_"+"SAVE_COMPLETED_LEVEL");
          if (saveDataPreviousCompletedLevel != null && parseInt(saveDataPreviousCompletedLevel) === 0) {

            // reset streak
            if (!DEMO_MODE) {
              localStorage.setItem(BUILD_MODE+"_"+"SAVE_STREAK", 0);
              localStorage.setItem(BUILD_MODE+"_"+"SAVE_STREAK_SUPER", 0);
            }
          }

          // clear save data
          localStorage.setItem(BUILD_MODE+"_"+"SAVE_PRESSED_LETTERS", []);
          localStorage.setItem(BUILD_MODE+"_"+"SAVE_CORRECT_LETTERS", []);
          localStorage.setItem(BUILD_MODE+"_"+"SAVE_WRONG_LETTERS", []);
          localStorage.setItem(BUILD_MODE+"_"+"SAVE_COMPLETED_LEVEL", 0);
          console.log("!!!! New day arrived");
        }



        // if more than one day has passed since you last opened (skipped a day)
        if (moreThanOneNewDayArrived) {
          // reset streak
          if (!DEMO_MODE) {
            localStorage.setItem(BUILD_MODE+"_"+"SAVE_STREAK", 0);
            localStorage.setItem(BUILD_MODE+"_"+"SAVE_STREAK_SUPER", 0);
          }

        }


        // Update saved timestamp to now
        localStorage.setItem(BUILD_MODE+"_"+"SAVE_TIMESTAMP_OPEN", (new Date()).toString());

        // Load Save Data
        const saveDataCompletedLevel = localStorage.getItem(BUILD_MODE+"_"+"SAVE_COMPLETED_LEVEL");
        if (saveDataCompletedLevel !== null)
          setCompletedLevel(parseInt(saveDataCompletedLevel));

        const saveDataPressedLetters = localStorage.getItem(BUILD_MODE+"_"+"SAVE_PRESSED_LETTERS");
        if (saveDataPressedLetters !== null)
          setPressedLetters(saveDataPressedLetters);

        const saveDataCorrectLetters = localStorage.getItem(BUILD_MODE+"_"+"SAVE_CORRECT_LETTERS");
        if (saveDataCorrectLetters !== null)
          setCorrectLetters(saveDataCorrectLetters);

        const saveDataWrongLetters = localStorage.getItem(BUILD_MODE+"_"+"SAVE_WRONG_LETTERS");
        if (saveDataWrongLetters !== null)
          setWrongLetters(saveDataWrongLetters);

        const saveDataStreak = localStorage.getItem(BUILD_MODE+"_"+"SAVE_STREAK");
        if (saveDataStreak !== null)
          setStreak(parseInt(saveDataStreak));

        const saveDataSuperStreak = localStorage.getItem(BUILD_MODE+"_"+"SAVE_STREAK_SUPER");
        if (saveDataSuperStreak !== null)
          setSuperStreak(parseInt(saveDataSuperStreak));

        const saveDataSuperStreakHighScore = localStorage.getItem(BUILD_MODE+"_"+"SAVE_STREAK_SUPER_HIGH_SCORE");
        if (saveDataSuperStreakHighScore !== null)
          setSuperStreakHighScore(parseInt(saveDataSuperStreakHighScore));

        const saveDataHistory = localStorage.getItem(BUILD_MODE+"_"+"SAVE_HISTORY");
        if (saveDataHistory !== null)
          setHistory(JSON.parse(saveDataHistory));



        // Check to see if game is already won
        if (checkGameLost(wrongLetters)) {
          setGameState("GAME_LOST");
        } else if (checkGameWon(correctLetters, levelData.goalPhrase)) {
          setGameState("GAME_WON");
        }


        // Display the help menu for first time players
        const isFirstTime = localStorage.getItem(BUILD_MODE+"_"+"SAVE_FIRST_TIME");
        if (isFirstTime === null || parseInt(isFirstTime) === 0) {
          localStorage.setItem(BUILD_MODE+"_"+"SAVE_FIRST_TIME", 1);
          setHelpMenuShown(1);
        }

      });



    })

  }, []);


  // ------ CHECKERS

  // Letters Updated
  useEffect(() => {
    if (checkGameLost(wrongLetters)) {
      setGameState("GAME_LOST");
    } else if (checkGameWon(correctLetters, levelData.goalPhrase)) {
      setGameState("GAME_WON");
    }
  }, [correctLetters, wrongLetters]);



  // Game Completion Updates
  useEffect(() => {

    const isGameOver = gameState === "GAME_WON" || gameState === "GAME_LOST";
    if (isGameOver) {

      if (gameState === "GAME_WON") {
        setGameState("GAME_WON");

        // single fire on completion 
        if (completedLevel === 0) {

          // increase streak
          setStreak(streak <= 0 ? 1 : streak + 1);

          if (wrongLetters.length === 0)
            setSuperStreak(superStreak <= 0 ? 1 : superStreak + 1);
          else
            setSuperStreak(0);
        }
      }
      else if (gameState === "GAME_LOST") {

        // single fire on completion
        if (completedLevel === 0) {
          // break streak
          setStreak(0);
          setSuperStreak(0);
        }
      }


      // single fire on completion
      if (completedLevel === 0) {
        // ---- record history
        const currentHistory = history;


        let newHistory = {...currentHistory};
        
        // initialises if history is empty
        if (Object.keys(newHistory).length === 0) {
          newHistory["daysPlayed"] = [];
          newHistory["results"] = {};
        }

        // adds to history
        newHistory["daysPlayed"].push(levelIndex);

        const historyResult = {"correctLetters": correctLetters, "wrongLetters": wrongLetters};
        newHistory["results"][levelIndex] = historyResult;

        setHistory(newHistory);
      }


      // switches single fire latch (requires loading a new day to switch is back)
      setCompletedLevel(1);
    }




    // record history

  }, [gameState]);






  // Save Data
  useEffect(() => {
    if (pressedLetters.length === 0) return;
    localStorage.setItem(BUILD_MODE+"_"+"SAVE_PRESSED_LETTERS", pressedLetters);
  }, [pressedLetters]);
  useEffect(() => {
    if (correctLetters.length === 0) return;
    localStorage.setItem(BUILD_MODE+"_"+"SAVE_CORRECT_LETTERS", correctLetters);
  }, [correctLetters]);
  useEffect(() => {
    if (wrongLetters.length === 0) return;
    localStorage.setItem(BUILD_MODE+"_"+"SAVE_WRONG_LETTERS", wrongLetters);
  }, [wrongLetters]);

  useEffect(() => {
    if (streak === -1) return;
    if (DEMO_MODE) return;
    localStorage.setItem(BUILD_MODE+"_"+"SAVE_STREAK", streak);
    console.log("Streak is now: " + streak);
  }, [streak]);

  useEffect(() => {
    if (superStreak === -1) return;
    if (DEMO_MODE) return;
    localStorage.setItem(BUILD_MODE+"_"+"SAVE_STREAK_SUPER", superStreak);
  }, [superStreak]);

  useEffect(() => {
    if (superStreakHighScore === -1) return;
    if (DEMO_MODE) return;
    localStorage.setItem(BUILD_MODE+"_"+"SAVE_STREAK_SUPER_HIGH_SCORE", superStreakHighScore);
  }, [superStreakHighScore]);

  useEffect(() => {
    if (completedLevel === -1) return;
    localStorage.setItem(BUILD_MODE+"_"+"SAVE_COMPLETED_LEVEL", completedLevel);
  }, [completedLevel]);


  useEffect(() => {
    if (Object.keys(history).length === 0) return;
    localStorage.setItem(BUILD_MODE+"_"+"SAVE_HISTORY", JSON.stringify(history));
    console.log("History is saved as " + JSON.stringify(history));
  }, [history]);





  return (
    <div className="App">


      <AppContext.Provider value={{
        onSelectLetter,

        levelData, setLevelData,
        gameState, setGameState,
        pressedLetters, setPressedLetters,
        correctLetters, setCorrectLetters,
        wrongLetters, setWrongLetters,
        isLastLetterCorrect, setIsLastLetterCorrect,
        completedLevel, setCompletedLevel,
        streak, setStreak,
        superStreak, setSuperStreak,
        superStreakHighScore, setSuperStreakHighScore,
        setAcceptSelectLetter, acceptSelectLetter,
        gameTitle, setGameTitle,
        gameURL, setGameURL,
        levelIndex, setLevelIndex,
        livesCompletedPulse, setLivesCompletedPulse,
        helpMenuShown, setHelpMenuShown,
        history, setHistory
      }}>

        <Header />
        <Game />



        <HelpMenu />
      </AppContext.Provider>

    </div>);
}

//<Footer />
export default App;
