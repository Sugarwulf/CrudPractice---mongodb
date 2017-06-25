import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb';

let router = express.Router();

//create and update rappers
router.post('/', (req, res) => {
  let rapper = req.body;
  rapper._id = new mongodb.ObjectID(req.body._id); // convert _id to object
  database.db.collection('rappers').save(rapper).then(() => {
    res.end();
  })
});

//get all rappers (read)
router.get('/', (req, res) => {
  database.db.collection('rappers').find().toArray().then((rappers)=>{
    res.json(rappers);
  })
});

//remove a rapper(delete)
router.delete('/:id', (req, res) => {
  let rapperId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('rappers').remove({_id:rapperId}).then(()=> {
    res.end();
  })

});




export default router;
