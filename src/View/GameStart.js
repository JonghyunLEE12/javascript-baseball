const App = require('../App');
const MissionUtils = require("@woowacourse/mission-utils");
const CONSTANTS = require("../Model/Constant");
const OUTPUT = require('../Model/OutputMsg');
const CON = require('../Controller/Controller');

class GameStart{
    constructor() {
        this.gameStart();
        this.checkingNumber();
        this.endGame();
    }
    gameStart() {
        MissionUtils.Console.print(`${OUTPUT.MSG.STARTGAME}`);
        CONSTANTS.NAMES.WIN_NUMBER = CON.makeNumber();
    }
    checkingNumber() {
        while (CONSTANTS.NAMES.WIN_NUMBER.join('') != CONSTANTS.NAMES.CHECK_NUMBER) {
            MissionUtils.Console.readLine(`${OUTPUT.MSG.INPUT_NUMBER}`,(number) =>{
                MissionUtils.Console.print(`${OUTPUT.MSG.INPUT_NUMBER} ${number}`);
                CONSTANTS.NAMES.CHECK_NUMBER = number;
                OUTPUT.MSG.CHECK_MSG = CON.checking(CONSTANTS.NAMES.WIN_NUMBER, CONSTANTS.NAMES.CHECK_NUMBER)
                MissionUtils.Console.print(`${OUTPUT.MSG.CHECK_MSG}`);

                if (OUTPUT.MSG.CHECK_MSG === '3스트라이크') return
            })
        }
    }
    endGame() {
        MissionUtils.Console.print(`${OUTPUT.MSG.END_MSG}`);
        MissionUtils.Console.print(`${OUTPUT.MSG.RE_GAME}`);
        MissionUtils.Console.readLine(`${OUTPUT.MSG.RE_GAME}`,(chose) => {
            MissionUtils.Console.print(`${chose}`);
            if (chose == 1) return
            if (chose == 2) {
                const newGame = new App();
                newGame.play();
            }
        })
    }

    
}

module.exports = GameStart;