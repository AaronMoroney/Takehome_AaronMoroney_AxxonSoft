const fetchData = (apiCall, setApplicationState,  setLoadingCallback, notLoadingCallback) => {
    setLoadingCallback();
    console.log('fetching data');
    if(typeof apiCall === 'function'){
        apiCall()
        .then((response) => {
        setApplicationState(response);
        notLoadingCallback();
        })
        .catch(error => {
        notLoadingCallback();
        })
    }
}

export default fetchData;