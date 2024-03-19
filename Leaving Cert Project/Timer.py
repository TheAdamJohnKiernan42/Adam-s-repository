import serial
import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate("C:\\Users\\18AKiernan.ACC\\OneDrive - Longford and Westmeath Education and Training Board\\Computer Science\\a-name-35a70-firebase-adminsdk-vymse-b1c493ff38.json")
firebase_admin.initialize_app(cred,{'databaseURL': 'https://a-name-35a70-default-rtdb.europe-west1.firebasedatabase.app/'})

ser = serial.Serial()
ser.baudrate = 115200
ser.port = "COM4"
ser.open()

ref = db.reference()
ref.update({"timer":""})
ref = db.reference().child("timer")
#source = input("Please input the source of this data: ")
stringOut = ""
hour = ""
minute = ""
age = int(input("What is your age? "))
user = input("What is your name? ")
wellbeing = int(input("On a scale of 1 to 10, what would you say is the state of your current wellbeing? "))
while(wellbeing > 10 or wellbeing < 1):
    print("Invalid input")
    wellbeing = int(input("On a scale of 1 to 10, what would you say is the state of your current wellbeing? "))

def hours(time):
    a = time[0]
    return a
def minutes(time):
    b = time[1]
    if len(time)>2:
        c = time[2]
        #print(b)
        #print(c)
        d = str(b) + str(c)
        return d
    else:
        return b
while True:
    data = ser.read().decode("utf-8")
    data = data.replace(" ","")
    data = data.replace("\r","")
    data = data.replace("\n","")
    if data == '#':
        print(data)
        print(stringOut)
        print(hours(stringOut))
        print(minutes(stringOut))
        hour = hours(stringOut)
        minute = minutes(stringOut)
        stringOut = ''
        ref.update({str(int(time.time())):{"Hours":hour, "Minutes":minute, "Age":age, "Wellbeing":wellbeing, "User":user}})
    elif data != "":
        stringOut += data
