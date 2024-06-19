# rn-assignment4-ID

This application is a job listing platform that showcases various job opportunities, both featured and popular, with a user-friendly interface. Below is a brief description of the usage of the main components in the application.

## Components

### Featured Job Component

The `FeaturedJobCard` component is designed to display featured job listings with detailed information, such as the job title, company, salary, and location. The background color of each card is customizable, making it visually distinct.

#### Usage

```jsx
import FeaturedJobCard from './components/FeaturedJobCard';

// Example job data
const job = {
  title: 'Software Engineer',
  company: 'Facebook',
  salary: '$180,000/y',
  location: 'Accra, Ghana',
  icon: require('./assets/facebook-icon.png'),
  backgroundColor: '#4267B2'
};

<FeaturedJobCard job={job} />
```

#### Description

- **Card**: The main container with customizable background color.
- **Upper Card**: Contains the job icon and text details (job title and company).
- **Lower Card**: Displays the salary and location of the job.

#### Styles

- **card**: Styling for the main card container.
- **upperCard**: Styling for the upper part of the card containing the icon and text details.
- **iconContainer**: Container for the job icon with a circular background.
- **cardIcon**: Styling for the job icon image.
- **lowerCard**: Styling for the lower part of the card containing the salary and location.
- **title, company, salary, location**: Styling for the respective text elements.

### Popular Job Component

The `PopularJobCard` component is used to display popular job listings. It provides concise information about the job title, company, salary, and location in a compact layout.

#### Usage

```jsx
import PopularJobCard from './components/PopularJobCard';

// Example job data
const job = {
  title: 'Jr Executive',
  company: 'Burger King',
  salary: '$96,000/y',
  location: 'Los Angeles, US',
  icon: require('./assets/burgerking-icon.png')
};

<PopularJobCard job={job} />
```

#### Description

- **Card**: The main container for the job listing.
- **Left Part**: Contains the job icon and text details (job title and company).
- **Right Part**: Displays the salary and location of the job.

#### Styles

- **card**: Styling for the main card container.
- **leftPart**: Styling for the left part of the card containing the icon and text details.
- **cardIcon**: Styling for the job icon image.
- **title, company, salary, location**: Styling for the respective text elements.

## Screenshots

### Login Screen
![Login Screen](./screenshots/home.jpg)

### Home Screen
![Home Screen](./screenshots/login.jpg)
