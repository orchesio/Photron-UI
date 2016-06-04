let ActionTypes = {};

[
    'REQUEST_NODES',
    'REQUEST_NODES_SUCCESS',
    'REQUEST_NODES_FAIL',

    'REQUEST_CLUSTERS',
    'REQUEST_CLUSTER',
    'ADD_CLUSTER'


].forEach(function (actionType) {
  ActionTypes[actionType] = actionType;
});

export default ActionTypes;
