import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query GetPokemons($gen: Int) {
    getPokemons(gen: $gen) {
      name
      pokedex
      gen
      shiny
      released
      type1
      type2
      stats {
        baseStamina
        baseAttack
        baseDefense
      }
      legendary
      mythical
      evolutionBranch {
        evolution
        evolutionItemRequirement
        lureItemRequirement
        candyCost
      }
    }
  }
`
