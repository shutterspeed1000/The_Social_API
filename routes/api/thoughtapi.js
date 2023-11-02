const router = require('express').Router();

const {
getThoughts,
addThought,

} = require('../../controllers/thoughtCont')

// get and add Thoughts
router.route('/').get(getThoughts).post(addThought)

//delete and view and update by id
// router.route('/:userID').get(getUserID).delete(delUserID).put(putUserID)

// router.route('/:userID/friends/:friendID').put(addFriend).put(delFriend)

module.exports = router