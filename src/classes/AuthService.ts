// Import the AsyncStorage library
import AsyncStorage from '@react-native-async-storage/async-storage';

// This class handles all of the authentication logic for the application
class AuthService {

    // This function will be called to get the token from storage
    getToken = async () => {
        // Get the token from storage
        const token = await AsyncStorage.getItem('token');

        // Return the token
        return token;
    }

    // This function will be called to set the token in storage
    private setToken = async (token: string) => {
        // Set the token in storage
        await AsyncStorage.setItem('token', token);
    }

    // This function will be called to remove the token from storage
    private removeToken = async () => {
        // Remove the token from storage
        await AsyncStorage.removeItem('token');
    }

    // This function will be called to register the user
    register = async (username: string, email: string, password: string) => {
        // Make the API call to login the user
        const response = await fetch('http://localhost:3000/login/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, username })
        });

        // Get the response body
        const responseBody = await response.json();

        // Check if the response was successful
        if (response.status === 200) {
            // Set the token in storage
            await this.setToken(responseBody.token);

            return true;
        }

        return false;
    }

    // This function will be called to login the user
    login = async (email: string, password: string) => {
        // Make the API call to login the user
        const response = await fetch('http://localhost:3000/login/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        // Get the response body
        const responseBody = await response.json();

        // Check if the response was successful
        if (response.status === 200) {
            // Set the token in storage
            await this.setToken(responseBody.token);

            return true;
        }

        return false;
    }


}

// Export the AuthService class
export default AuthService;