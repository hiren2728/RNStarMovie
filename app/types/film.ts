type Film = {
    id: string,
    title: string,
    speciesConnection: FilmSpeciesConnection
}

type FilmSpeciesConnection = {
    species: FilmSpecies[]
}

type FilmSpecies = {
    name: string,
    classification: string
}

type FilmDetail = {
    producers: string[]
    created: string,
    director: string,
    id: string
    releaseDate: string
    title: string
    openingCrawl: string
}

export type {
    Film, FilmSpeciesConnection, FilmSpecies, FilmDetail
}

