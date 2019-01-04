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

  /** Rules defining the controller logic */
  Rules: Rule[];

  /** Target device URL  */
  Target: string;
}
