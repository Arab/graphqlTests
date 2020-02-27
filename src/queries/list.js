import { gql } from 'apollo-boost';

export const LIST_ALL_STAR_WARS_HUMANS = gql`
{
  Species(name: "Human") {
    id
    people {
      id
      name
    }
  }
}
`

export const LIST_ALL_DROIDS = gql`
{
  Species(name: "Droid") {
    id
    people {
      id
      name
    }
  }
}
`

export const GET_CHARACTER_BY_ID = gql`
    query HeroById($heroId: ID!){
        Person(id: $heroId) {
          id
          name
          birthYear
          createdAt
          eyeColor
          gender
          hairColor
          height
          isPublished
          mass
          skinColor
        }
      }
`

export const GET_SORTABLE_HUMANS = gql` 
query sortableHumans($personSort: PersonOrderBy!) {
  Species(name: "Human") {
      id
      people(orderBy: $personSort) {
        id
        name
    }
  }
}
`

export const GET_FILTERED_DROIDS = gql`
query filtrableDroids($droidFilter: PersonFilter) {
  Species(name: "Droid") {
      id
      people(filter: $droidFilter) {
        id
        name
      }
    }
  }
`

