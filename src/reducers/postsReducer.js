export default (state = [], action) => {
    if (action.type === 'FETCH_POSTS') {
        return action.payload
    }

    return state;
};

// or it could be like that with a switch
//
//     export default (state = [], action) => {
//         switch (action.type) {
//             case 'FETCH_POSTS':
//                 return action.payload;
//             default:
//                 return state;
//         }
//     };