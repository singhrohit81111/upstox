const initialState = [];

export const modifyData = (state = initialState,action) => {
    switch (action.type) {
        case 'add': {
            return[...state,action.payload];
        }
        case "delete":{
            const z=state.filter(stock=>{
                return stock.id!=action.payload.id;
            })
            return [...z];
        }
        default:return state;
    }

}