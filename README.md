# Qr_Code_Generator_using_Html_Css_Javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>QR Code Generator</title>
  <style>
    /* General body styling */
    body {
      font-family: Arial, sans-serif;
      background: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    /* Container box styling */
    .container {
      background: #fff;
      padding: 2rem;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    /* Input field styling */
    input {
      width: 80%;
      padding: 10px;
      font-size: 16px;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    /* Main button styling */
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      background-color: #007bff;
      color: white;
      border-radius: 5px;
    }

    /* QR code image styling */
    #qrCode img {
      margin-top: 20px;
      width: 200px;
      height: 200px;
    }

    /* Styling for the download button */
    #qrCode button {
      margin-top: 10px;
      padding: 8px 16px;
      font-size: 14px;
      background-color: #28a745;
      border: none;
      color: white;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>QR Code Generator</h1>
    
    <!-- Input field for text or URL -->
    <input type="text" id="qrInput" placeholder="Enter text or URL" />
    <br />
    
    <!-- Button to generate the QR Code -->
    <button onclick="generateQRCode()">Generate QR Code</button>
    
    <!-- QR Code display area -->
    <div id="qrCode"></div>
  </div>

  <script>
    // Function to generate the QR Code
    function generateQRCode() {
      const input = document.getElementById("qrInput").value; // Get input value
      const qrCodeDiv = document.getElementById("qrCode"); // Get output container

      if (!input) {
        // Alert if the input is empty
        alert("Please enter some text or URL");
        return;
      }

      // Generate URL for the QR code using external API
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`;

      // Update the output container with QR image and a download button
      qrCodeDiv.innerHTML = `
        <img id="qrImage" src="${qrUrl}" alt="QR Code" />
        <br/>
        <a id="downloadLink" href="${qrUrl}" download="qrcode.png">
          <button>Download QR Code</button>
        </a>
      `;
    }
  </script>
</body>
</html>
