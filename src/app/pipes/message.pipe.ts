import { Pipe, PipeTransform } from "@angular/core";

/**
 * Return the MIDI message type based on the first MIDI message byte
 */
@Pipe({
  name: "message"
})
export class MessagePipe implements PipeTransform {
  transform(value: number): any {
    // TODO: this shoul take only analyze first 4 bits
    // the other 4 bits doesn't have to be always 0
    // tslint:disable-next-line:no-bitwise
    switch (value >> 4) {
      case 8: // 1000xxxx
        return "Note Off";
      case 9: // 1001xxxx
        return "Note On";
      case 10: // 1010xxxx
        return "Polyphonic Aftertouch";
      case 11: // 1011xxxx
        return "Control Change";
      case 12: // 1100xxxx
        return "Program Change";
      case 13: // 1101xxxx
        return "Channel Pressure (Aftertouch)";
      case 14: // 1110xxxx
        return "Pitch Wheel Change (Pitch Bend)";
      default:
        return null;
    }
  }
}
