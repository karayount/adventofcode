long_thing = ""
literals = 0

with open("8-advent.txt") as gibberish:
    for line in gibberish:
        current = line.strip()
        long_thing += (current[1:-1])
        literals += 2

    start_pos = 0
    end_pos = long_thing.find("\\")
while end_pos != -1:
    if long_thing[end_pos+1] == "\\":
        long_thing = long_thing[:end_pos] + "@" + long_thing[end_pos+2:]
        literals += 1
    elif long_thing[end_pos+1] == "\"":
        long_thing = long_thing[:end_pos] + "@" + long_thing[end_pos+2:]
        literals += 1
    elif long_thing[end_pos+1] == "x":
        long_thing = long_thing[:end_pos] + "@" + long_thing[end_pos+4:]
        literals += 3
    start_pos = end_pos+1
    end_pos = long_thing.find("\\")

print literals
