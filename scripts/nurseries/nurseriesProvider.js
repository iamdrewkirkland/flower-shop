let nurseries = []

export const useNurseries = () => {
    return nurseries.slice()
}

// api call to gather the data for use
export const getNurseries = () => {
    return fetch("http://localhost:9000/nurseries")
      .then((response) => response.json())
      .then((parsedNurseries) => (nurseries = parsedNurseries));
  };
  