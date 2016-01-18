import itertools

routes = {}
cities = set([])

with open("9-all-in-a-single-night.txt") as visits:
    for line in visits:
        segment = line.rstrip().split(" ")
        start_city = segment[0]
        end_city = segment[2]
        segment_length = int(segment[4])
        routes[(start_city, end_city)] = segment_length
        routes[(end_city, start_city)] = segment_length
        cities.add(start_city)
        cities.add(end_city)

cities = list(cities)

long_route_length = 0
for possible_route in itertools.permutations(cities):
    current_route_length = 0
    for index in range(len(possible_route)-1):
        if (possible_route[index], possible_route[index+1]) in routes:
            current_route_length += routes[(possible_route[index], possible_route[index+1])]
    if current_route_length > long_route_length:
        long_route_length = current_route_length

print long_route_length
