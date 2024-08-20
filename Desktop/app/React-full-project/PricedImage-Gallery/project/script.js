document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const output = document.getElementById('output');
    const searchInput = document.getElementById('search-input');
  
    async function fetchInstruments() {
      try {
        const response = await fetch('http://localhost:8000/instruments');
        return await response.json();
      } catch (error) {
        console.error('Error fetching instruments:', error);
      }
    }
  
    function displayInstruments(type) {
      fetchInstruments().then((instruments) => {
        const filteredInstruments = instruments.filter(instrument => instrument.type === type);
        output.innerHTML = filteredInstruments.map(instrument => `
          <div class="instrument">
            <img src="${instrument.image}" alt="${instrument.name}" class="instrument-image">
            <h2>${instrument.name}</h2>
            <p>Type: ${instrument.type}</p>
            <p>Price: $${instrument.price.toFixed(2)}</p>
          </div>
        `).join('');
      });
    }
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const type = button.textContent;
        displayInstruments(type);
      });
    });
  
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      fetchInstruments().then((instruments) => {
        const filteredInstruments = instruments.filter(instrument =>
          instrument.name.toLowerCase().includes(searchTerm)
        );
        output.innerHTML = filteredInstruments.map(instrument => `
          <div class="instrument">
            <img src="${instrument.image}" alt="${instrument.name}" class="instrument-image">
            <h2>${instrument.name}</h2>
            <p>Type: ${instrument.type}</p>
            <p>Price: $${instrument.price.toFixed(2)}</p>
          </div>
        `).join('');
      });
    });
  });
  