


print('hello')

i = 0
while i <= 5:
    i += 1
    if i % 2 == 0:
        break
    print("*")
    
    
print(0 % 2)

print(type(len('0')))


def fun(x):
    x += 1
    return x

x = 2
x = fun(x + 1)
print(x)



my_list = [x * x for x in range(5)]

def list_fun(lst):
    del lst[lst[2]]
    return lst

print(list_fun(my_list))

a = 1
b = 0
a = a ^ b
b = a ^ b
a = a ^ b
print(a, b)


list1 = [1, 2]
for v in range(2):
    list1.insert(-1, list1[v])
    
print(list1)


ist = [i for i in range(-1, -2)]

print(ist)