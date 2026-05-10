# Sign-In Layout 🔐

A modern, responsive sign-in screen built with React Native and Expo. This project demonstrates best practices for authentication UI with support across iOS, Android, and web platforms.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Components](#components)
- [Platform Support](#platform-support)
- [Resources](#resources)

## ✨ Features

- **Beautiful Sign-In Form** - Email and password input fields with validation
- **Social Login Integration** - Quick sign-in options with social providers
- **Responsive Design** - Optimized for all screen sizes
- **Keyboard Handling** - Smart keyboard avoidance on mobile platforms
- **TypeScript Support** - Full type safety throughout the codebase
- **Cross-Platform** - Works seamlessly on iOS, Android, and web
- **Animated Effects** - Glass effect and smooth animations powered by Reanimated

## 🛠️ Tech Stack

- **Framework**: React Native 0.83.6
- **Development**: Expo 55.0.23
- **Routing**: Expo Router 55.0.14
- **Navigation**: React Navigation 7.15.5
- **Animations**: React Native Reanimated 4.2.1
- **UI Effects**: Expo Glass Effect 55.0.11
- **Language**: TypeScript 5.9.2
- **Runtime**: React 19.2.0

## 📁 Project Structure

```
sign-in-layout/
├── src/
│   ├── app/
│   │   └── index.tsx              # Main sign-in screen
│   └── components/
│       ├── Header.tsx             # Header section with title/logo
│       ├── SignInForm.tsx          # Email & password input form
│       ├── SocialLogin.tsx         # Social authentication buttons
│       └── Footer.tsx             # Footer with additional links
├── assets/
│   ├── expo.icon/                 # App icons
│   ├── images/
│   │   └── tabIcons/              # Navigation tab icons
│   └── logo/                      # Logo and UI assets
├── app.json                       # Expo configuration
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or pnpm
- Expo CLI (optional: `npm install -g expo-cli`)

### Installation

1. **Clone or download the project**

   ```bash
   cd sign-in-layout
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**

   ```bash
   pnpm start
   # or
   npm start
   ```

4. **Choose your platform**

   In the Expo CLI output, select one of the options:
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Press `w` for web
   - Press `e` for Expo Go app

## 📦 Available Scripts

| Script               | Description                       |
| -------------------- | --------------------------------- |
| `pnpm start`         | Start the Expo development server |
| `pnpm android`       | Run on Android emulator           |
| `pnpm ios`           | Run on iOS simulator              |
| `pnpm web`           | Run in web browser                |
| `pnpm lint`          | Run ESLint to check code quality  |
| `pnpm reset-project` | Reset to blank project state      |

## 🧩 Components

### Header Component

Displays the sign-in screen header with title and branding.

### SignInForm Component

- Email address input field with validation
- Password input field
- Form submission logic
- Input state management

### SocialLogin Component

Social authentication options for quick sign-in with providers like Google, Apple, Facebook, etc.

### Footer Component

Additional navigation links, password recovery options, and sign-up prompts.

## 📱 Platform Support

- **iOS**: Simulator or physical device
- **Android**: Emulator or physical device
- **Web**: Modern browsers (Chrome, Safari, Firefox, Edge)

## 🎯 Development Tips

- Edit components in the `src/components/` directory
- Use TypeScript for type safety
- Follow React Native best practices for platform-specific code
- Test on multiple platforms during development
- Check `app.json` for Expo-specific configuration

## 🔗 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
- [React Navigation Documentation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is open source and available under the MIT License.

---

Happy coding! 🎉

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

  ## image

  ![LIve image](image.png)
