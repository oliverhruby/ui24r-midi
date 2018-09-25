import { Command } from "./command.model";

/**
 * Definition of a connected device
 */
export interface Device
{
    Name: string;
    Commands: Command[];
}