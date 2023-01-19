const express = require('express')
const router = express.Router()//ajouter nouvelle instance d'un objet
const userControllers = require('../controllers/userControllers')

//Afficher les users
router.get('/all-user', userControllers.user_alluser)
//Créer user
router.post('/', userControllers.user_creat_post)
//Changer user
router.put('/update-user/:id', userControllers.user_single_user_id)
//Supprimer user
router.delete('/delete-user', userControllers.user_supprime_delete)

module.exports = router