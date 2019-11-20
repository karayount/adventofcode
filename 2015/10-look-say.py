
num_in = "3113322113"

for x in range(40):
    new_number = ""
    currently_checking = num_in[0]
    how_many = 1
    for index in range(1, len(num_in)):
        if num_in[index] == currently_checking:
            how_many += 1
            if index == len(num_in)-1:
                new_number += str(how_many) + currently_checking
        else:
            new_number += str(how_many) + currently_checking
            how_many = 1
            currently_checking = num_in[index]
            if index == len(num_in)-1:
                new_number += str(how_many) + currently_checking
    num_in = new_number

print len(num_in)
