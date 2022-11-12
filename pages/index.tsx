import { fetchPokemom } from '../script'

export default function Home() {
  fetchPokemom()
  return (
    <>
      <ul className='pokedex'></ul>
    </>
  )
}
