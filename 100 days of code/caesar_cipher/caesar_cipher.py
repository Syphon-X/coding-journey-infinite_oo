
#Caesar Cipher Script


alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']



while True:
    direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n").lower()
    if direction not in ('encode', 'decode'):
        print('Invalid response, please enter encode or decode:\n')
    else:
        text = input("Type your message:\n").lower()
        shift = int(input("Type the shift number:\n"))
        break
    

# def encrypt(plain_text, shift_amount):
#     cipher_text = ""
#     for letter in plain_text:
#         position = alphabet.index(letter)
#         new_position = position + shift_amount
#         new_letter = alphabet[new_position]
#         cipher_text += new_letter
#     print(f'Your encoded word is {cipher_text}')

# def decrypt(plain_text, shift_amount):
#     decoded_text = ""
#     for letter in plain_text:
#         position = alphabet.index(letter)
#         new_position = position - shift_amount
#         new_letter = alphabet[new_position]
#         decoded_text += new_letter
#     print(f'Your decoded word is {decoded_text}')



# if direction == 'encode':
#     encrypt(plain_text=text, shift_amount=shift)
# elif direction == 'decode':
#     decrypt(plain_text=text, shift_amount=shift)


def caesar(start_text, shift_amount, cipher_direction):
    cipher_text = ""
    if cipher_direction == 'decode':
        shift_amount *= -1
    for letter in start_text:
        position = alphabet.index(letter)
        new_position = position + shift_amount
        cipher_text += alphabet[new_position]
    print(f'Your {cipher_direction}d is: {cipher_text}')


caesar(start_text=text, shift_amount=shift, cipher_direction=direction)




