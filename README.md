# Freedivah
**Freedivah** is a global community platform where freedivers from around the world come together to connect, share their passion, and inspire each other. The name **Freedivah** blends 'freediving' with the name of the developer, a devoted freediving enthusiast, capturing her deep love for the sport in every detail.
## MVP FEATURES
### TRACK & ANALYZE

- **My Dive Map**: Mark your dive locations on a global map with flag badges. Input methods include GPS, device integration, and direct entry.
### SHARE & CONNECT

- **Profile**: Earn and showcase freediving certification badges.
- **Export & Share**: Export and share your dive map files.
- **Feed**:
    - Upload and comment on photos and videos.
    - Share your current location with a map image featuring a flag badge.
    - Posts are automatically translated into English.

## TECH STACKS

#### **Mono Repo / PNPM**

- **Mono Repo**: Manages multiple packages within a single repository, streamlining development and version control.
- **PNPM**: Provides efficient package management with fast installation and reduced disk space usage. Chosen for its superior compatibility with widely used tools, despite Yarn Berry’s Zero-install advantages.

#### **Front-End Technologies**

- **Vanilla JavaScript** and **TypeScript**: Core languages selected to deepen our understanding of fundamental JavaScript principles.
- **Vanilla Extract**: Used for styling and UI development. Preferred over TailwindCSS and Styled Components for its static CSS extraction, type safety, and lack of runtime overhead, enhancing performance and maintainability.

#### **Backend Framework**

- **Node.js** with **Express.js**: Manages server-side logic and API endpoints.

#### **Data Storage**

- **Firebase Realtime Database**: Handles and stores dive data and user profiles.

#### **Authentication**

- **Firebase Authentication**: Manages user authentication and profiles, seamlessly integrating with Google Authentication.
- **Google Authentication**: Enabled through Firebase Authentication, offering a smooth and effortless login experience with Google accounts.


### External APIs

#### **Map Integration & Visualization**

- **Google Maps JavaScript API**: Displays dive locations with flag badges on a map.

#### **Location Services**

- **Geolocation API**: Retrieves the user's current location for precise dive tracking.
- **OpenCage Geocoding API**: Converts coordinates into country information. Selected for its cost-effectiveness and broad coverage compared to Google Maps Geocoding API.

#### **Data Export**

- **JSZip**: Exports dive maps and data as downloadable files.

#### **Flag Icons**

- **FlagsAPI**: Provides high-quality flag icons in SVG format with various sizes and styles.
