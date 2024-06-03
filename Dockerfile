# Use an official Node.js runtime as the base image
FROM node:22

# Set the working directory in the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker cache
COPY package*.json ./

# Install Node.js dependencies in the Docker image
RUN npm install --production

# Copy the current directory (on your build environment) into the /app directory in your Docker image
COPY . .

# If you have npm build scripts or if you use TypeScript and need to compile it into JavaScript, add this line
# RUN npm run build

# Make port 8080 available outside this Docker container
EXPOSE 8080

# Start your app
CMD ["node", "index.js"]
