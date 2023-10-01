file = open("mean-median-mode-frequency.csv","r")
mean = 0
dic = {}
x = 0
average = 0
median = []
modes = []
max_count = 0
for line in file:
    #dic[line] = dic.get(line, 0) + 1
    spit = line.split(",")
    space = line.isspace()
    for num in spit:
        check = num
        #print(num)
        median.append(num)
        if num == "\n":
            average = 0
            mean = 0
            x = 0
            median.clear()
        else:
            num = int(num)
            mean = mean + num
            x = x+1
            if "\n" in check:
                average = mean/x
                print("The average is ",average)
    for num in spit:
        if "\n" in num:
            continue
        else:
            if num in dic:
                dic[num] += 1
            else:
                dic[num] = 1
    max_count = 0
    for num, count in dic.items():
        if count > max_count:
            max_count = count
            modes = [num]
        elif count == max_count:
            modes.append(num)
    if len(modes)==0:
        continue
    else:
        print("The mode is ",modes)
    dic.clear()
    modes.clear()
    med_len = len(median) // 2
    if line == "\n":
        continue
    else:
        if len(median) % 2 == 1:
            print("The median is ",median[med_len])
        else:
            even1 = int(median[med_len - 1])
            even2 = int(median[med_len])
            real = round((even1 + even2) // 2.0)
            print("The median is ",real)
average = mean/x
print("The average is ",average)
#print(dic)
print("end")