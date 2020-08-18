const Gpio = require('onoff').Gpio;
const EventEmitter = require('events');

class Button extends EventEmitter {
  constructor(pin) {
    super();

    this.button = new Gpio(pin, 'in', 'rising', {debounceTimeout: 10});

    this.button.watch((err, value) => {
      this.emit("pressed");
    });
  }

}

export default Button;
