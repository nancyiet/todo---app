const router = require('express').Router();
let Item = require('../modals/item.modal');

router.route('/').get((req,res)=>{
    Item.find()
    .then(item => res.json(item))
    .catch(err => res.status(400).json('ERROR' + err));
})

router.route('/add').post((req,res)=>{
    const item = req.body.item;

    const newItem = new Item({item});
    newItem.save()
    .then(()=> res.json('Item Added'))
    .catch(err => res.status(400).json("ERROR" + err));
})

router.route('/:id').delete((req,res)=>{
    Item.findByIdAndDelete(req.params.id)
    .then(()=>res.json('deleted'))
    .catch(err => res.status(400).json('ERROR' + err))
})

module.exports = router;

