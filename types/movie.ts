export type CardProps = {
    navigation: any,
    movie: Movie
}

type Torrent = {
    quality: string,
    size: string,
    url: string,

}

export type Movie = {
    id: number,
    title: string,
    year: number,
    rating: number,
    genres: string[],
    medium_cover_image: string,
    background_image: string,
    description_full: string,
    download_count: number,
    torrents: Torrent[]
} 

export type MovieProp = {
    item: Movie
}

export type MovieSuggestionProp = {
    id: number | undefined
}