
export const Api_Notification_Msg = {
    loading: {
        title: 'Loading .....',
        message: 'Loading data, please wait'
    },
    success: {
        title: 'Success !!!',
        message: 'Data successfully loaded',
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetching data from server',
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while parsing request data',
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect to the server, please check your internet connectivity',
    }
}
//api service calls

export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST' },
    userLogin: { url: '/login', method: 'POST' }
}