    // Set the min attribute of the endDate input to startDate
    function search() {
        const location = document.getElementById('location').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const guests = document.getElementById('guests').value;
  
        if (new Date(endDate) < new Date(startDate)) {
          alert('End Date cannot be before Start Date');
          return;
        }
  
        // You can perform the search with these inputs
        console.log('Location:', location);
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        console.log('Number of Guests:', guests);
  
        // Implement your search logic here and update the results section
        document.getElementById('results').innerHTML = `
          <h2>Search Results:</h2>
          <p>Location: ${location}</p>
          <p>Start Date: ${startDate}</p>
          <p>End Date: ${endDate}</p>
          <p>Number of Guests: ${guests}</p>
        `;
      }
  
      // Set the min attribute of the endDate input to startDate
      const startDateInput = document.getElementById('startDate');
      const endDateInput = document.getElementById('endDate');
      
      startDateInput.addEventListener('change', function() {
        endDateInput.min = startDateInput.value;
      });