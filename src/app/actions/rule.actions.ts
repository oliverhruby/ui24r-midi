import { Action } from '@ngrx/store';
import { Rule } from '../models/rule.model';

/**
 * All the constants to define our actions
 */
export const ADD_RULE = '[Rules] add rule';

/**
 * Implementation of all actions that we handle
 */
export class Add implements Action {
    readonly type = ADD_RULE;

    constructor(public rule: Rule) {}
}

export type Actions = Add;
