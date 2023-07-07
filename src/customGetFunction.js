// Import the required dependencies
import axios from 'axios';

// Define the custom function
async function CustomGetFunction(url,params) {


    const options = {
        method: 'GET',
        url: `https://ali-express1.p.rapidapi.com/${url}`,
        params,
        headers: {
            'X-RapidAPI-Key': '59ad5ff7b9mshd89ff89f7565461p14a2fajsn38d6b2f62fbb',
            'X-RapidAPI-Host': 'ali-express1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);

        try {
        // Make the HTTP GET request
        const response = await axios.get(url);

        // Return the response data
        return response.data;
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Export the custom function
export default CustomGetFunction;