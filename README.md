# PETS APP CLIENT

This is a client for our Pets app. It will allow users to see and create new pets, as well as edit/update them and add toys to their pets.

## USER STORIES

As a user I want to be able to:
* create an account
* sign in
* sign out
* change password
* see all pets
* see individual pets
* create a new pet
* update/edit my pets
* liberate the pets
* create a toy
* give toys to any pets
* update/edit my toys
* delete toys

## Views

### User Views
|    Route    |   Description   |
| ----------- | --------------- |
| /sign-up    | users create new account |
| /sign-in    | users sign into their account|
| /sign-out   | users sign out of account |
| /change-password| users can change password|

### Pet Views
|    Route    |   Description   |
| ----------- | --------------- |
| /           | pets index      |
| /pets/:id   | pet show page   |
| /addPet     | new pet page    |

Pet show page will have a modal for updating.
Pet show page will also have a delete button.
Pet show page will also allow updating and deleting toys.

### Toy Views
|    Route    |   Description   |
| ----------- | --------------- |
| /addToy     | new toy page    |
| /pets/:id   | pet show page   |
| /addPet     | new pet page    |
