const router = require('express').Router();

const {
getUsers,
addUser,
getUserID,
delUserID,
putUserID,
addFriend,
delFriend,

} = require('../../controllers/userCont')

// get and add users
router.route('/').get(getUsers).post(addUser)

//delete and view and update by id
router.route('/:userID').get(getUserID).delete(delUserID).put(putUserID)

router.route('/:userID/friends/:friendID').put(addFriend).put(delFriend)

module.exports = router