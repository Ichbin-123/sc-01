type Categoria = "men's clothing" | "jewelery" | "electronics" | "women's clothing"; 

interface Rating {
    rate: number;
    count: number;
}

export interface Prodotto {
    id: number;
    title: string;
    price: number,
    description: string;
    category: Categoria;
    image: string;
    rating: Rating
}