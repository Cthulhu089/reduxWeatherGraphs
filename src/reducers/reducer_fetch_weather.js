export default (state = null, action) =>{
    switch (action.type) {
      case: 'FETCH_WEATHER':
        return action.payload
    }

    return state;
}
