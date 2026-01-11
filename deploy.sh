#!/bin/bash

# Deploy to gh-pages branch
echo "Deploying to GitHub Pages..."

# Build the project
npm run build

# Navigate to dist folder
cd dist

# Initialize git repo
git init
git config user.email "github-actions@github.com"
git config user.name "GitHub Actions"

# Add all files
git add -A

# Commit
git commit -m "Deploy to GitHub Pages"

# Create gh-pages branch
git branch -M gh-pages

# Push to gh-pages
git push -f "https://oauth2:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git" gh-pages

echo "Deployment complete!"

