/**
 * Controller rule defines commands to apply on specific events
 */
export interface Rule {

  /**
   * Unique identifier
   */
  Id: string;

  /**
   * Rule name
   */
  Name: string;

  /**
   * Only actives rules will be processed
   */
  Active: boolean;

  /**
   * Stop processing rules after applying this rule
   */
  StopProcessing: boolean;

  /**
   * Value transformation
   */
  Formula?: string;

  /**
   * MIDI control number
   */
  Control?: number;

  /**
   * Command to send to the output
   */
  Command?: string;
}
