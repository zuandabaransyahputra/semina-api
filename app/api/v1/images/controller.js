// import services images
const { createImages, getAllImages } = require('../../../services/mongoose/images');

const { StatusCodes } = require('http-status-codes');

const create = async (req, res, next) => {
    try {
        const result = await createImages(req);

        res.status(StatusCodes.CREATED).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const getAll = async (req, res, next) => {
    try {
        const result = await getAllImages()

        res.status(StatusCodes.CREATED).json({
            data: result,
        });

    } catch (error) {
        next(error)
    }
}


module.exports = { create, getAll };