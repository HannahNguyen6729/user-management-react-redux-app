
import {SIGN_UP, DELETE_USER, EDIT_USER_INFO, UPDATE_USER_INFO, TURN_OFF_DISABLED, TURN_ON_DISABLED} from '../Types/ManageUserTypes';
const initialState = {
    userArr: [
        {id: 1,account:'Shi', password:'1', name: 'Shinobu',email: 'shinobu@gmail.com', phone: '0418398578', type: 'customer'},
        {id: 2,account:'Nezu',password:'12', name: 'Nezuko',email: 'nezuko@gmail.com', phone: '0418328578', type: 'customer'},
        {id: 3,account:'Tanj',password:'123', name: 'Tanjiro',email: 'tanjiro@gmail.com', phone: '0486398279', type: 'customer'}
    ],
    editedUserInfo: {
        id: 0,account:'Dou', password:'1234', name: 'Douma',email: 'douma@gmail.com', phone: '0489576890', type: 'customer'
    },
    disabled: true,
};

const ManageUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:{
            let userArrUpdate= [...state.userArr];
            //let newUser = {...action.payload, id: Date.now()}
            userArrUpdate = [...userArrUpdate, action.payload];
            return {...state, userArr:userArrUpdate};
        }
        case DELETE_USER:{
            let userArrUpdate = [...state.userArr];
            userArrUpdate = userArrUpdate.filter(user => user.id !== action.payload);
            return {...state, userArr:userArrUpdate};
        }
        case EDIT_USER_INFO:{
            return {...state, editedUserInfo: action.payload};
        }
        case UPDATE_USER_INFO:{
            state.editedUserInfo= action.payload;
            let userArrUpdate= [...state.userArr];
            //update userArr
            let index = userArrUpdate.findIndex(item => item.id === action.payload.id);
            if(index!==-1){
                userArrUpdate[index]= state.editedUserInfo;
            }
            //update editedUserInfo
            state.editedUserInfo = {id: -1,account:'', password:'', name: '',email: '', phone: '', type: '' }
            return {...state, userArr: userArrUpdate};
        }
        case TURN_OFF_DISABLED:{
            return {...state, disabled: action.payload};
        }
        case TURN_ON_DISABLED:{
            return {...state, disabled: action.payload};
        }
        default: return {...state};
    }
}
export default ManageUserReducer;
