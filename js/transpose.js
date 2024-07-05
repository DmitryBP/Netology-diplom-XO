export const transpose = (arr) => {
  return arr[0].map((_, i) => arr.map((row) => row[i]));
};


