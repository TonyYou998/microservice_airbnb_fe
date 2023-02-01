# Use an existing node image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Set the environment variables
ENV PORT 3000

# Expose the port to the host system
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]

