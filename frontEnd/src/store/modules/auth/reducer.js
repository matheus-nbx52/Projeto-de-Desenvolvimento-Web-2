import * as types from '../types';
// import { useNavigate } from 'react-router-dom';

const initialState = {
  isAuthenticate:false,
  token:'',
  user:{},
  isLoading:false

  
};
// eslint-disable-next-line default-param-last
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  // const navigate = useNavigate()
  switch (action.type) {
    case types.LOGIN_REQUEST:{
      const newState = {...initialState}
      newState.isLoading = true
      return newState
    }
    case types.LOGIN_FAIL:{
      const newState = {...initialState}
      newState.isLoading = false
      return newState
      

    }

    case types.LOGIN_SUCCESS:{
      const newState = {...state}
      newState.isAuthenticate = true
      newState.token = action.payload.token
      newState.user = action.payload.user
      newState.isLoading = false
      return newState
    }

    default:{
      return state
    }
   
  }
}
