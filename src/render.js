function render(data) {
  const character = document.createElement('img')
  character.setAttribute('src', data.image)
  document.body.append(character)
}

export default render