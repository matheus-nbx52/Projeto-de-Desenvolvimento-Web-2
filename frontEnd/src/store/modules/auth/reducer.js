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
    case types.LOGIN_SUCCESS:{
      console.log('reducer',action.payload)
      return state

    }
    case types.LOGIN_FAIL:{
      const newState = {...initialState}
      return newState
      

    }

    default:{
      return state
    }
   
  }
}
