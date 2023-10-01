const MissionUtils = require("@woowacourse/mission-utils");

const validate = (number) => {
    if (number.length !== 3) throw new Error("[ERROR]")
}

const endValidate = (number) => {
    const correct = [1,2];
    if (!correct.includes(parseInt(number))) throw new Error("[ERROR]")
}

const makeNumber = () => {
    const computer = [];
    while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
            computer.push(number);
        }
    }
    return computer
}

const checking = (win,check) => {
    const strike = checkStrike(win,check);
    const ball = checkBall(win,check,strike);
    if (strike === 0 && ball === 0) return '낫싱';
    if (strike === 0) return `${ball}볼`;
    if (ball === 0) return `${strike}스트라이크`;
    return `${ball}볼 ${strike}스트라이크`;

}

const checkStrike = (win,check) => {
    let strike = 0;
    for (let i in win){
        if (win[i] == check[i]) strike += 1;
    }
    return strike;
}

const checkBall = (win,check,strike) => {
    let ball = 0;
    for (let i of check){
        if (win.includes(parseInt(i))) ball += 1;
    }
    return ball - strike;
}


module.exports = {
    makeNumber,
    checking,
    validate,
    endValidate
}