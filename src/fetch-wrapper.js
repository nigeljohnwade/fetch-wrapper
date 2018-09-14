export const fetchGetFromAddress = (url, options) => {
    options.method = 'GET';
    fetch(url, options)
        .then((response) => {
            if(response.ok){
                return response.json();
            }
        })
}
