/* eslint-disable */
/**
 * Firebase Database Configuration
 */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC-MRfsT6n3r7wTq_x3rC1-img-Gxq5YUo", // Api key
  authDomain: "spider-location-storage-center.firebaseapp.com", // Auth domain
  databaseURL: "https://spider-location-storage-center.firebaseio.com", // Database url
  projectId: "spider-location-storage-center", // project id
  storageBucket: "spider-location-storage-center.appspot.com", // storage bucket
};

firebase.initializeApp(config);
