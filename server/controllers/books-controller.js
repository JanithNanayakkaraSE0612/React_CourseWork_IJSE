const Book = require("../model/Book");


const getAllBooks = async (req,res,next) =>{
    let books;
    try {
        books = await Book.find();
    } catch (error) {
        console.log(error);
    }
    if (!books) {
        return res.status(404).json({message:"No products found"});
    }
    return res.status(200).json({books});
};

const getById = async (req , res , next) =>{
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (error) {
        console.log(error);
    }
    if (!book) {
        return res.status(404).json({message:"No Book found"});
    }
    return res.status(200).json({book});
};

