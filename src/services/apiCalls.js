import axios from "axios";

const ourRequest = axios.CancelToken.source()

export default async (method) => {
        return new Promise((resolve, reject) => {
            callApi(method, resolve, reject)
        })
}

export async function callApi(method, resolve, reject) {

    let headers = {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
    }

    let axiosData = {
        method: method.apiType,
        headers: headers,
        url: method.type,
        cancelToken: ourRequest.token
    }

    console.log(JSON.stringify(headers));
    console.log(method.apiType + ' >>>>> ' + axiosData.url);
    console.log("PAYLOAD >>>>> " + JSON.stringify(method.payload));

    if (method.apiType === 'GET') {
        axiosData.timeout = 10000
    }
    else {
        var formData = await getFormData(method.payload)
        axiosData.data = formData
        axiosData.timeout = 20000
    }

    try {
        let response = await axios(axiosData)
        checkResponse(response, resolve, reject)
    } catch (err) {
        let response = err.response;
        if (response) {
            checkResponse(response, resolve, reject)
        }
        else {
            reject(err.message ? { error: err.message } : { error: err.message });
            return
        }
    }
}

function checkResponse(response, resolve, reject) {
    console.log("RESPONSE STATUS >>>>> " + response.status);
    console.log("RESPONSE >>>>> " + JSON.stringify(response.data));
    if (response.status === 200 || response.status === 201 || response.status === 202 || response.status === 204) {
        resolve(response.data || {});
        return
    }
    else if (response.status === 401) {
        ourRequest.cancel()
        reject(response.data);
        return
    }
    else if (response.status === 400) {
        reject(response.data);
        return
    }
    else if (response.status === 500) { 
        reject({ err: "Something Went Wrong" });
        return
    }
    else {
        reject(response);
        return
    }
}

function getFormData(data) {
    let formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
            formData.append(`${key}`, value);
    }
    return formData
}