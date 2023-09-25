#Question 1
sport = ["football","basketball"]
newsport = input("What's your favourite sport?: ")
sport.append(newsport)
sport.sort()
print(sport)
#Question 2
subject = ["computer science","biology","dcg","maths","english","history"]
diss = input("Which subject do you dislike the most?: ")
subject.remove(diss)
print(subject)
#Question 3
colour = ["red","mauve","magenta","teal","maroon","yellow","lime","cactus","mustard","beige"]
start = int(input("Enter a start number between 0 and 4: "))
end = int(input("Enter an end number between 5 and 9: "))
print(colour[start:end])
#Question 4
four = [123,456,789]
print(four[0],"\n",four[1],"\n",four[2])
dig = int(input("Enter a 3-digit number: "))
if(dig in four):
    print(four.index(dig,0,2))
else:
    print("That is not in the list")
#Question 5 & 6
party1, party2, party3 = input("Enter the names of 3 people you want in a party: ").split()
plist = [party1,party2,party3]
pnew = input("Would you like to add another name to the list?: ")
if(pnew=="no"):
    length=len(plist)
    print(length)
        
    print(plist)
    scnd = input("Enter one of the names on this list: ")
    print(plist.index(scnd,0,length))
    remove = input("Do you still want this person to go?: ")
    if(remove=="no"):
        plist.remove(scnd)
        print(plist)
while(pnew=="yes"):
    some=input("Who would you like to invite?: ")
    plist.append(some)
    pnew = input("Would you like to add another name to the list?: ")
    if(pnew=="no"):
        length=len(plist)
        print(length)
        
        print(plist)
        scnd = input("Enter one of the names on this list: ")
        print(plist.index(scnd,0,length))
        remove = input("Do you still want this person to go?: ")
        if(remove=="no"):
            plist.remove(scnd)
            print(plist)
        break
    else:
        continue
#Question 7
tv = ["The Walking Dead","Game of Thrones","Spongebob Squarepants","The Muppets"]
print(tv[0],"\n",tv[1],"\n",tv[2],tv[3])
newtv = input("Enter another show: ")
pos = int(input("Enter the position of this show: "))
tv.insert(pos, newtv)
print(tv)
#Question 8
nums = []
k=0
while(k<3):
    newnum = int(input("Enter numbers: "))
    nums.append(newnum)
    k=k+1
last = input("Do you still want the last number?: ")
if(last=="no"):
    nums.pop((2))
print(nums)