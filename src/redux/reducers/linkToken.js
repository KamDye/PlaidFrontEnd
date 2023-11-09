const initialState = {
    linkToken: null
  };
  
  const linkTokenReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LINK_TOKEN':
        return {
          ...state,
          linkToken: action.payload
        };
      default:
        return state;
    }
  };
  
  export default linkTokenReducer;