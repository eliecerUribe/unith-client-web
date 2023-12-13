FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --force

# Copy the entire project to the working directory
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run", "dev"]
