export interface IBooks{
    id?: number,
    title: string  | null,
    isbn: number | null,
    thumbnailUrl: string | null,
    shortDescription: string | null,
    longDescription: string | null,
    author: string | null,
    category: string  | null,
    edition: string | null,
    price: number  | null,
    rating: number | null
}