const mongoose = require('mongoose');

// const uri = 'mongodb+srv://USERNAME:PASSWORD@cluster0.ondghzb.mongodb.net/mctrans?retryWrites=true&w=majority';
const uri = 'mongodb+srv://datto1313:Kaikaco123.@cluster0.ondghzb.mongodb.net/mctrans?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
  });
