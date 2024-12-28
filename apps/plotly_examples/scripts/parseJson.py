#Parses the json out of the dataset generated by LLM
import json
import re

# Read the file content
with open('dataset.json', 'r') as file:
    content = file.read()

# Extract JSON strings using regular expressions
json_strings = re.findall(r'```json\n(.*?)\n```', content, re.DOTALL)

# Initialize an empty list to store parsed data
parsed_data = []

# Parse the JSON strings, ensuring to check for None or empty strings
for json_str in json_strings:
    if json_str and json_str.strip():
        try:
            parsed_data.append(json.loads(json_str))
        except json.JSONDecodeError as e:
            print(f"Failed to parse JSON string: {json_str}")
            print(f"Error: {e}")

# Save the parsed data to a new file
output_file = 'parsed_data.json'
with open(output_file, 'w') as file:
    json.dump(parsed_data, file, indent=2)

print(f"Parsed data has been saved to {output_file}")