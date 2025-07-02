const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourgmail@gmail.com',
    pass: 'your_app_password' // ⚠️ არა შენი Gmail პაროლი – გამოიყენე App Password
  }
});

// API რომ მიიღოს name და phone
app.post('/api/contact', async (req, res) => {
  const { name, phone } = req.body;

  const mailOptions = {
    from: 'yourgmail@gmail.com',
    to: 'receiver@example.com',
    subject: 'ახალი კონტაქტის განაცხადი',
    html: `<p><strong>სახელი:</strong> ${name}</p>
           <p><strong>ნომერი:</strong> ${phone}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'მაილი გაიგზავნა წარმატებით' });
  } catch (error) {
    console.error('შეცდომა:', error);
    res.status(500).json({ message: 'მაილის გაგზავნა ვერ მოხერხდა' });
  }
});

app.listen(5000, () => console.log('Server listening on port 5000'));
