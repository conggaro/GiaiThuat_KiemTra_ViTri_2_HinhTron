x1 = float(input())
y1 = float(input())
r1 = float(input())

x2 = float(input())
y2 = float(input())
r2 = float(input())

distance = ((x1-x2)**2 + (y1-y2)**2)**0.5

if (distance == r1 + r2) or (distance == abs(r2 - r1)):
    print("TIEPXUC")
elif distance > r1 + r2:   
    print("NGOAINHAU")
elif distance + min(r1, r2) < max(r1, r2):
    print("TRONGNHAU")
else: 
    print("GIAONHAU")