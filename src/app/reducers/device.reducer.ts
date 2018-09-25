import { Device } from './../models/device.model'
import * as DeviceActions from './../actions/device.actions'

// Section 1
const initialState: Device = {
    Name: 'Pokus',
    Commands: null
}

// Section 2
export function reducer(state: Device[] = [initialState], action: DeviceActions.Actions) {

    // Section 3
    switch(action.type) {
        case DeviceActions.ADD_DEVICE:
            return [...state, action.device];
        default:
            return state;
    }
}