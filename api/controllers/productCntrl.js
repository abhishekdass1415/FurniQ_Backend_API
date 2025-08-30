import prisma from "../config/prismaConfig.js";

export const getProducts = async (req, res) => {
	try {
		const products = await prisma.product.findMany();
		res.json(products);
	} catch (err) {
		res.status(500).json({ error: "Something went wrong" });
	}
};

export const getProductById = async (req, res) => {
	try {
		const product = await prisma.product.findUnique({ where: { id: req.params.id } });
		if (!product) return res.status(404).json({ error: "Product not found" });
		res.json(product);
	} catch (err) {
		res.status(500).json({ error: "Something went wrong" });
	}
};

export const createProduct = async (req, res) => {
	try {
		const newProduct = await prisma.product.create({ data: req.body });
		res.status(201).json(newProduct);
	} catch (err) {
		res.status(500).json({ error: "Something went wrong" });
	}
};

export const updateProduct = async (req, res) => {
	try {
		const updatedProduct = await prisma.product.update({ where: { id: req.params.id }, data: req.body });
		res.json(updatedProduct);
	} catch (err) {
		res.status(500).json({ error: "Something went wrong" });
	}
};

export const deleteProduct = async (req, res) => {
	try {
		await prisma.product.delete({ where: { id: req.params.id } });
		res.json({ message: "Product deleted" });
	} catch (err) {
		res.status(500).json({ error: "Something went wrong" });
	}
};
