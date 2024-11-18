# Project Overview  
**“From Dive Tracking to Social Sharing”**  
Freedivah is an interactive platform for freedivers to mark and share their dive locations on a world map using national flag icons. It combines freediving with technology, allowing users to track their dives, create a personalized map, and connect with other divers.

The name 'Freedivah' blends 'freediving' with my identity as a developer, reflecting my journey and enthusiasm for underwater exploration.

## Key Features

- **Personalized Dive Map**: Users can mark their dive locations on a world map.
- **Sharing and Connecting**: Users can share their experiences and connect with other divers.
- **Tracking and Documentation**: Keep a record of dives across different countries.

## Development Considerations

### 1. **Creating a "Screaming Architecture" from a Domain Perspective**
   - Using FSD (Feature-Sliced Design) to build a feature-driven architecture aligned with the domain, ensuring single-direction dependencies for enhanced flexibility and scalability.

### 2. **Designing Decoupled Systems**
   - **Ensuring** a clean separation of concerns between business logic, UI, and side effects to maintain flexibility and scalability.
   - **Using** SOLID principles to design modular, maintainable components and multi-paradigm design to provide a flexible system structure.

## Technologies Used
   - **Frontend**: Next.js, TypeScript, Vanilla Extract
   - **Backend**: Node.js / Express.js, Supabase
   - **Testing**: Jest
   - **DevOps**: Github Actions, Docker, AWS
For a detailed explanation of why these technologies were selected, refer to [this document](https://www.notion.so/jiah827/Project-Freedivah-10f4ef50e633807387d4c9307d622bdb?pvs=4#10f4ef50e63380f9854cd83ea84b5bf0).

## How to Run
### Prerequisites
- Node.js 18+ 
- Yarn 4.5.1+

### Installation
1. Clone the repository
   ```
   git clone https://github.com/f-lab-edu/Freedivah.git
   cd Freedivah
   ```
2. Install dependencies
   ```
   yarn install
   ```
### Development
   ```
   yarn dev:web   // Run web application only
   yarn dev:all   // Run all services (web, api, shared)
   ```
### Testing
   ```
   yarn test      // Run all tests
   yarn test:coverage  // Run tests with coverage
   ```
### Building
   ```
   yarn build:all  // Build all packages
   ```
     
## Project Structure
```
packages/web/
├── app/               # Next.js App Router (Server Components)
│ └──  (routes)/       # URL-based routing
│
├── src/               # FSD(Feature-Sliced Design) structure
│ ├── application/     # App-wide settings
│ ├── features/        # Domain-specific feature modules
│ ├── entities/        # Domain models and basic CRUD
│ └── shared/          # Reusable modules
```
This structure combines Next.js App Router with Feature-Sliced Design (FSD) architecture to ensure:
- Clear separation between routing (app/) and business logic (src/)
- Domain-driven organization of features and entities
- Reusable components and utilities in shared modules
- Scalable and maintainable codebase structure

For a detailed story of optimizing Freedivah's architecture with FSD, refer to [this document](https://www.notion.so/jiah827/Optimizing-Freedivah-s-Architecture-with-Feature-Sliced-Design-1134ef50e63380b1b47bea0cc16f5f64?pvs=4#1144ef50e63380aebdb8e32ea49f33f4).

## Design
<img src="docs/images/Freedivah_Design.webp" alt="description" style="width: auto; height: 700px" />

For detailed documentation, including Ideation MindMap, API Design, Route Design, Functional Specification, ER Diagram refer to [this document](https://jiah827.notion.site/Project-Freedivah-10f4ef50e633807387d4c9307d622bdb?pvs=74).






