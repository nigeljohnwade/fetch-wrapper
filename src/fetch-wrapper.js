export const fetchGetFromAddress = (url = '', options = {}) => {
    try {
        if (!url || url === '') {
            const error = new Error('No URL specified');
            throw error;
        }
    } catch (error) {
        console.log(error);
    }
    options.method = 'GET';
    fetch(url, options)
        .then((response) => {
            if(response.ok){
                return response.json();
            } else {
                const error = new Error(`Response not OK: ${reponse.status}`);
                throw error;
            }
        })
        .catch((error) => {
            console.log(error);
        })
}
