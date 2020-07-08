import json

json_data = open("./src/assets/thelist.json").read()

def parse(text):
    return json.loads(text)

parse(json_data)

print("JSON Parsed!")
