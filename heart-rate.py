name=input("what is your name ")
age=int(input("what is your age "))

maximum=220-age

slow=maximum* 0.65
fast=maximum*0.85

print (f"when you excersise you should keep your heart rate between {slow} and {fast}")