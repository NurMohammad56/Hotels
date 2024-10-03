const {createComment} = require('../services/commentServices');

exports.createComments = async (req, res) =>{
    let result = await createComment(req);
    res.status(200).json(result);
}