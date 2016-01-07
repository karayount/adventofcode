houses_visited = set()
santa_x = 0
santa_y = 0
robo_x = 0
robo_y = 0
steps = 0
this_house = (santa_x, santa_y)
houses_visited.add(this_house)

with open("santa_input.txt") as f:
    while True:
        c = f.read(1)
        if not c:
            print "End of file"
            break
        if steps%2 == 0:
            if c == "^":
                santa_y += 1
                steps += 1
            elif c == "v":
                santa_y -= 1
                steps += 1
            elif c == "<":
                santa_x -= 1
                steps += 1
            elif c == ">":
                santa_x += 1
                steps += 1
            this_house = (santa_x, santa_y)    
        elif steps%2 == 1:
            if c == "^":
                robo_y += 1
                steps += 1
            elif c == "v":
                robo_y -= 1
                steps += 1
            elif c == "<":
                robo_x -= 1
                steps += 1
            elif c == ">":
                robo_x += 1
                steps += 1
            this_house = (robo_x, robo_y)
        houses_visited.add(this_house)
print len(houses_visited)
print steps
