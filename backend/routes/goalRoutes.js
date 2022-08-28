const express = require('express');
const router = express.Router();
const { getGoals, setGoals, updateGoals, deteleGoals } = require('../controllers/goalControllers');

// router.get('/', getGoals);
// router.post('/', setGoals)
// router.put('/:id', updateGoals)
// router.delete('/:id', deteleGoals)

router.route('/').get(getGoals).post(setGoals);
router.route('/:id').delete(deteleGoals).put(updateGoals);
module.exports = router;