//user_creat,user_creat_post,user_adduser,user_alluser,user_single-user/:id
const user = require('../models/user')

const user_creat_post = (req, res) => {
    const user1 = new user(req.body)
    user1.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log('err')
        })
}
const user_supprime_delete = (req, res) => {
    const { name, age } = req.body
    user.deleteMany({ name, age })
        .then((result) => {
            res.send('Deleted')
        })
        .catch((error) => {
            console.log(error);
        });
}
const user_alluser = (req, res) => {
    user.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log("Error : \n", err)
        });
}
const user_single_user_id = async (req, res) => {
    const filter = { _id: req.params.id };
    var newvalues = { $set: { name: req.body.name, age: req.body.age } }
    const update = await user.updateOne(filter, newvalues)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log("Error : \n", err)
        });
}
module.exports = {
    user_alluser,
    user_single_user_id,
    user_creat_post,
    user_supprime_delete
}