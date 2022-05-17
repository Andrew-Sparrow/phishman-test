export const adaptServerDataToClient = (data) => {
  return data.map((item) => item.key = item.id);
}