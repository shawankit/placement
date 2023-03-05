var baseUrl = 'http://timwm.zetaweb.in/placement-api';
var HttpService = {
    postRequest (url, data, successCallback, failureCallback) {
        $.ajax({
            url: `${baseUrl}${url}`,
            type: 'POST',
            data: JSON.stringify(data),
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            contentType: 'application/json',
            success: function (response) {
                successCallback(response);
            },
            error: function (response) {
                failureCallback(response);
            }
        });
    },

    getRequest (url, successCallback, failureCallback) {
        $.ajax({
            url: `${baseUrl}${url}`,
            type: 'GET',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            success: function (response) {
                successCallback(response);
            },
            error: function (response) {
                failureCallback(response);
            }
        });
    },

    putRequest (url, data, successCallback, failureCallback) {
        $.ajax({
            url: `${baseUrl}${url}`,
            type: 'PUT',
            data: JSON.stringify(data),
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            contentType: 'application/json',
            success: function (response) {
                successCallback(response);
            },
            error: function (response) {
                failureCallback(response);
            }
        });
    },

    deleteRequest (url, successCallback, failureCallback) {
        $.ajax({
            url: `${baseUrl}${url}`,
            type: 'DELETE',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            success: function (response) {
                successCallback(response);
            },
            error: function (response) {
                failureCallback(response);
            }
        });
    },


    patchRequest (url, data, successCallback, failureCallback) {
        $.ajax({
            url: `${baseUrl}${url}`,
            type: 'PATCH',
            data: JSON.stringify(data),
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            contentType: 'application/json',
            success: function (response) {
                successCallback(response);
            },
            error: function (response) {
                failureCallback(response);
            }
        });
    },

    getHtmlTemplate (url, successCallback, failureCallback) {
        $.ajax({
            url: `${window.location.origin}${url}`,
            type: 'GET',
            contentType: 'text/html',
            success: function (response) {
                successCallback(response);
            },
            error: function (response) {
                failureCallback(response);
            }
        });
    }
}

