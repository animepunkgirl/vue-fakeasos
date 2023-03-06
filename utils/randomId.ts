
function* getId(): Generator<number, number> {
  let id = 0;
  while(true) {
    yield id++
  }
}
export const randomId = () => {
  return `r_${getId().next().value}`
}