const router = require('express').Router();

const {
getThoughts,
addThought,
getThoughtID,
delThoughtID,
putThoughtID,


} = require('../../controllers/thoughtCont')

// get and add Thoughts
router.route('/').get(getThoughts).post(addThought)

// delete and view and update by id
router.route('/:thoughtID').get(getThoughtID).delete(delThoughtID).put(putThoughtID)

// router.route('/:userID/friends/:friendID').put(addFriend).put(delFriend)

module.exports = router