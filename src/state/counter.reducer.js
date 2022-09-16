import { INCREMENT, DECREMENT } from './counter.types';


    const INITIAL_STATE = {

        count: 0,
    };

    const reducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

            case INCREMENT:
            console.log('INCREMENT')
               return {

                 ...state, count: action.payload,

               };

            case DECREMENT:
                console.log('DECREMENT')

               return {
                ...state, count: action.payload,

               };

             default: return state;

        }

    };

    export default reducer;