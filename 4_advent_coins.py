import hashlib
import binascii
answer = 0
while True:
    m = hashlib.md5()
    encoded = "bgvyzdsv" + str(answer)
    m.update(encoded)
    hexified = binascii.b2a_hex(m.digest())
    if answer%10000==0:
        print "another tenthousand"
    answer += 1
    if hexified[0:6] == "000000":
        print hexified
        print encoded
        break
