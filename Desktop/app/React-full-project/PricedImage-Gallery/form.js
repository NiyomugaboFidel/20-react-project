document.addEventListener('DOMContentLoaded', () => {
  const inputTitle = document.getElementById('title');
  const inputPrice = document.getElementById('price');
  const inputDescription = document.getElementById('description');
  const inputImage1 = document.getElementById('image1');
  const inputImage2 = document.getElementById('image2');
  const inputImage3 = document.getElementById('image3');
  const form = document.getElementById('productForm');

  // Event listener for form submission
  form.addEventListener('submit', function handleSubmit(e) {
      e.preventDefault();
      
      // Collecting form data
      const data = {
          title: inputTitle.value,
          price: inputPrice.value,
          description: inputDescription.value,
          isAvailable: true,
          images: [inputImage1.value, inputImage2.value, inputImage3.value]
      };

      // Sending data to the server using fetch API
      fetch('http://localhost:3000/products', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log('Product added:', data);
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
  });
});
