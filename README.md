# Image Lambda

## Author

Simone Odegard

## Repo Name

image-lambda

## Branch Name

dev

## How to use lambda

You would first upload an image to simonebucket2 with s3. From there, it will trigger an event where you can see in the logs an array of all images that have been uploaded in JSON format.

## Issues I encountered

When I first started this assignment, I couldn't get my code to show that it was working and triggering when the image was uploaded. I found that the issue was from not naming my file index.js. Once I changed the file name then it was working. The second part that was difficult was finding a way to get the images to return. It turned out that it was a permissions issue. I needed to create a permissions policy.

## Image

![images.json file](photo.png)

## Pull Requests

- [PR 1](https://github.com/SimoneOdegard/image-lambda/pull/1)