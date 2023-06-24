import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// api.js
import axios from 'axios';

const BASE_URL = 'https://api.example.com';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
    });
  }

  // Example method for fetching data
  async fetchData() {
    try {
      const response = await this.api.get('/data');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  // Example method for posting data
  async postData(data) {
    try {
      const response = await this.api.post('/data', data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }

  // Additional methods for other API operations
}

// Create a single instance of the service wrapper to use throughout the app
const apiService = new ApiService();

export default apiService;

