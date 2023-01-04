const init =
 [
 ];
export default function favMoviesReducers(state = init , action) {
 switch(action.type){
     case "SET_MOVIES":
         return [
           ...state , 
           action.payload
         ]
     case "DEL_MOVIE":
       state.forEach((item)=>{
         console.log(item.id)
         console.log(action.payload)
         if (item.id === action.payload){
           let x = state.indexOf(item)
           state.splice(x ,1)
         }
       })
       return state
         default:
             return state;
 }
}
