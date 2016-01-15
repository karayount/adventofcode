orig_length = 0
new_length = 0

with open("8_matchsticks_input.txt") as gibberish:
    for line in gibberish:
        line = line.strip()
        orig_length += len(line)
        adder_count = 0
        for index in range(len(line)):
            if line[index] == "\\" or line[index] == "\"":
                adder_count += 1
        new_length += len(line) + adder_count + 2

print new_length - orig_length


one_string = open("8_matchsticks_input.txt").read()
one_string = one_string.strip()
orig_length = len(one_string)
adding = 0
for index in range(len(one_string)):
    if one_string[index] == "\\" or one_string[index] == "\"":
        adding += 1
new_length = orig_length + adding + 600
print new_length - orig_length
