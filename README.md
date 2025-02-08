# TasteBuds
<img src="src/assets/circular_favicon__1_-removebg-preview.png" alt="logo-image" width="80">

Welcome to **TasteBuds**, a website that helps you generate delicious recipes based on the ingredients you have! Whether you're looking to create something new or make the most of what's in your kitchen, this tool has you covered.

## ✨ Features
- Generate recipes based on user-input ingredients
- Simple and intuitive interface
- Encourages creativity in the kitchen
- Instant recipe suggestions

## 📖 How It Works
1. Enter the ingredients you have.
2. Click **Generate Recipe**.
3. Get a step-by-step cooking guide based on your input.
4. Cook with confidence and enjoy your meal!

## 🍳 Usage
Simply visit our website, input the ingredients, and let the tool do the rest. It will provide you with a customized recipe tailored to what you have on hand.

### More Ways to Use TasteBuds:
- **Try Different Combinations**: Experiment with various ingredients to discover new and exciting dishes.
- **Save Favorite Recipes**: Keep track of your favorite generated recipes for future reference.
- **Share Recipes**: Easily share your customized recipes with friends and family.
- **Adjust Serving Sizes**: Modify ingredient quantities based on the number of servings you need.
- **Filter by Cuisine**: Get recipes inspired by different cuisines and cooking styles.
Simply visit our website, input the ingredients, and let the tool do the rest. It will provide you with a customized recipe tailored to what you have on hand.

## 🖥️ Built With
- **React.js** – A powerful JavaScript library for building user interfaces.
- **Vite** – A fast build tool optimized for modern web development.

## 🖥️ Installation (For Developers)
If you want to run the project locally:
```bash
# Clone the repository
git clone https://github.com/Vishwasivan/TasteBuds.git

# Navigate to the project folder
cd TasteBuds

# Install dependencies 
npm install  # or yarn install

# Start the development server
npm start  # or yarn start 
# or
npm run dev  
```

# Import and use the API key in your project
In your JavaScript file (src/huggingface.js), import the API key and initialize the Hugging Face inference:
```javascript
const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(apiKey);

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await hf.chatCompletion({
            model: import.meta.env.VITE_MODEL_NAME,
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        });
        return response.choices[0].message.content;
    } catch (err) {
        console.error(err.message);
    }
}
```
This ensures your API key and model name are securely accessed from the `.env` file.  

# Set up environment variables
Create a `.env` file in the root directory and add your API key:
```
VITE_HUGGINGFACE_API_KEY=your-huggingface-api-key
VITE_MODEL_NAME=mistralai/Mixtral-8x7B-Instruct-v0.1
```
Make sure to replace `your-huggingface-api-key` with your actual Hugging Face API key. The model name is already set to `mistralai/Mixtral-8x7B-Instruct-v0.1`.

### Using Other API Keys
Along with the Hugging Face API, you can also use API keys from other services. To do this, add additional environment variables in your `.env` file:
```
VITE_OTHER_API_KEY=your-other-api-key
```
Then, access it in your code similarly:
```javascript
const otherApiKey = import.meta.env.VITE_OTHER_API_KEY;
```
This allows flexibility in integrating multiple APIs as needed.

## 📌 Contributing
Contributions are welcome! If you have ideas for improvements, feel free to submit a pull request or open an issue.

---
💡 **Turn your ingredients into a masterpiece—start cooking today!**
