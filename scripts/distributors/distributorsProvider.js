let distributors = []

export const useDistributors = () => {
    return distributors.slice()
}

// api call to gather the data for use
export const getDistributors = () => {
    return fetch("http://localhost:9000/distributors")
      .then((response) => response.json())
      .then((parsedDistributors) => (distributors = parsedDistributors));
  };
  