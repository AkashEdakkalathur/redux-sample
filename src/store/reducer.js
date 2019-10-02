const initialState = {
    age:21
};

const reducer = (state = initialState, action)=>{

    const newState={...state}
    console.log(action.type);
    if(action.type === "age_up"){
        newState.age++;
     }
    if(action.type === "age_down"){
        newState.age--;
    }
    return newState;
}
export default reducer;