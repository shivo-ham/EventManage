import axios from 'axios';
let config = {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InVzZXJAdXNlci5jb20iLCJlbWFpbCI6InVzZXJAdXNlci5jb20iLCJVc2VyIjoiMSIsInJvbGUiOiJXYWl0ZXIiLCJuYmYiOjE2OTQ0NTU2MTYsImV4cCI6MTY5NDU0MjAxNiwiaWF0IjoxNjk0NDU1NjE2fQ.UlA-VZBn179a8DQL1KCs4FzywfjcOLTRzgH3O0mozbk',
        'Content-Type': 'multipart/form-data',
    }
};
export function Post(url: any, payload?: any) {
    return new Promise((resolve, reject) => {
        axios.post(url, payload, config)
            .then((response) => {
                resolve(response);
            })
            .catch((e) => {
                reject(e)
            });
    });
}

export function Put(url: any, payload: any) {
    return new Promise((resolve, reject) => {
        axios.put(url, payload,)
            .then((response) => {
                resolve(response.data);
            })
            .catch((e) => {
                reject(e)
            });
    });
}

export function Get(url: any) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                resolve(response.data);
            })
            .catch((e) => {
                reject(e)
            });
    });
}

export function Delete(url: any) {
    return new Promise((resolve, reject) => {
        axios.delete(url)
            .then((response) => {
                resolve(response.data);
            })
            .catch((e) => {
                reject(e)
            });
    });
}
