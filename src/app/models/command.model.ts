/**
 * Command to be executed on target device
 */
export interface Command {
  Id: number;
  Name: string;
  Category?: string;
  Code: string;
}
