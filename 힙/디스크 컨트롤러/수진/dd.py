import copy

a = [1, 2, 3]

b = a

b.append(4)

print(id(a), id(b))

print(a, b)

b = copy.deepcopy(a)