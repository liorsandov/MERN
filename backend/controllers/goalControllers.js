const asyncHandler = require('express-async-handler');

// @desc Get goals
// @route GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
})

// @desc Set goals
// @route Post /api/goals
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please enter a text field')
    }
    console.log(req.body)
    res.status(200).json({ message: 'Set goals' })
})

// @desc Update goals
// @route Put /api/goals/:id
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update goals' })
})

// @desc Delete goals
// @route DELETE /api/goals/:id
const deteleGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete goals' })
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deteleGoals
};
