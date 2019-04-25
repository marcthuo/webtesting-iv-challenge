const router = require('express').Router();

const muggles = require('./mugglesModel.js');
    
router.get('/', async (req, res) => {
    const wand = await muggles.getAll();
    res.status(200).json(wand);
});

router.post('/', async (req, res) => {

});

router.delete('/:id', async (req, res)  => {

});



module.exports = router;