
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
