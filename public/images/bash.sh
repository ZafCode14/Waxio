#!/bin/bash

# Path to the main directory containing all the subdirectories
main_directory="items"

# Iterate over each subdirectory in the main directory
for dir in "$main_directory"/*/; do
  # Get the directory name
  dir_name=$(basename "$dir")

  # Remove the first word from the directory name
  new_dir_name=$(echo "$dir_name" | sed 's/^[^ ]* //')

  # Rename the directory
  new_dir_path="${main_directory}/${new_dir_name}/"
  mv "$dir" "$new_dir_path"

  # Counter for renaming files
  count=1

  # Iterate over each file in the subdirectory
  for file in "${new_dir_path}"*; do
    # Check if the file exists to avoid errors with empty directories
    if [ -f "$file" ]; then
      # Get the file extension
      extension="${file##*.}"

      # Rename the file to photo1.png, photo2.png, etc.
      new_file="${new_dir_path}photo${count}.png"

      # Convert the image to PNG format if it's not already a PNG
      if [ "$extension" != "png" ]; then
        convert "$file" "$new_file"
        rm "$file"
      else
        mv "$file" "$new_file"
      fi

      # Increment the counter
      ((count++))
    fi
  done
done

echo "Renaming and conversion complete!"