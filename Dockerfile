# Use an official Node.js runtime as the base image
FROM node:22

# Set the working directory in the Docker image to /app
WORKDIR /app

# Copy the current directory (on your build environment) into the /app directory in your Docker image
COPY . .

# If you have npm build scripts or if you use Typescript and need to compile it into Javascript, add this line
# RUN npm run build

# If you have some production environment variable or secrets, use '--build-arg' when you run 'docker build' and add this line
# ARG MY_ENV_VARIABLE
# ENV MY_ENV_VARIABLE=${MY_ENV_VARIABLE}

# Install Node.js dependencies in the Docker image
RUN npm install

# Make port 8080 available outside this Docker container
EXPOSE 8080

# Start your app
CMD ["node", "index.js"]