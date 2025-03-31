# Frontend Engineering Blog Platform

A modern, responsive blog platform dedicated to frontend engineering principles, best practices, and the latest industry trends.

## Features

- **Clean, Modern Design**: Minimalist, tech-focused aesthetic that puts content first
- **Responsive Layout**: Seamlessly adapts to all device sizes
- **Category and Tag Organization**: Easy navigation through content categorization
- **Syntax Highlighting**: Beautiful code formatting for technical articles
- **Search Functionality**: Find content quickly with full-text search
- **Dark Mode Support**: Comfortable reading experience in any lighting condition
- **Newsletter Sign-up**: Stay updated with the latest articles
- **Commenting System**: Engage with the community through article discussions
- **Glossary of Terms**: Reference guide for frontend engineering terminology

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Syntax Highlighting**: React Syntax Highlighter
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/frontend-blog.git
   cd frontend-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src/app` - Next.js application routes
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions and sample data
- `/src/styles` - Global styles and Tailwind configuration
- `/src/types` - TypeScript type definitions

## Customization

### Adding New Posts

To add new blog posts, add new entries to the `posts` array in `/src/lib/sample-data.ts` following the existing format.

### Modifying Styles

This project uses Tailwind CSS for styling. You can modify the theme in `tailwind.config.js` to change colors, typography, and other design elements.

## License

This project is licensed under the ISC License.

## Acknowledgments

- The Next.js team for creating an excellent framework
- The Tailwind CSS team for the utility-first CSS framework
- The open-source community for all the amazing tools and libraries 