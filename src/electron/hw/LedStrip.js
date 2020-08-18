const Socket = require("net").Socket;
const createOPCStream = require("opc");
const createStrand = require("opc/strand");

class LedStrip {
  constructor(pin) {
    this.socket = new Socket();
    this.socket.setNoDelay();
    this.socket.connect(7890, "localhost");

    this.opcStream = createOPCStream();

    this.opcStream.pipe(this.socket);

    this.strand = createStrand(64);

    this.presses = 0;

    this.draw.bind(this);

  }

  draw(presses) {

    if (presses !== 0) {
      this.presses = presses;
    }

    let pixels = Math.min(Math.floor((this.presses / 300) * 63), 63);

    for (let pixel = 0; pixel <= pixels; pixel++) {
      this.strand.setPixel(pixel, 0, 255, 0);
    }

    this.opcStream.writePixels(0, this.strand.buffer);
  }

  reset() {
    this.presses = 0;

    for (let pixel = 0; pixel <= 63; pixel++) {
      this.strand.setPixel(pixel, 0, 0, 0);
    }

    this.draw(0);
  }

}

export default LedStrip;
