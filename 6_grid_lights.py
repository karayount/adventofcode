import re
brightness = 0
grid_lights = []
for i in range(1000):
    grid_lights.append([])
    for j in range(1000):
        grid_lights[i].append(0)
with open("light_the_grid.txt") as f:
    for line in f:
        fred = re.split(' |,|\n',line)
        if "turn on" in line:
            i_beg = int(fred[2])
            j_beg = int(fred[3])
            i_end = int(fred[5])
            j_end = int(fred[6])
            for i in range(i_beg, i_end+1):
                for j in range(j_beg, j_end+1):
                    grid_lights[i][j] += 1
        elif "turn off" in line:
            i_beg = int(fred[2])
            j_beg = int(fred[3])
            i_end = int(fred[5])
            j_end = int(fred[6])
            for i in range(i_beg, i_end+1):
                for j in range(j_beg, j_end+1):
                    if grid_lights[i][j] >= 1:
                        grid_lights[i][j] -= 1
        elif "toggle" in line:
            i_beg = int(fred[1])
            j_beg = int(fred[2])
            i_end = int(fred[4])
            j_end = int(fred[5])
            for i in range(i_beg, i_end+1):
                for j in range(j_beg, j_end+1):
                    grid_lights[i][j] += 2
for i in range(0, 1000):
    for j in range(0, 1000):
        brightness += grid_lights[i][j]
print brightness
