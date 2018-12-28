import { Command } from "./command.model";
import { InputEvent } from "./inputevent.model";
import { Rule } from "./rule.model";

/**
 * Profile represents a single transformation configuration
 */
export interface Profile {
  /** Profile identifier */
  Id: string;

  /** Name describing the profile */
  Name: string;

  /** Some details about the profile */
  Description: string;

  /** Events to listen to on the source device */
  Events: InputEvent[];

  /** commands to be sent to target device */
  Commands: Command[];

  /** target device URL  */
  Target: string;

  /** transformation rules  */
  Rules: Rule[];
}
