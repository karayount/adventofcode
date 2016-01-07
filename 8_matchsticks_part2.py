# def matchsticks():


count = 0
with open("matchsticks_input.txt") as f:
    for line in f:
        fred = line.strip()
        count += fred.count('\\\\')
        fred = fred.replace("\\\\", "$")
        count += 2 + fred.count('\\"') + (3 * fred.count('\\x'))
#            count += char_count(fred)
print count


# def char_count(digisanta):
#     contains = len(digisanta) - 2
#     for i in range(1, len(digisanta)-3):
#         if digisanta[i] == "\\":
#             # no preceding other backslash
#             if digisanta[i-1] !="\\":
#                 if digisanta[i+1] == 'x':
#                     contains -= 3
#                 elif digisanta[i+1] == "\"" or digisanta[i+1] == "\\":
#                     contains -= 1
#             # has preceding backslash, make sure 2 or do nothing
#             elif digisanta[i+1] == 'x':
#                 if digisanta[i-1] == "\\" and digisanta[i-2] == "\\":
#                     contains -= 3
#             elif digisanta[i+1] == "\"" or digisanta[i+1] == "\\":
#                 if digisanta[i-1] == "\\" and digisanta[i-2] == "\\":
#                     contains -= 1
#     return len(digisanta) - contains


