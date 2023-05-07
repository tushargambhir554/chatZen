// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Stream } from "stream";

export const environment = {
  firebase: {
    projectId: 'chatzen-64e57',
    appId: '1:991774605208:web:316075b07626e9e691f5ed',
    storageBucket: 'chatzen-64e57.appspot.com',
    apiKey: 'AIzaSyDKl8iE_f8vnmiE7z65agPC0-eH4LiMqNI',
    authDomain: 'chatzen-64e57.firebaseapp.com',
    messagingSenderId: '991774605208',
    measurementId: 'G-N53JYT2J6R',
  },
  production: false,
  apiUrl: 'https://us-central1-chatzen-64e57.cloudfunctions.net',
  stream:{
    key:'5b9ruj4dtsca'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
