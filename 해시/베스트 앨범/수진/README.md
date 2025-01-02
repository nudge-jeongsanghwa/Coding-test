## Tip 이라기보다는 Python 문법 정리

### `dict.items()`

```py
car = {"name" : "BMW", "price" : "7000"}
print(car.items())

# dict_items([('name', 'BMW'), ('price', '7000')])
```

```py
car = {"name" : "BMW", "price" : "7000"}
for key, val in car.items():
    print("key : ", key, " value : ", value)

# key : name value : BMW
# key : price value : 7000
```

<br />

### `sort`

```py
a = [5, 2, 3, 1, 4]
a.sort()

a #[1, 2, 3, 4, 5]
```

<br />

### `sorted()`

```py
sorted([5, 2, 3, 1, 4]) #[1, 2, 3, 4, 5]
```

<br />

### `key` 매개변수

```py
student_tuples = [
    ('john', 'A', 15),
    ('sujin', 'B', 10),
    ('dave', 'B', 12),
]

print(sorted(student_tuples, key=lambda student: student[2]))
# [('sujin', 'B', 10), ('dave', 'B', 12), ('john', 'A', 15)]
```
