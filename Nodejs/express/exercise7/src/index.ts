import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

interface Product {
    id: number;
    name: string;
    price: number;
}

const shopList: Product[] = [];
let itemIdCounter = 1;

app.get("/items", (req, res) => {
    return res.status(200).json({
        messsage: "Products found",
        data: shopList,
        error: false,
    });
});

app.post("/items", (req, res) => {
    const { name, price } = req.body;
    if (name && price) {
        const newItem = { id: itemIdCounter++, name, price };
        shopList.push(newItem);
        return res.status(201).json({
            messsage: "Product created successfully",
            data: newItem,
            error: false,
        });
    } else {
        return res.status(409).json({
            messsage: "Product must have name and price",
            data: undefined,
            error: true,
        });
    }
});

app.get("/items/:id", (req, res) => {
    const { id } = req.params;
    const productFound = shopList.find(prod => prod.id === Number(id));
    if (!productFound) {
        return res.status(404).json({
            messsage: "Product not found",
            data: undefined,
            error: true,
        });
    }
    return res.status(200).json({
        messsage: "Product found",
        data: productFound,
        error: false,
    });
});

app.patch("/items/:id", (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const indexToUpdate = shopList.findIndex(prod => prod.id === Number(id));
    if (indexToUpdate === -1) {
        res.status(404).json({
            message: "Product not found",
            data: undefined,
            error: true,
        });
    }
    const updatedProduct = {
        ...shopList[indexToUpdate],
        name: name || shopList[indexToUpdate].name,
        price: price || shopList[indexToUpdate].price,
    };
    shopList.splice(indexToUpdate, 1, updatedProduct);
    return res.status(200).json({
        message: "Product updated successfully",
        data: updatedProduct,
        error: false,
    });
});

app.delete("/items/:id", (req, res) => {
    const { id } = req.params;
    const indexToDelete = shopList.findIndex(prod => prod.id === Number(id));
    if (indexToDelete === -1) {
        return res.status(404).json({
            messsage: "Product not found",
            data: undefined,
            error: true,
        });
    }
    const productRemoved = shopList.splice(indexToDelete, 1)[0];
    console.log(productRemoved);
    return res.status(200).json({
        messsage: "Product deleted successfully",
        data: productRemoved,
        error: false,
    });
});

app.listen(PORT, () => {
    console.log("Server listening on port: ", PORT);
});
