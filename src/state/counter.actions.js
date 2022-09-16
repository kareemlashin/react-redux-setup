

    import { INCREMENT, DECREMENT } from './counter.types';


    export const increaseCounter = (data) => {

        return {

            type: INCREMENT,
            payload:data

        };

    };

    export const decreaseCounter = (data) => {

        return {

           type: DECREMENT,
           payload:data

        };

    };