# Fluenticons

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![SWC](https://img.shields.io/badge/SWC-F0AB3D?style=for-the-badge&logo=swc&logoColor=black)

**Fluenticons** is a React package that simplifies the integration of Microsoft Fluent Icons into your React applications. It takes the official Fluent Icons SVG files and transforms them into reusable React components with customizable properties.

## Features

* **Effortless Integration:** Easily use Microsoft Fluent Icons as React components.
* **Customizable Properties:** Control the appearance of icons through various props (e.g., size, color, fill, stroke).
* **Optimized Performance:** Built with Vite and SWC for fast builds and efficient code.
* **TypeScript Support:** Provides excellent type safety and autocompletion for a better development experience.
* **Based on Official Fluent Icons:** Stays up-to-date with the latest icons from Microsoft.

## Installation

You can install `fluenticons` using npm or yarn:

```bash
npm install fluenticons
# or
yarn add fluenticons
```

## Usage
Here's a basic example of how to use a Fluent Icon in your React component:
```typescript
import { HomeRegular } from 'fluenticons';

function MyComponent() {
  return (
    <div>
      <HomeRegular size={24} primaryFill="blue" />
      {/* You can also use secondaryFill, stroke, and other props */}
    </div>
  );
}
```

Note: Replace HomeRegular with the specific Fluent Icon you want to use. The package will likely export each icon as a separate component.

### Available Props
The generated React components will typically accept the following props (the exact props might vary depending on the icon and how the package is implemented):

* size: (number | string) Sets the width and height of the icon. Can be a number (in pixels) or a string (e.g., "1em", "20px").
* color: (string) Sets the primary fill color of the icon.
* className: (string) Allows you to apply custom CSS classes to the icon.
* style: (React.CSSProperties) Allows you to apply inline styles to the icon.
* gradient: ({start: string, stop: string; angle?: number}) Allows you to specify a gradient color for the icon.

Refer to the package's documentation or explore the component's props in your IDE for a complete list of available options.

### Project Structure
The project is structured as follows:

```
fluenticons/
├── src/
│   └── components/
│       └── ... (Generated icon components)
├── vite.config.ts
├── tsconfig.json
├── package.json
├── README.md
└── ...
```

### Contributing
Contributions are welcome! If you find a bug or have a suggestion, please open an issue or submit a pull request.   

### License
This project is licensed under the MIT License. See the LICENSE file for more information.   

### Tech Stack
React
TypeScript
Vite
SWC
Microsoft Fluent Icons
Acknowledgements
This project is inspired by and utilizes the excellent Microsoft Fluent Icons library.