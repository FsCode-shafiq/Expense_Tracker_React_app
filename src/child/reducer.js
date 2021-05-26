const Reducer = (state, action)=>{
    console.log(state);
    console.log(action);
    
    state.push(action);
    return state;
}

export default Reducer;
