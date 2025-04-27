import math

width=float(input("what is the width of the tire "))
ar=float(input("what is the aspect ratio "))
diameter=float(input("what is the diameter "))
v=(math.pi*(width**2)*ar*(width*ar+2540*diameter)) / 10000000000

print(f"the volume is about {v}")