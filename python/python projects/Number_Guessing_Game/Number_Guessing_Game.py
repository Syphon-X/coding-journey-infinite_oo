

# Guess the Number Game!
import random
from ascii_art import logo


print(logo)
print('Welcome to the Number Guessing Game!\nI\'m thinking of a number between 1 and 100.')

def choice():
    running = True
    while running:
        value = input('Please Choose a difficulty: Type \'easy\' or \'hard\' or \'exit\': ').lower()
        if value == 'exit':
            running = False
            print('Thank you for Playing!')
            exit()
        elif value in ('easy', 'hard'):
            running = False
            print(f'You have chosen {value}.')
            return value  # Return chosen difficulty
        else:
            print('Please choose a valid difficulty!')

# Get difficulty from choice function

def mode():
    difficulty = choice()
    attempts = 0
    if difficulty == 'easy':
        attempts += 10
        return attempts
    elif difficulty == 'hard':
        attempts += 5
        return attempts


def play_game():
    random_number = random.randint(1, 100)
    attempts = mode()
    game_running = True
    while game_running:
        if attempts > 0:
            print(f'Secret Number for Testing is: {random_number}')
            print(f'You have {attempts} attempts.')
            guess = int(input('Make a guess: '))
            if guess > random_number:
                attempts -= 1
                print('Too High.')
            elif guess < random_number:
                attempts -= 1
                print('Too Low.')
            else:
                print('You guessed correctly! YOU WIN!')
                game_running = False
                continue_game()
        else:
            print(f'You have {attempts} attempts remaining, GAME OVER!')
            game_running = False
            continue_game()


def continue_game():
    running = True
    while running:
        continue_game = input('Would you like to continue playing? Type \'yes\' or \'no\': ').lower()
        if continue_game == 'yes':
            play_game()
        elif continue_game == 'no':
            print('Thank you for Playing!')
            running = False
            exit()
        else:
            print('Please enter a valid choice!')

play_game()

#TODO Need to have a random number selected
#TODO Need to define the number of attempts for easy and hard mode
#TODO Winning and Losing Logic
#TODO Compare player choice to random selected number and provide 'higher / lower' hint















