const router = require('express').Router();

const {
getThoughts,
addThought,
getThoughtID,
delThoughtID,
putThoughtID,
delReact,
putReact,
} = require('../../controllers/thoughtCont')

// get and add Thoughts
router.route('/').get(getThoughts).post(addThought)

// delete and view and update by id
router.route('/:thoughtID').get(getThoughtID).delete(delThoughtID).put(putThoughtID)

router.route('/:thoughtID/reactions/').put(putReact).put(delReact)

module.exports = router