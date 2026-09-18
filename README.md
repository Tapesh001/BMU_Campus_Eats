# BMU Campus Eats

BMU Campus Eats is a web development project for BML Munjal University students to discover campus food shops, place hostel-gate orders, and track delivery status.

## Team members

| Name | Student ID |
| --- | --- |
| Tapesh | 250853 |
| Vibhuti Anand | 250616 |
| Aayushi Yadav | 250272 |
| Molik Garg | 250418 |

## Features

- Login screen with BMU branding
- Home dashboard with onboarding and benefits
- Campus shops directory with live status badges
- Cart review and checkout summary
- Orders history with status tracking
- Responsive layouts for desktop and smaller screens

## Tech stack

- React
- Vite
- React Router
- CSS modules by feature area in `src/styles.css`
- Lucide React icons

## Project structure

Each primary tab is represented by its own page component in `src/main.jsx`: `Login`, `Home`, `Shops`, `Cart`, and `Orders`. Shared navigation, buttons, badges, and layout primitives are kept reusable in the same file so the page files can be split into `src/pages/` later without changing the UI behavior.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Design reference

This implementation follows the BMU Campus Eats Figma design, including the dark green brand palette, warm off-white page background, rounded content panels, status badges, and the five primary screens.
"# BMU_Campus_Eats" 
