# React Native Setup Guide

## System Requirements:

- **CPU:** 11th Gen Intel Core i7 11800@2.30 GHz
- **RAM:** 32GB
- **Operating System:** Windows 11

## Installation Instructions:

1. **Install Node.js:** React Native requires Node.js to function. 
   - [Download the latest LTS version from the Node.js website.](https://nodejs.org/en/download/current)

2. **Java Development Kit (JDK):** React Native requires the JDK. 
   - [Download and install from Oracle's official site.](https://www.oracle.com/ca-en/java/technologies/javase/jdk11-archive-downloads.html) 
   
   > Note: It's recommended to use Node 16 or newer for Node. Using JDK versions higher than 11 may cause issues.

## Configuration Steps:

### Android Development Setup:

1. [Install Android Studio from the official website.](https://developer.android.com/studio/)
   - Ensure you've checked "Android SDK" and "Android Virtual Device" during the installation process.

2. **Set Environment Variable:** 
   - Add `ANDROID_HOME` to environment variables (this should be the path to your Android SDK).
   - Add `platform-tools` to PATH.

## Project Creation:

1. In your terminal or command prompt, navigate to your desired directory.
2. Install npm using `npm install`.
3. Initialize your app with `npx react-native@latest init TodoListApp`.

### Creating a Virtual Machine:

1. In Android Studio, under "more actions," select "Virtual Device Manager".
2. Click on "Create Device". Choose your preferred phone device and click "Next".
3. Select your desired system image.

## Running the Project:

1. In Android Studio, click the "Open" option and select the `android` folder of your project.
2. Click on "Make Project" under the "Build" option.
3. Once the project has built successfully, click on "Run" and choose your desired device.

## Troubleshooting:

- **Issues with Metro Bundler:** 
  - Clear cache using `npx react-native start --reset-cache`.

- **Encountering Build Errors:**
  1. Validate the `ANDROID_HOME` setting.
  2. Delete the `node_modules` folder and `package-lock.json`, then run `npm install`.

## Resources:

- [Official React Native Documentation](https://reactnative.dev/docs/environment-setup)
