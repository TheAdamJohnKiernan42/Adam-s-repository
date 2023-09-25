#Question 1
name = input("Enter your name: ")
length = len(name)
print(length)
#Question 2
fname = input("Enter your first name in lowercase: ")
sname = input("Enter your surname in lowercase: ")
wname = fname + " " + sname
print(wname)
#Question 3
leng = len(fname)
leng1 = len(sname)

new = fname.title()
new1 = sname.title()
new2 = new + " " + new1
print(new2)
#Question 4
nurse = input("Enter the first line of a nursery rhyme: ")
starting = int(input("Enter a starting number: "))
end = int(input("Enter an ending number: "))
real = starting-1
print(nurse[real:end])
#Question 5
up = input("Enter a word: ")
down = up.upper()
print(down)
#Question 6
boy = input("Enter your first name: ")
act = len(boy)
if (act<5):
    jam = input("Enter your surname: ")
    full = boy+jam
    print(full)
elif (act>=5):
    yam = boy.lower()
    print(yam)
#Question 7
vowels = ["a","e","i","o","u"]
word = input("Enter a word: ")
if word[0] not in vowels:
    frog = word[0]
    word = word.replace(word[0],"",1)
    ham = word+frog+"ay"
    print(ham)
    