import { CREATE_POST, EDIT_POST, UPDATE_POST, DELETE_POST } from './action-types'

export const Create = (data) => {
   
    return {
        type: CREATE_POST,
        payload: data
    }
}

export const Edit = (data) => {
    return {
        type: EDIT_POST,
        payload: data
    }
}

export const UpdatePost = (data) => {
    return {
        type: UPDATE_POST,
        payload: data
    }
}

export const Delete = (data) => {
    return {
        type: DELETE_POST,
        payload: data
    }
}
