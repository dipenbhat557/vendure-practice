```markdown
# Vendure Practice

This repository contains a Vendure project that adds a custom button to the order list page in the Vendure admin UI. When clicked, this button generates a CSV file containing all orders visible in the frontend admin panel.

## Features

- **Generate CSV:** Export all orders in the current view to a CSV file.
- **Custom UI Extension:** Adds a new button to the order list in the Vendure admin UI.
- **TypeScript Support:** The project is fully typed using TypeScript.

## Prerequisites

- Node.js (v14 or higher)
- npm or Yarn
- Vendure CLI

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/dipenbhat557/vendure-practice.git
cd vendure-practice
```

### 2. Install Dependencies

Install the required dependencies using npm or Yarn:

```bash
npm install
```

Or with Yarn:

```bash
yarn install
```

### 3. Install `file-saver` and Type Declarations

Make sure the `file-saver` package and its TypeScript declarations are installed:

```bash
npm install file-saver
npm install --save-dev @types/file-saver
```

Or with Yarn:

```bash
yarn add file-saver
yarn add @types/file-saver --dev
```

### 4. Run the Vendure Server

Start the Vendure server:

```bash
npm run start
```

Or with Yarn:

```bash
yarn start
```

### 5. Access the Admin UI

After starting the server, you can access the Vendure admin UI at:

```
http://localhost:3000/admin
```

Log in using your credentials.

### 6. Generate CSV from Orders

- Navigate to the **Orders** page in the admin UI.
- You will see a new button labeled **"Generate CSV"**.
- Click this button to download a CSV file containing all orders visible in the current view.

## Project Structure

- **src/**: Contains the main source code for the Vendure custom plugin.
  - **extensions/my-ui/**: Contains the custom UI extension code, including the CSV generation feature.
- **plugin.ts**: Main plugin configuration.
- **providers.ts**: Handles the functionality of the "Generate CSV" button.

## Troubleshooting

### Common Issues

- **Cannot find module 'file-saver'**: Ensure `file-saver` and `@types/file-saver` are installed as described above.
- **Compilation errors**: Make sure your `tsconfig.json` is configured correctly and dependencies are installed.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a feature request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or feedback, feel free to reach out via the repository's Issues page.

---

### Author

- Dipen Bhat - [GitHub](https://github.com/dipenbhat557)
```
