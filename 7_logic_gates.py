logic = {}
to_do = []
with open("logic_gates.txt") as f:
    for line in f:
        fred = line.split()
        to_do.append(fred)
counter_doobie = 0
while counter_doobie < len(to_do):
    counter_doobie = 0
    for item in range(len(to_do)):
        if to_do[item][1] == "->":
            if to_do[item][0].isdigit():
                logic[to_do[item][2]] = int(to_do[item][0])
                counter_doobie += 1
            elif to_do[item][0] in logic:
                logic[to_do[item][2]] = logic[to_do[item][0]]
                counter_doobie += 1
        elif to_do[item][1] == "LSHIFT":
            if to_do[item][0] in logic:
                logic[to_do[item][4]] = logic[to_do[item][0]] << int(to_do[item][2])
                counter_doobie += 1
        elif to_do[item][1] == "RSHIFT":
            if to_do[item][0] in logic:
                logic[to_do[item][4]] = logic[to_do[item][0]] >> int(to_do[item][2])
                counter_doobie += 1
        elif to_do[item][0] == "NOT":
            if to_do[item][1] in logic:
                logic[to_do[item][3]] = ~logic[to_do[item][1]]
                counter_doobie += 1
        elif to_do[item][1] == "AND":
            if to_do[item][0].isdigit() and to_do[item][2] in logic:
                logic[to_do[item][4]] = int(to_do[item][0]) & logic[to_do[item][2]]
                counter_doobie += 1
            elif to_do[item][0] in logic and to_do[item][2] in logic:
                logic[to_do[item][4]] = logic[to_do[item][0]] & logic[to_do[item][2]]
                counter_doobie += 1
        elif to_do[item][1] == "OR":
            if to_do[item][0] in logic and to_do[item][2] in logic:
                logic[to_do[item][4]] = logic[to_do[item][0]] | logic[to_do[item][2]]
                counter_doobie += 1
print logic["a"]
reset = {}
reset["b"] = logic["a"]
counter_doobie = 0
while counter_doobie < len(to_do):
    counter_doobie = 0
    for item in range(len(to_do)):
        if to_do[item][0] == '14146':
            counter_doobie += 1
        elif to_do[item][1] == "->":
            if to_do[item][0].isdigit():
                reset[to_do[item][2]] = int(to_do[item][0])
                counter_doobie += 1
            elif to_do[item][0] in reset:
                reset[to_do[item][2]] = reset[to_do[item][0]]
                counter_doobie += 1
        elif to_do[item][1] == "LSHIFT":
            if to_do[item][0] in reset:
                reset[to_do[item][4]] = reset[to_do[item][0]] << int(to_do[item][2])
                counter_doobie += 1
        elif to_do[item][1] == "RSHIFT":
            if to_do[item][0] in reset:
                reset[to_do[item][4]] = reset[to_do[item][0]] >> int(to_do[item][2])
                counter_doobie += 1
        elif to_do[item][0] == "NOT":
            if to_do[item][1] in reset:
                reset[to_do[item][3]] = ~reset[to_do[item][1]]
                counter_doobie += 1
        elif to_do[item][1] == "AND":
            if to_do[item][0].isdigit() and to_do[item][2] in reset:
                reset[to_do[item][4]] = int(to_do[item][0]) & reset[to_do[item][2]]
                counter_doobie += 1
            elif to_do[item][0] in reset and to_do[item][2] in reset:
                reset[to_do[item][4]] = reset[to_do[item][0]] & reset[to_do[item][2]]
                counter_doobie += 1
        elif to_do[item][1] == "OR":
            if to_do[item][0] in reset and to_do[item][2] in reset:
                reset[to_do[item][4]] = reset[to_do[item][0]] | reset[to_do[item][2]]
                counter_doobie += 1
print reset["a"]                
