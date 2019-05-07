/**
 * Reducers for the frequency report page.
 */
import initialState from '../state'

export default function session(state = initialState.session, action) {
    switch (action.type) {
        case 'HELLO_ACTION':{
            return {
                ...state,
                helloResponse: action.data
            }
        }

        case 'POST_ACTION':{
            return {
                ...state,
                postResponse: action.data
            }
        }

        case 'CMPNY_ACTION':{
            return {
                ...state,
                companyResponse: action.data
            }
        }

        case 'POST_COMPANY_ACTION':{
            return {
                ...state,
                postCompanyResponse: action.data
            }
        }


        default:
            return state
    }
}
