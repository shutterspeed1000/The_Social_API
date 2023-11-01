const router = require('express').Router();

const {
getUsers,
addUser,
getUserID,
delUserID,

} = require('../../controllers/userCont')

// get and add users
router.route('/').get(getUsers).post(addUser)

//delete and view by id
router.route('/:userID').get(getUserID).delete(delUserID)


module.exports = router;