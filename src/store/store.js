import {createStore} from 'redux';


//Action Types
const ADD = 'tasks/ADD_TASK';
const REMOVE = 'tasks/REMOVE_TASK'

//Action Creators
export const addTask = ({firstNameLastName, telephone, email, category}) => ({
    type: ADD,
    firstNameLastName,
    telephone,
    email,
    category
})

export const removeContact = (contactId) => ({
    type: REMOVE,
    contactId

})


const initialState = {
    contacts: [
    {
        id: 1,
        firstNameLastName: 'Łukasz Sztormowski',
        telephone: 555666777,
        email: 'qki@qki.pl',
        category: 'rodzina',
    },
    {
        id: 2,
        firstNameLastName: 'Maciej Sztormowski',
        telephone: 223332223,
        email: 'makec@mistrz.pl',
        category: 'rodzina',
    },
    {
        id: 3,
        firstNameLastName: 'Milan Sztormowski',
        telephone: 444322,
        email: 'milan@mistrz.pl',
        category: 'rodzina',
    }
]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            const newContact = {
                id: Date.now().toString(32),
                firstNameLastName: action.firstNameLastName,
                telephone: action.telephone,
                email: action.email,
                category: action.category
            }
            return {
                ...state,
                contacts: state.contacts.concat(newContact)

            }

        case REMOVE:
            const updatedContactArray = state.contacts.filter( contact => contact.id !== action.contactId)
            return {
                ...state,
                contacts: updatedContactArray
            }

        default:
            return state
    }
}


const store = createStore(reducer);


export default store