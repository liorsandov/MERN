const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalsModel');

// @desc Get goals
// @route GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    // res.status(200).json({ message: 'Get goals' })
    res.status(200).json(goals)
})

// @desc Set goals
// @route Post /api/goals
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please enter a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    console.log(req.body)
    if (req.body.text.length < 4) {
        res.status(400)
        throw new Error('Please enter a large text')
    }
    res.status(200).json(goal)
})

// @desc Update goals
// @route Put /api/goals/:id
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goals was not found...')
    }
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    
    // res.status(200).json({ message: 'Update goals' })
    res.status(200).json(updateGoal)
})

// @desc Delete goals
// @route DELETE /api/goals/:id
const deteleGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goals was not found...')
    }
    await goal.remove();
    res.status(200).json({ id: `Goal - id: ${req.params.id}, deleted...` })
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deteleGoals
};
