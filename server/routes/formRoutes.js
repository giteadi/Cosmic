const express = require('express');
const router = express.Router();
const {submitContactForm} = require('../controllers/formController');

// Route for submitting the contact form
router.post('/submit', submitContactForm);

module.exports = router;
