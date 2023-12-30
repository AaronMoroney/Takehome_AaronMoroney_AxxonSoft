/*
** HELPERS
**
** Generic fetch function, can now import & pass parameters into this function
** This aligns with the DRY principle
*/

let fetchData = (apiCall, setApplicationState, setLoading) => {
    setLoading(true);
    if(typeof apiCall === 'function'){
        apiCall()
        .then((response) => {
        setApplicationState(response);
        console.log("Data fetched:", response);
        setLoading(false);
        })
        .catch(error => {
        console.log('failed to fetch', error);
        //setError(`Oops! we haven't been able to find that, please try again`);
        setLoading(false);
        })
    }
}

export default fetchData;