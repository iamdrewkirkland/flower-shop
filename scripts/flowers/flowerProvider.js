let flowers = []

export const useFlowers = () => {
    return flowers.slice()
}

// api call to gather the data for use
export const getFlowers = () => {
    return fetch("http://localhost:9000/flowers")
      .then((response) => response.json())
      .then((parsedFlowers) => (flowers = parsedFlowers));
  };
  