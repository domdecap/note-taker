const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');

  notes.get('/', (req, res) => {
    readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
  });

  notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { username, topic, tip } = req.body;
  
    if (req.body) {
      const newTip = {
        username,
        tip,
        topic,
        tip_id: uuidv4(),
      };
  
      readAndAppend(newTip, './db/tips.json');
      res.json(`Tip added successfully`);
    } else {
      res.error('Error in adding tip');
    }
  });

  module.exports = notes;