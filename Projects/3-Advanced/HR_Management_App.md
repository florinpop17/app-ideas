# HR/Attendance Management App

**Tier:**  3-Advanced
The application can be used in any corporate environment to keep track of employee attendance. This app could be applicable to school or college environments. This app makes use of QR code scanner packages and GPS packages to track location of an employee or student if he/she is within the office or campus/school grounds. The app may require a database to store data regarding each user, however there is no preference on NoSQL or SQL type databases, feel free to use whatever you like. The client app can be on mobile or web application and an admin portal for administration of users. 

## User Stories

-   [ ] User can register and log into an existing account (requires database).
-   [ ] Admin can perform CRUD operation on company entry such as coordinate (for GPS tracking) and company name.
-   [ ] Admin can generate QR code containing company information. 2 ways: QR code containing company ID from database OR QR code containing company name and geolocation.
-   [ ] Employee/Student can scan QR code to mark attendance. Scan the QR again to mark end of the day.
-   [ ] App can record how long employee/student was within the coordinate.
-   [ ] App can track if the employee/student is outside of the area of office/classroom.
-   [ ] App can store the current date and time the moment employee/student scans the QR code.
-   [ ] App can notify employee/student if GPS services are turned off or unavailable.
-   [ ] Employee/Student can log out of app which will stop the time tracking.   
-   [ ] All user can customize own profile.
-   [ ] Admin can add, remove or update a user's profile.
-   [ ] Employee and student will have a status on their profile such as WARNING, GOOD, HEALTHY for the manager/lecturer/teacher to put more emphasis on the individual.

## Bonus features

-   [ ] Calculate total time employee/student has spent within office/school based on year, month and week.
-   [ ] Generate report in PDF, CSV from admin portal on overall attendance. 
-   [ ] Admin can choose current year, month or week to generate the report on overall attendance.
-   [ ] Admin portal contains a dashboard with at least 1 metric of any relevant information.
-  [ ] Dark mode for client app and admin portal.

## Useful links and resources

**Resources:**
*For React/Angular/Vue
1. [qr-scanner - npm (npmjs.com)](https://www.npmjs.com/package/qr-scanner)
2. [gps - npm (npmjs.com)](https://www.npmjs.com/package/gps)
3. [Overview | Places API | Google Developers](https://developers.google.com/maps/documentation/places/web-service/overview)
4. [Overview | Geolocation API | Google Developers](https://developers.google.com/maps/documentation/geolocation/overview)

*For Flutter based projects:
1. [Fetch data from the internet | Flutter](https://docs.flutter.dev/cookbook/networking/fetch-data)
2. [syncfusion_flutter_calendar | Flutter Package (pub.dev)](https://pub.dev/packages/syncfusion_flutter_calendar)
3. [qr_code_scanner | Flutter Package (pub.dev)](https://pub.dev/packages/qr_code_scanner)


## Example projects

1. For generating QR code: [app-ideas/QRCode-Badge-App.md at master · florinpop17/app-ideas (github.com)](https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/QRCode-Badge-App.md)
2. For CRUD API: [app-ideas/To-Do-App.md at master · florinpop17/app-ideas (github.com)](https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/To-Do-App.md)
3. For calculating attendance yearly, monthly, weekly: [app-ideas/Calendar-App.md at master · florinpop17/app-ideas (github.com)](https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calendar-App.md) 