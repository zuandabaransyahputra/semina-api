const Images = require('../../api/v1/images/model');

// import custom error not found dan bad request
const { NotFoundError } = require('../../errors');

const createImages = async (req) => {
    const result = await Images.create({
        name: req.file
            ? `uploads/${req.file.filename}`
            : 'uploads/avatar/default.jpeg',
    });

    return result;
};

const getAllImages = async () => {
    const results = await Images.find({})

    return results
}

// tambahkan function checking Image 
const checkingImage = async (id) => {
    const result = await Images.findOne({ _id: id });
    console.log(result);

    if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id :  ${id}`);

    return result;
};
// jangan lupa export checkingImage
module.exports = { createImages, checkingImage, getAllImages };