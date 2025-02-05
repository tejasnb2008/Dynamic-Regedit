function updateProducts() {
    const category = document.getElementById('category').value;
    const productSelect = document.getElementById('product');
    productSelect.innerHTML = ''; // Clear previous options

    if (category) {
        // Example products based on category
        const products = {
            "Basic Panel": ["Select Product","1 Month - ₹599", "Permanent For ₹1499"],
            "Premium Panel": ["Select Product","1 Month for ₹699", "Permanent For ₹2K"],
            "Sniper Panel": ["Select Product","Sniper Product 1", "Sniper Product 2"],
            "Internal Panel": ["Select Product","1 Month for ₹599", "Permanent For ₹2K"],
            "Streamer Panel": ["Select Product","1 Month for ₹999", "Permanent For ₹3.5K"],
            "A.I Panel": ["Select Product","1 Month for ₹599", "Permanent For ₹2K"],
            "Streamer Panel + A.I Panel": ["Select Product","1 Month for ₹2.5K", "Permanent For ₹9K"],
            "Custom Panel": ["Select Product","DM TO Owner Or Staff in Discord or Whatsapp"]
        };

        products[category].forEach(product => {
            const option = document.createElement('option');
            option.value = product;
            option.textContent = product;
            productSelect.appendChild(option);
        });

        document.getElementById('product-container').style.display = 'block';
    } else {
        document.getElementById('product-container').style.display = 'none';
    }
}

function showBuyButton() {
    const product = document.getElementById('product').value;
    document.getElementById('buy-now-container').style.display = product ? 'block' : 'none';
}

function purchaseProduct() {
    // Set the QR code image source to the local file
    const qrCodeUrl = 'Images/QR Code.jpg'; // Update this with the actual path if it's in a subdirectory
    document.getElementById('qrCode').src = qrCodeUrl;

    // Show the modal
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    paymentModal.show();
}