const serverAddress = "http://localhost:3000";

const getGuests = async () => {
  const response = await fetch(`${serverAddress}/guests`);
  const guests = await response.json();

  return guests;
};

const ApiServises = {
  getGuests,
};

export default ApiServises;
