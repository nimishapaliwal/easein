# EaseIn: Activity Flash Cards Website Plan

## 1. Product Overview

EaseIn is a website that helps users prepare for everyday real-world interactions through simple, visual flash cards. A user selects an activity they need help with and reviews a short sequence of cards explaining what to say, what to expect, and what actions to take.

Example activities:

- Asking for a glass of water on an airplane
- Ordering a Subway sandwich
- Booking a ticket for a specific metro station
- Checking into a hotel
- Asking for directions in a public place

## 2. Problem Statement

Common public interactions can be stressful for users who are unfamiliar with a situation, lack confidence in spoken language, have social anxiety, are traveling in a new place, or benefit from step-by-step visual support. Existing guidance is often lengthy, generic, or difficult to use in the moment.

EaseIn should make these situations easier by presenting practical scripts and steps in a calm, predictable flash-card format.

## 3. Target Users

- Travelers encountering unfamiliar services or transportation systems
- Users learning conversational English or another supported language
- People who feel anxious about social interactions
- Neurodivergent users who benefit from preparation and structured sequences
- Caregivers or educators helping someone practice independent daily activities

## 4. Core User Experience

### Primary Journey

1. The user lands on the website and sees activity categories.
2. The user searches for or chooses an activity, such as "Order a sandwich."
3. The user opens an activity deck and reads one flash card at a time.
4. Cards guide the user through the situation using simple instructions, sample dialogue, and optional visual cues.
5. The user can move forward or backward, restart the deck, or mark it as practiced.

### Example Deck: Asking for Water on an Airplane

| Card | Purpose | Example Content |
| --- | --- | --- |
| 1 | Introduce the situation | "You are seated on an airplane and would like water." |
| 2 | Identify the right moment | "Wait until a flight attendant is nearby or press the call button if needed." |
| 3 | Provide the request | "Excuse me, may I have a glass of water, please?" |
| 4 | Prepare for a response | "They may ask: Still or sparkling? Cold water or room temperature?" |
| 5 | Close the interaction | "Say: Thank you." |

## 5. MVP Scope

### User-Facing Features

- Home page introducing the product and activity categories
- Browse page showing available activity decks
- Search by activity title or keyword
- Activity detail page with a step-by-step flash-card viewer
- Previous, next, and restart navigation for cards
- Clear card progress indicator, such as "Card 2 of 5"
- Mobile-friendly design for use while traveling or practicing
- Accessibility basics: keyboard support, readable type, strong contrast, and simple language

### Initial Activity Categories

- Travel
- Food and Drink
- Public Transport
- Shopping
- Accommodation

### Initial Deck Set

1. Ask for water on an airplane
2. Order a sandwich at Subway
3. Buy a metro ticket to a specific station
4. Ask for directions inside an airport
5. Check into a hotel
6. Order coffee at a cafe
7. Pay for items at a grocery store
8. Ask a store employee where an item is located

### Out of Scope for the First Release

- User accounts and saved progress
- User-created decks
- AI-generated activity guidance
- Payments or subscriptions
- Offline app support
- Community ratings or comments
- Full multi-language translation

## 6. Content Design

### Deck Structure

Each activity deck should contain:

- Title
- Short description
- Category
- Difficulty level: Beginner, Intermediate, or Advanced
- Estimated practice time
- Scenario context
- Ordered flash cards
- Optional tips or vocabulary list

### Flash Card Structure

Each card should support:

- Step title
- Brief instruction in plain language
- Sample words the user can say
- Likely reply from the other person, when relevant
- Optional tip or reassurance
- Optional illustration or icon

### Content Principles

- Keep each card focused on one action.
- Use polite, natural phrases rather than formal textbook language.
- Prepare users for likely follow-up questions.
- Avoid unnecessary choices or complex paragraphs.
- Use supportive phrasing without making assumptions about the user.

## 7. Proposed Screens

### Home Page

- Product introduction
- Featured activity decks
- Category shortcuts
- Search entry point

### Browse Activities Page

- Activity cards with title, category, difficulty, and time estimate
- Category filters
- Search results

### Activity Deck Page

- Scenario name and short context
- Large flash-card area
- Progress indicator
- Previous and next controls
- Restart action
- Optional "Tips and useful words" section after completion

### About / Accessibility Page

- Purpose of the product
- How to use activity decks
- Accessibility and content-feedback information

## 8. Data Model Draft

The MVP can store curated activity content locally as structured JSON or TypeScript data.

```ts
type ActivityDeck = {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedMinutes: number;
  tags: string[];
  cards: FlashCard[];
};

type FlashCard = {
  id: string;
  title: string;
  instruction: string;
  phraseToSay?: string;
  likelyResponse?: string;
  tip?: string;
  imageAlt?: string;
};
```

## 9. Product and Design Requirements

### Tone

- Calm
- Encouraging
- Practical
- Easy to scan

### Accessibility Requirements

- Fully usable with keyboard navigation
- Semantic headings and controls
- Visible focus states
- Minimum accessible color contrast
- Support for increased text size
- Images must include useful alternative text
- Avoid relying on color alone to communicate meaning

### Responsive Design

- Mobile-first flash-card experience
- Comfortable tap targets
- Cards readable without horizontal scrolling
- Desktop layout can add surrounding deck context without clutter

## 10. Suggested Technical Approach

For an MVP, build a frontend-only application with curated deck content stored in the project.

Suggested stack:

- Next.js or React with TypeScript
- Tailwind CSS or a small component styling system
- Static/local structured activity data
- Lightweight client-side search and category filters
- Deployable on Vercel or similar static-friendly hosting

This approach keeps the first version simple while leaving room for a future content management system, authentication, analytics, and translated content.

## 11. Delivery Phases

### Phase 1: Foundation

- Choose application stack and scaffold the project
- Define visual style and shared layout
- Create structured deck data format
- Add initial activity content

### Phase 2: MVP Experience

- Implement home and browse screens
- Implement activity deck viewer and navigation
- Add search and category filtering
- Ensure responsive and keyboard-friendly behavior

### Phase 3: Quality and Launch

- Review all scripts for clarity and realism
- Test mobile layouts and accessibility basics
- Add metadata, empty states, and polished completion flow
- Deploy an initial public version

### Future Enhancements

- Language switching and translated phrases
- Audio playback for phrases
- Favorite or practiced decks
- Scenario role-play mode
- User or educator-created activities
- Personalized suggestions
- Offline support

## 12. MVP Acceptance Criteria

- A visitor can browse at least eight activity decks across multiple categories.
- A visitor can find an activity using search or category filtering.
- A visitor can complete a deck by navigating its ordered flash cards.
- Every initial deck includes actionable phrases and likely interaction responses.
- The core experience works on phone and desktop screen sizes.
- Navigation and card controls can be operated using a keyboard.
- Content uses clear, supportive, real-world language.

## 13. Open Decisions

- Product name and visual identity confirmation
- Initial language support: English only or bilingual pilot
- Whether decks should use illustrations in the MVP
- Preferred frontend framework and hosting platform
- Whether user progress should remain strictly out of scope for version one

## 14. Immediate Next Steps

1. Confirm the MVP activity list and refine the example scripts.
2. Select the implementation stack.
3. Scaffold the site and create the initial structured deck data.
4. Build the flash-card viewer first, then add discovery and search.
