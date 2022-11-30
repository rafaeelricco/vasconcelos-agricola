// function to slugfy a string
export const slugfy = (value) => {
  const str = value
    .toLowerCase()
    .split(' ')
    .join('-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  return str
}
