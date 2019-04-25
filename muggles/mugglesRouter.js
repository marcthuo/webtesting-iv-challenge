const router = require('express').Router();

const muggles = require('./mugglesModel.js');
    
//check
router.get('/', async (req, res) => {
    const wand = await muggles.getAll();
    res.status(200).json(wand);
});

//check
router.post('/', async (req, res) => {
    try {
        const muggle = await muggles.insert(req.body);
        res.status(201).json(muggle)
    } catch (err) {
        res.status(500).json({ error: 'You are not a wizard!' })
    }
});

//check
router.delete('/:id', async (req, res)  => {
    const {id} = req.params;
    try {
        const witch = await muggles.remove(id).then(witch => {
            res.status(200).json(witch)
        });
        {
            res.status(404).end({ message: 'Expelled for dark acts'})
        } res.json(witch);
    } catch (err) {
        res.status(500).json({
            message: 'The bewitching hour is upon us',
        });
    }
});



module.exports = router;