export type CardProps = {
    navigation: any,
    movie: Movie
}

export type Movie = {
    id: number,
    title: string,
    year: number,
    rating: number,
    genres: string[],
    summary: string,
    medium_cover_image: string
} 