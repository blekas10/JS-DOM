const serverAddress = "http://localhost:3000";

const getGuests = async () => {
  const response = await fetch(`${serverAddress}/guests`);
  const guests = await response.json();

  return guests;
};

const deleteGuests = async (id) => {
  const response = await fetch(`${serverAddress}/guests/${id}`, {
    method: "DELETE",
  });
  const guests = await response.json();

  return guests;
};
const createGuest = async (guestProps) => {
  const response = await fetch(`${serverAddress}/guests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(guestProps),
  });
  const guests = await response.json();

  return guests;
};

const ApiServises = {
  getGuests,
  deleteGuests,
  createGuest,
};

// deleteGuests("1");
export default ApiServises;
