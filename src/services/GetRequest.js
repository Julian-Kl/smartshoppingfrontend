export function GetRequest (type) {
    let BaseURL = 'team5.uber.space/';
    return new Promise((resolve, reject) => {
        fetch(BaseURL+type, {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responsenJSON) => {
                resolve(responsenJSON);
            })
            .catch((error) => {
                reject(error);
            })
    })
}
