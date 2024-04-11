Portfolio

Docker image with React project

Step 1. Download the project from this repository, it contains the React app and the dockerfiles necessary to create the docker image.

Step 2. Inside the project's folder in the command prompt use the next command:

docker build -t portfolio3:latest .

Step 3. Once the process is finished, use this command:

docker run --name assignment -d -p 5575:6006 portfolio3:latest

It will create a container with the image already created, and deployed in localhost:5575 (supposedly).

Once the container is created, you can search into and find a folder(workdir) named /Mancilla_Francisco_final_site with the project files.