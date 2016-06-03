
export const NODE_REQUEST = 'NODE_REQUEST'
export const NODE_SUCCESS = 'NODE_SUCCESS'
export const NODE_FAILURE = 'NODE_FAILURE'

const CALL_API = Symbol('Call API')

function fetchNodes() {
    return {
        [CALL_API]: {
            types: [ NODE_REQUEST, NODE_SUCCESS, NODE_FAILURE],
            endpoint: `v1/nodes`,
            sch

        }

    }


}

export function loadNodes() {
    return (dispatch, getState) => {
        return dispatch(fetchNodes())
    }

}