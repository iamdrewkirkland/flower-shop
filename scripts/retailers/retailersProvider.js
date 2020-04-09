let retailers = []

export const useRetailers = () => {
    return retailers.slice()
}

// api call to gather the data for use
export const getRetailers = () => {
    return fetch("http://localhost:9000/retailers")
      .then((response) => response.json())
      .then((parsedRetailers) => (retailers = parsedRetailers));
  };
  