# CareCompass

CareCompass is an AI-powered web application that helps users find nearby health and support resources based on their needs. Users can describe what kind of help they need in natural language, and the app returns relevant locations on a map along with a short explanation of why those resources match.

This project was built during a hackathon with a focus on creating something meaningful, practical, and community-oriented. For the first version, the project is scoped to the **Merced, California** area.

---

## Elevator Pitch

CareCompass is an AI-powered web app that turns a user’s health and support needs into nearby, relevant local resources.

---

## Features

- Natural language input for user needs
- AI-based classification of support needs
- Local resource matching for the Merced area
- Interactive map view with resource locations
- Results list with explanations
- Filters such as low-cost preference and open-now options
- Frontend and backend deployed separately

---

## Tech Stack

### Frontend
- React
- Tailwind CSS
- React Leaflet
- Leaflet

### Backend
- FastAPI
- Python

### AI
- OpenAI API

### Deployment
- Vercel (frontend)
- Render (backend)

### Version Control
- GitHub

---

## How It Works

1. The user enters a description of the help they need.
2. The frontend sends the request to the FastAPI backend.
3. The backend sends the text to the OpenAI API.
4. The AI model classifies the request into structured categories such as:
   - mental health
   - primary care
   - food assistance
   - emergency care
5. The backend matches the classified need with curated Merced-area resources.
6. The frontend displays the matched results in both a list and a map view.

---

## Inspiration

We wanted to build something that could have a real impact on the community. When people are stressed, overwhelmed, or dealing with a health-related issue, it can be difficult to know where to start. Search engines often return too much information, and not all of it is relevant or easy to understand.

CareCompass was created to simplify that process by helping people explain their needs in plain language and then connecting them with nearby support resources in a more direct and user-friendly way.

---

## What I Learned

This project was a major learning experience for me, especially on the backend side. It was my first time working with APIs in a real project and my first time integrating an AI model into an application.

I used **OpenAI not only as part of the project itself, but also as a learning tool throughout development**. OpenAI helped me understand how APIs work, how to structure requests and responses, and how to break the project idea into smaller technical steps. It played an important role in helping me learn how to connect the frontend and backend, organize the FastAPI backend, and apply AI in a practical way inside the web app.

Through this project, I learned:
- how to set up and organize a FastAPI backend
- how to connect a React frontend to a backend API
- how to use the OpenAI API for natural language classification
- how to deploy a frontend and backend separately
- how to turn an idea into a working prototype under hackathon time constraints

---

## Challenges We Faced

One of the biggest challenges was turning a broad idea into something realistic for a hackathon. At first, the project idea was larger than what we could build in a short amount of time, so we narrowed the scope to the Merced area and focused on a minimum viable product.

Another challenge was deciding how AI should be used in a meaningful way. Instead of using AI just for the sake of saying the project had AI, we designed it so that AI would handle natural-language understanding, while the actual resource data would come from a curated dataset. This made the app more reliable and practical.

There were also technical challenges with:
- learning API integration for the first time
- connecting frontend and backend deployment
- configuring Tailwind and React
- handling deployment across Vercel and Render

---

## Contributions

### Backend / AI Integration
I worked on the backend development of the project. My responsibilities included:
- setting up the FastAPI backend
- creating API routes
- connecting the frontend and backend
- integrating the OpenAI API
- structuring the AI workflow for classifying user input
- helping define the technical direction of the project

This was my first time using APIs in a real application, so it was a valuable experience in learning how to apply AI models in software development.

### Frontend / Styling
My teammate worked on the frontend and styling of the project. Their responsibilities included:
- building the user interface
- organizing the layout
- improving the visual design
- making the site more polished, clear, and user-friendly
- supporting the interactive map and results presentation

---

## Project Structure

```bash
carecompass/
  frontend/
    src/
    package.json
    vite.config.js
  backend/
    main.py
    ai_service.py
    matcher.py
    merced_resources.py
    requirements.txt
