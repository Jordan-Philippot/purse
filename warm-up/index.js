const tablesData = [
  { id: 1, number: 13, available: false },
  { id: 2, number: 24, available: false },
  { id: 3, number: 36, available: false },
  { id: 4, number: 12, available: false },
  { id: 5, number: 8, available: true },
];

// Synchrone
const getFirstAvailableTable = (tables) => {
  return tables.findIndex((table) => table.available);
};
// Asynchrone
const getFirstAvailableTableAsync = async (tables) => {
  try {
    const response = await tables.findIndex((table) => table.available);
    return response;
  } catch (error) {
    console.log(error);
    return -1;
  }
};


// We could also return the value + 1 to have a more readable position for the restaurant owner or the table number
console.log(
  "Position of the first available table (synchrone) : " +
    getFirstAvailableTable(tablesData)
);
(async () => {
  const result = await getFirstAvailableTableAsync(tablesData);
  console.log("Position of the first available table (asynchrone) : " + result);
})();
