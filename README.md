# hustbee-tailwindcss
Step 1: npm init -y
Step 2: npm install tailwindcss
Step 3: Create Public and src folder
Step 4: Create styles.css inside src folder than paste tailwind directive styles into your style CSS file and in public folder create index.html.
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
Step 5: npx tailwindcss init
    This is used to create a config file to customize the designs. It is an optional step.
Step 6: Open tailwind.config.js find content section paste this code for reference: "./public/**/*.html"
Step 7: Open packpage.json find script place this code "build-tailwindcss": "tailwindcss -i src/styles.css -o public/output.css" than in terminal run this command npm   run build-tailwindcss.
    This command is used to compile style.css is the file which has to be compiled and output.css is the file on which it has to be compiled.If the file output.css is not created earlier then it will automatically created.
