import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default api;


/**
 * iOS + emulator: localhost
 * iOS + device: IP computer
 * Android + emulator: adb reverse tcp:3333 tcp:3333 (to use localhost)
 * Android + emulator: 10.0.2.2 (Android Studio)
 * Android + device: IP computer
 */