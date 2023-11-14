
# Python Practice #

print('Hello World!')

password checker #

name = input('What is your name? ')
password = input('Please enter your password: ')
secret_password = '#' * len(password)
characters = len(password)

def password_check():
    answer = print(f'Your name is {name}, your password: {secret_password} is {characters} characters long.')
    return answer

print(password_check())

# list unpacking

a, b, c, *other, d = [1, 2, 3, 4, 5, 6, 7, 8]

print(a)
print(b)
print(c)
print(other)
print(d)

# list comprehension

value = [[x + 1 for x in range(3)] for y in range(3)]
# this will result in a nested list
[[1, 2, 3], [1, 2, 3], [1, 2, 3]]
