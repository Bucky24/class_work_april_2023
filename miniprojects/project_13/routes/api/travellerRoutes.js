const router = require("express").Router();
const { Traveller } = require('../../models');

router.post('/', async (req, res) => {
    const { name, email } = req.body;

    try {
        const newTraveller = await Traveller.create({
            name, email,
        });

        res.status(200).json(newTraveller);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;