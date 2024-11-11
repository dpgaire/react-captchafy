# react-captchafy

A customizable, lightweight CAPTCHA component for React applications. `react-captchafy` provides an easy way to integrate CAPTCHA into your forms, helping you protect your app against spam and automated submissions.

## ✨ Features

- 🔐 **Enhanced Security**: Protects your forms from bots and automated scripts.
- 🎨 **Highly Customizable**: Customize the appearance, font, colors, and more.
- 🖥️ **Canvas-based CAPTCHA**: Renders CAPTCHA using HTML5 Canvas for better performance.
- 📦 **Lightweight**: Minimal dependencies to keep your bundle size small.
- ⚙️ **Flexible API**: Easy integration with just a few props.

## 📦 Installation

To get started, install the package via npm:

```bash
npm install react-captchafy
```

Or, if you're using yarn:

```bash
yarn add react-captchafy
```

## 🚀 Quick Start

Here's a basic example of how to use the `Captcha` component in your React application:

```jsx
import React from "react";
import Captcha from "react-captchafy";

const App = () => {
  const handleCaptchaValid = () => alert("Captcha is valid!");
  const handleCaptchaInvalid = () => alert("Captcha is invalid!");

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Captcha Example</h2>
      <Captcha
        onCaptchaValid={handleCaptchaValid}
        onCaptchaInvalid={handleCaptchaInvalid}
        errorMessage="The CAPTCHA you entered is incorrect."
        captchaLength={6}
        buttonLabel="Verify"
        customStyles={{
          input: {
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          },
          button: {
            marginTop: "10px",
            backgroundColor: "#4CAF50",
            color: "#fff",
          },
          resetIcon: { color: "#d9534f", cursor: "pointer" },
        }}
      />
    </div>
  );
};

export default App;
```

## 🔧 Props

| Prop Name          | Type       | Default Value                     | Description                                       |
| ------------------ | ---------- | --------------------------------- | ------------------------------------------------- |
| `onCaptchaValid`   | `function` | **Required**                      | Callback when CAPTCHA is successfully validated.  |
| `onCaptchaInvalid` | `function` | **Required**                      | Callback when CAPTCHA validation fails.           |
| `captchaLength`    | `number`   | `6`                               | Number of characters in the CAPTCHA.              |
| `canvasWidth`      | `number`   | `375`                             | Width of the CAPTCHA canvas.                      |
| `canvasHeight`     | `number`   | `40`                              | Height of the CAPTCHA canvas.                     |
| `fontStyle`        | `string`   | `'30px Brush Script MT, cursive'` | Font style for the CAPTCHA text.                  |
| `textColor`        | `string`   | `'black'`                         | Color of the CAPTCHA text.                        |
| `backgroundColor`  | `string`   | `'#f5f5f5'`                       | Background color of the CAPTCHA canvas.           |
| `buttonLabel`      | `string`   | `'PROCEED'`                       | Label for the verification button.                |
| `customStyles`     | `object`   | `{}`                              | Custom styles for the component elements.         |
| `isLoading`        | `boolean`  | `false`                           | Disables the button and shows a loader when true. |

## 📋 Usage Examples

### 1. Simple Usage

```jsx
<Captcha
  onCaptchaValid={() => console.log("Success!")}
  onCaptchaInvalid={() => console.log("Failed!")}
/>
```

### 2. Custom Styles and Captcha Length

```jsx
<Captcha
  onCaptchaValid={() => alert("Correct!")}
  onCaptchaInvalid={() => alert("Try Again!")}
  captchaLength={8}
  customStyles={{
    input: { padding: "10px", border: "2px solid blue" },
    button: { backgroundColor: "green", color: "white" },
  }}
/>
```

## 🎨 Custom Styling

You can style the CAPTCHA using the `customStyles` prop, which accepts an object:

- **input**: Style for the CAPTCHA input field.
- **button**: Style for the CAPTCHA verification button.
- **resetIcon**: Style for the reset icon.
- **canvas**: Style for the CAPTCHA canvas.

### Example:

```jsx
customStyles={{
  input: { width: '50%', padding: '10px' },
  button: { backgroundColor: '#007bff', color: 'white' },
  resetIcon: { fontSize: '20px' },
}}
```

## 🔍 Browser Support

The library is compatible with the latest versions of Chrome, Firefox, Safari, and Edge.

## 🛠️ Development

If you want to contribute to this project or run it locally:

```bash
git clone https://github.com/dpgaire/react-captchafy.git
cd react-captchafy
npm install
npm run build
```

### Running the Demo

```bash
npm start
```

## 📄 License

MIT License. See the [LICENSE](./LICENSE) file for more details.

## 🙌 Contribution

Feel free to submit issues, feature requests, or pull requests. Contributions are always welcome!

## 📬 Contact

For any questions or feedback, please reach out at [gairhedurga13@gmail.com](mailto:gairhedurga13@gmail.com).
