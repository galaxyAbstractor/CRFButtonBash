import Button from "./hw/Button";
import LedStrip from "./hw/LedStrip";

class Game {
    constructor(
        mainWindow,
        ledstripPin,
        leftButtonPin,
        rightButtonPin,
        startButtonPin
    ) {
        this.mainWindow = mainWindow;

        this.ledStrip = new LedStrip(ledstripPin);
        this.leftButton = new Button(leftButtonPin);
        this.rightButton = new Button(rightButtonPin);
        this.startButton = new Button(startButtonPin);

        this.leftButton.on("pressed", this.countPress.bind(this));
        this.rightButton.on("pressed", this.countPress.bind(this));
        this.startButton.on("pressed", this.start.bind(this));

        this.gameTimer = setInterval(this.tick.bind(this), 100);

        this.remainingTimer = null;

        this.remainingTime = 0;

        this.init();
    }

    init() {
        this.presses = 0;
        this.gameRunning = false;
    }

    tick() {
        this.sendCurrentState();

        this.ledStrip.draw(this.presses);
    }

    decreaseTime(tim) {
        this.remainingTime--;
        if (this.remainingTime <= 0) {
            clearInterval(this.remainingTimer);
        }
    }

    start() {
        if (this.gameRunning) return;
        this.gameRunning = true;
        this.presses = 0;
        this.remainingTime = 20;
        this.ledStrip.reset();
        setTimeout(this.stop.bind(this), 20 * 1000);
        this.remainingTimer = setInterval(this.decreaseTime.bind(this), 1000);
    }

    stop() {
        this.gameRunning = false;
    }

    countPress() {
        if (this.gameRunning) {
            this.presses++;
            this.sendCurrentState();
        }
    }

    sendCurrentState() {
        this.mainWindow.send("update", {
            presses: this.presses,
            remainingTime: this.remainingTime
        });
    }
}

export default Game;