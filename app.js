const express = require('express');
const app = express();
const axios = require('axios');

// Set up middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/scanner', (req, res) => {
  res.sendFile(__dirname + '/views/scanner.html');
});

app.post('/scan', (req, res) => {
  const { image } = req.body;

  const formData = new FormData();

  formData.append('base64Image', image);
  formData.append('apikey', 'K84011919688957');
  formData.append('language', 'eng');
  formData.append('isOverlayRequired', false);
  formData.append('iscreatesearchablepdf', false);
  formData.append('issearchablepdfhidetextlayer', false);
  formData.append('OCREngine', 2);

  axios.post('https://api.ocr.space/parse/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(response => {
      const result = response.data;
      if (result.IsErroredOnProcessing) {
        res.send(result.ErrorMessage);
      } else {
        let priceLevels = result.ParsedResults[0].ParsedText.replace(/\n/g, ',');
        res.send(priceLevels);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error processing the image.');
    });
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
