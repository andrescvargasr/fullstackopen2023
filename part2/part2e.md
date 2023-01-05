# Exercises 2.19.-2.20

## 2.19: Phonebook step11

Use the [improved error message](https://fullstackopen.com/en/part2/adding_styles_to_react_app#improved-error-message) example from part 2 as a guide to show a notification that lasts for a few seconds after a successful operation is executed (a person is added or a number is changed):

![ex-2_19 error](images/ex-2_19.png)

## 2.20*: Phonebook step12

Open your application in two browsers. **If you delete a person in browser 1** a short while before attempting to _change the person's phone number_ in browser 2, you will get the following error message:

![ex-2_20 error message 404 not found when changing multiple browsers](images/ex-2_20.png)

Fix the issue according to the example shown in [promise and errors](https://fullstackopen.com/en/part2/altering_data_in_server#promises-and-errors) in part 2. Modify the example so that the user is shown a message when the operation does not succeed. The messages shown for successful and unsuccessful events should look different:

![ex-2_20 error message shown on screen instead of in console feature add-on](images/ex-2_20b.png)

**Note** that even if you handle the exception, the error message is printed to the console.

This was the last exercise of this part of the course. It's time to push your code to GitHub and mark all of your finished exercises to the [exercise submission system](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).
