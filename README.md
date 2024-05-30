Deploy app to AWS project

- AWS Aprunner:
    1. Fully managed service for building and running containers. We can give app runer our code and it will build the image for use
    2. We can also make appruner to use an image that we have build using another service like github actions

Steps: 
    1. Setup Github secrets
    2. Create ECR Repo. The ECR repo should have the same name as the GitHub repo.