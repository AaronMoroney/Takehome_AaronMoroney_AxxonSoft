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
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
        })
    }
}

export default fetchData;