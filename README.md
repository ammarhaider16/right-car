
# Right Car

Right Car is a Next.js application that uses AI to help users find the most suitable car for their needs based on their demographic and personal preferences. The app is built with Next.js and leverages OpenAI's gpt-3.5-turbo model to provide personalized car recommendations to users.

## Live Demo

Check out the live application [here](https://right-car.vercel.app).

## Features

- **User-friendly Interface**: Enter your demographic details and preferences easily.
- **Personalized Recommendations**: Get tailored car recommendations using OpenAI's ChatGPT.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/)
- **API Integration**: [OpenAI](https://openai.com/)
- **Styling**: [Styled-components](https://styled-components.com/) and [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [Vercel](https://vercel.com/)

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Clone the repository

\`\`\`bash
git clone https://github.com/ammarhaider16/right-car.git
cd right-car
\`\`\`

### Install dependencies

\`\`\`bash
npm install
\`\`\`

### Set up environment variables

Create a \`.env.local\` file in the root directory and add your OpenAI API key:

\`\`\`
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
\`\`\`

### Run the development server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies

\`\`\`json
"dependencies": {
  "dotenv": "^16.4.5",
  "framer-motion": "^11.2.11",
  "next": "14.2.4",
  "openai": "^4.52.0",
  "react": "^18",
  "react-dom": "^18",
  "styled-components": "^6.1.11",
  "vercel": "^34.2.7"
},
"devDependencies": {
  "eslint": "^8",
  "eslint-config-next": "14.2.4",
  "postcss": "^8",
  "tailwindcss": "^3.4.1"
}
\`\`\`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

Distributed under the MIT License. See \`LICENSE\` for more information.

## Contact

Ammar Haider - [@ammarhaider16](https://github.com/ammarhaider16)

Project Link: [https://github.com/ammarhaider16/right-car](https://github.com/ammarhaider16/right-car)

---

Feel free to customize this README to fit your needs. Happy coding!
