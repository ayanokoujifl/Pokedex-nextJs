export const fetchPokemom = () => {
  const getPokemomUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemomPromisses = []

  for (let i = 1; i <= 905; i++) {
    pokemomPromisses.push(
      fetch(getPokemomUrl(i)).then((response) => response.json())
    )
  }
  Promise.all(pokemomPromisses).then((pokemons) => {
    console.log(pokemons)
    const listPokemons = pokemons.reduce((accumulator, pokemom) => {
      const types = pokemom.types.map((typeInfo) => typeInfo.type.name)

      accumulator += `
      <li class="card ${types[0]}">
      <img class="card-image " alt="${
        pokemom.name
      }" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/${
        pokemom.id
      }.png"/>
        <h2 class="card-title">${pokemom.id} - ${pokemom.name}</h2>
        <p class="card-subtitle">${types.join(' | ')}
        </p>
      </li>
      `
      return accumulator
    }, '')

    const ul = document.querySelector('.pokedex')
    ul.innerHTML = listPokemons
    console.log(ul)
  })
}
