def naughty_or_nice():
    nice_strings = 0
    with open('naughty_nice_input.txt') as f:
        for line in f:
            if is_nice(line):
                nice_strings += 1
    print nice_strings


def is_nice(santa_line):
    if "ab" in santa_line or "cd" in santa_line or "pq" in santa_line or "xy" in santa_line: 
        return False
    elif double_letter(santa_line) and three_vowels(santa_line):
        return True
    else:
        return False


def double_letter(doublet):
    for i in range (0, len(doublet)-1):
        if doublet[i] == doublet[i+1]:
            return True
    else:
        return False


def three_vowels(drei):
    vowels = 0
    for i in range (0, len(drei)):
        if drei[i] == "a" or drei[i] == "e" or drei[i] == "i" or drei[i] == "o" or drei[i] == "u":
            vowels +=1
    if vowels >= 3:       
        return True
    else:
        return False


naughty_or_nice()