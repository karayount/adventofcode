def naughty_or_nice():
    nice_strings = 0
    with open('naughty_nice_input.txt') as f:
        for line in f:
            if is_nice(line):
                nice_strings += 1
    print nice_strings


def is_nice(santa_line):
    if sandwich(santa_line) and twice_pair(santa_line):
        return True
    else:
        return False


def sandwich(middle):
    for i in range(0, len(middle)-2):
        if middle[i] == middle[i+2]:
            return True
    else:
        return False


def twice_pair(zwei):
    for i in range(0, len(zwei)-1):
        first = zwei[i:i+2]
        for j in range(i+2, len(zwei)-1):
            if zwei[j:j+2] == first:
                return True
    else:
        return False


naughty_or_nice()