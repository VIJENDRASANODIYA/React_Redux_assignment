import changeTheNumber from "./upDown";
import {combineReducers} from "redux";
import { darkReducer } from "./upDown";

const rootReducer=combineReducers({
    changeTheNumber,
    darkReducer
   
    
});
export default rootReducer;
