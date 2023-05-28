interface Item {
    name: string;
    price: number;
}

const setPrice = (item: Item, price: number): Item => {
    return { ...item, price: price };
};

const addToCart = (cart: Item[], item: Item): Item[] => {
    return [...cart, item];
};

export { setPrice, addToCart, Item };
