document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Clear previous errors
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    let isValid = true;
  
    // Name validation
    if (name === '') {
      isValid = false;
      document.getElementById('nameError').innerText = 'Name is required.';
    } 
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      isValid = false;
      document.getElementById('emailError').innerText = 'Email is required.';
    } else if (!emailPattern.test(email)) {
      isValid = false;
      document.getElementById('emailError').innerText = 'Please enter a valid email address.';
    }
  
    // Password validation
    if (password === '') {
      isValid = false;
      document.getElementById('passwordError').innerText = 'Password is required.';
    } else if (password.length < 6) 
{
      isValid = false;
      document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
    }
  
    // If valid, submit the form (in a real application, you would submit the form data to the server here)
    if (isValid) {
      alert('Form submitted successfully!');
      // Example of form submission:
      // document.getElementById('registrationForm').submit();
    }
  });

 
   
   /*  const submit = document.getElementById('submit').value.trim();
    function submit {"button"};
  });
  document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
      alert('Please enter a city name');
      return;
    }
  
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          document.getElementById('cityName').innerText = data.name;
          document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
          document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
          document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
          document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
  
          document.getElementById('weatherResult').style.display = 'block';
        } else {
          alert('City not found');
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data');
      });
  });
  
  const paragraph = document.querySelector('p'); // retrive the first <p /> from the document
paragraph.textContent = 'Hello World!'; // set the contents of the element
paragraph.style.color = 'red'; // style the element
paragraph.remove(); // remove the element
document.body.appendChild(paragraph);
  // Define your API key and base URL
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
async function fetchWeather(city) {
  const apiUrl = `${baseUrl}?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    updateWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert(error.message);
  }
}

 */