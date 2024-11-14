const db = require('../config/db'); // Import the db connection

// Controller function to handle form submission
async function submitContactForm(req, res) {
    const { name, email, contactNumber, projectType, projectDescription } = req.body;

    const query = `
        INSERT INTO ContactUs (name, email, contactNumber, projectType, projectDescription)
        VALUES (?, ?, ?, ?, ?)
    `;

    // Use db.query to execute the SQL query
    db.query(query, [name, email, contactNumber, projectType, projectDescription], (err, result) => {
        if (err) {
            console.error('Error inserting contact form data:', err);
            return res.status(500).json({ message: 'Server error. Please try again later.' });
        }

        // Responding with success message
        res.status(200).json({ message: 'Form submitted successfully!' });
    });
}

module.exports = { submitContactForm };
