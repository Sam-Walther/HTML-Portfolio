#imports


import turtle as turt
import random

#starting code to start up the stuff (global vars)
painter = turt.Turtle() #makes the turtle
wn = turt.Screen()
wn.screensize(1000,1000)
painter.speed(0)

#functions
def petals(petalAmount,petalColor):
    painter.color(petalColor)
    for petal in range(petalAmount):
        painter.rt(360/petalAmount)
        painter.fd(30)
        painter.stamp()
#stem
painter.color("green")
painter.pensize(15)
painter.goto(0,-150)
painter.setheading(90)
painter.forward(100)
#leaf
painter.setheading(270)
painter.circle(20,120,20)
painter.setheading(90)
painter.goto(0, -60)
#rest of stem
painter.forward(60)
painter.setheading(0)
#changepen
painter.penup()
painter.shape("circle")
painter.turtlesize(2)

#draw petals
while True:
    for i in range(5):
        painter.goto(20,120+i*30)
        color=""
        for x in range(6):
            color += str(hex(random.randint(0,15)))[2:]
        petals(6+i*6,f"#{color}")



    #draw smiley of evilness

    painter.goto(-30,110)
    painter.setheading(90)
    painter.pendown()
    painter.fd(50)
    painter.teleport(38,110)
    painter.fd(50)
    painter.teleport(-50,20)
    painter.setheading(320)
    for smile in range(75):
        painter.forward(1.5)
        painter.lt(1)
    painter.turtlesize(1.5)
    painter.stamp()


wn.mainloop()