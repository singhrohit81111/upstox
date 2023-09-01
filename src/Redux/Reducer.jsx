const initialState = [];

export const modifyData = (state = initialState,action) => {
    switch (action.type) {
        case 'add': {
            const findIndex = state.findIndex(element => { return element.id === action.payload.id });
            console.log(findIndex);
            if (findIndex > -1) return [...state];
            else {
                return [...state, action.payload];
            }
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