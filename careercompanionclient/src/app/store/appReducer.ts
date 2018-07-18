import {ACTION_LOGOUT, ACTION_LOGIN} from './appActions';
export interface AppReducerState {
    login: boolean;
}

const initialState: AppReducerState = {
    login: false,
    // ...
};

export function reducer (state = initialState, action): AppReducerState {
    switch (action.Type) {
        case ACTION_LOGOUT:
            return{
                ...state,
                login: false
            };
        case ACTION_LOGIN:
            return{
                ...state,
                login: true
            };
    }
    return state;
}
