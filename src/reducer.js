import * as actions from './actionTypes.js';
let lastID=0;
export default function reducer(state=[],action){
    if(action.type===actions.BUG_ADDED){
        return [
            ...state,
            {
                id:++lastID,
                description:action.payload.description,
                resolved:false
            }
        ]
    }
    else if(action.type===actions.BUG_REMOVED){
        return state.filter(bug=>bug.id!==action.payload.id)
    }
    else if(action.type === actions.BUG_RESOlVED){
        return [
            state.map(bug=>
                bug.id!==action.payload.id
                ?bug
                :{...bug,resolved:true}
                )
            ]
    }
    return state;
}