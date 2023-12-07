const express = require('express');
const router = express.Router();

const {getAllUsers, createUser, findUser, updateUser, deleteUser, findUserByName, findByFilters} = require('../Controllers/User');

router.get('/getAllUsers',getAllUsers);
router.post('/createUser',createUser);
router.get('/findUser',findUser);
router.put('/updateUser',updateUser);
router.delete('/deleteUser',deleteUser);
router.post('/findByFilters',findByFilters);

module.exports = router;