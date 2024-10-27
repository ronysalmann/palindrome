def palindrome():
    row = input("For rows: ")
    for i in range(0,row+1):
        print(" "*(row-i),"*"*((2*i)-1))
    for j in range(row-1,0,-1):
        print(" "*(row-j),"*"*((2*j)-1))