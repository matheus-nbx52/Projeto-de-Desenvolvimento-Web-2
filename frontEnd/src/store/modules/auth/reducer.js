import * as types from '../types';

const initialState = {
  isAuthenticate:false,
  token:'',
  user:{},
  isLoading:false

  
};
// eslint-disable-next-line default-param-last
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:{
      console.log('reducer',action.payload)
      return state

    }
    case types.LOGIN_FAIL:{
      const newState = {...initialState}
      return newState
      

    }

    case types.LOGIN_SUCCESS:{
      const newState = {...state}
      newState.isAuthenticate = true
      newState.token = action.payload.token
      newState.user = action.payload.user
      return newState
    }

    default:{
      return state
    }
   
  }
}
