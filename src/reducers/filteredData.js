import {
    UPDATE_FILTERED_DATA
} from '../actions/types';

export const filteredData =(state = [], action) => {
    switch(action.type){
        case UPDATE_FILTERED_DATA: 
            return action.payload;
        default : 
            return state;
    }
}