import ClientUtils from '../../clientUtils'



export function initializeSessionData(self,receiveActionType,body, method,relURL) {
    return dispatch => {
        requestSessionData(self,dispatch,receiveActionType,body, method,relURL)

    }
}

function requestSessionData(self,dispatch, receiveActionType,body, method,relURL) {
    ClientUtils.performFetch(relURL,body, method)
        .then(response => response.json())
        .then(data => dispatch(receiveSessionData(receiveActionType, data)))
        .then(data => self.refreshState(receiveActionType,data.data))
        .catch(error => handleError(self,error, `Failed to retrieve ${receiveActionType}`,receiveActionType))
}

function receiveSessionData(receiveActionType, data) {
  console.log(receiveActionType+' Data received : '+JSON.stringify(data));
    return {
        type: receiveActionType,
        data
    }
}

/**
 * TODO: DRY up and put in a common utility class
 */
function handleError(self,error, details,receiveActionType) {
    self.refreshState(receiveActionType,"Error : "+error+" -> "+details);
}
