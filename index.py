

# Python Practice #
print('Hello World!')


# def calcu(value):
#     suma = 0
#     for x in range(value):
#         suma += x
#     return suma
# calcu = calcu(10)
# print(type(calcu))
# print(f'You\'re value is: {calcu}')


    
    
    
# def fun(inn=2, out=3):
#     return inn * out

# print(fun(3))

# print(1 + 1)




# dictionary = {}
# my_list = ['a', 'b', 'c', 'd']

# for i in range(len(my_list) - 1):
#     dictionary[my_list[1]] = (my_list[i], )
    
# for i in sorted(dictionary.keys()):
#     k = dictionary[i]
#     print(k)
    

# 2
tup = (1, 2, 4, 8)
tup = tup[1:-1]
tup = tup[0]
print(tup)


# 3
def fun(x):
    x += 1
    return x

x = 2
x = fun(x + 1)
print(x)


print('---------------')

# 4  

def fun1(x):
    if x % 2 == 0:
        return 1
    else:
        return  # if return with no value, it will be none


print(type(fun1(1)))
print(fun1(fun1(2)) + 1)
