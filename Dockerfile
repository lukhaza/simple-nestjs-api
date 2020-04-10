# Use the official node image.
FROM node:10.16.0

# Install ubuntu cookie cutter module.
RUN apt-get update && \
    apt -y install python3 && \
    apt -y install python-pip && \
    apt-get clean 

# Add an unprivileged user which the app will run as.
RUN useradd --user-group --create-home --shell /bin/bash lukhanyo-api

# Create and change ownership of the working directory
RUN mkdir /home/lukhanyo-api/lukhanyo-api
RUN chown -R lukhanyo-api /home/lukhanyo-api/lukhanyo-api

# Set the image working directory.
WORKDIR /home/lukhanyo-api/lukhanyo-api

# Expose the application port.
EXPOSE 3000

# Copy the api files.
COPY src/ ./
RUN chown -R lukhanyo-api ./

# Switch user.
USER lukhanyo-api

# Start the application.
CMD [ "npm", "run", "envsub:start" ]