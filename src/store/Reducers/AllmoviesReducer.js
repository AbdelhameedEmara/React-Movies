const init = {
    list : []
}


export default function AllmoviesReducer(state = init , action) {
    
    switch(action.type){

        case "GET_MOVIES":
        return {...state ,list : action.payload }
              
              
            
        default:
                return state;
    }
   }