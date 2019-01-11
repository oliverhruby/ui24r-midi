/**
 * MIDI message
 */
export interface Message {
    Date: Date;
    Channel: number;
    Status: number;
    Data1: number;
    Data2: number;
}
