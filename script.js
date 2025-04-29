function generateQRCode() {
  const input = document.getElementById("qrInput").value;
  const qrCodeDiv = document.getElementById("qrCode");

  if (!input) {
    alert("Please enter some text or URL");
    return;
  }

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`;

  // Create image and download link
  qrCodeDiv.innerHTML = `
    <img id="qrImage" src="${qrUrl}" alt="QR Code" />
    <br/>
    <a id="downloadLink" href="${qrUrl}" download="qrcode.png">
      <button>Download QR Code</button>
    </a>
  `;
}
