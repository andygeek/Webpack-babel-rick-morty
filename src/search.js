async function search(id) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}/`)
  const character = await response.json()
  return character
}

export default search