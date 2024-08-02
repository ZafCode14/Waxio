#!/bin/bash

# Path to the main directory containing all the subdirectories
main_directory="items"

# Iterate over each subdirectory in the main directory
for dir in "$main_directory"/*/; do
  # Counter for renaming files
  count=1

  # Iterate over each file in the subdirectory
  for file in "$dir"*; do
    # Check if the file exists to avoid errors with empty directories
    if [ -f "$file" ]; then
      # Rename the file to photo1.png, photo2.png, etc.
      mv "$file" "${dir}photo${count}.png"
      
      # Increment the counter
      ((count++))
    fi
  done
done

echo "Renaming complete!"