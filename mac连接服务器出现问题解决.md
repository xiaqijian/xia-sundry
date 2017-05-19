在利用Mac终端，连接Linux服务器出现以下内容，报错

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:6WcBM66D86QOpPOCF6CnfJ7el5pOZ3g6DudYtjRG7tA.
Please contact your system administrator.
.....code
```
> 解决方案

```
vi ~/.ssh/known_hosts
```
找到你的服务器ip删除ip相关rsa内容

例如
```
136.3.243.233 

ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAs7tE1nlC8YUMHkJUmSpFeJCc0ztFQiWGIKlyrnf4KVCz+Ece/yY59QXnVG7b0DWA/wyzlaGRdumWFexX4Y7VE3WunEeXVPMRjF0YZgG5qW6EDXNMEquZzI5k7Jg96VGq+5ZzhtsRhUqXH1aNrMYydRfMUFDXTh+a3jKcoQLx9IiifouUuh5JEelql9w9FRgmOgOqmm3CVbn33mblyHZa0UOa3GDpFGRxFjxyPVLuOD90rJIVc126CxIK3TmsFS0emO7qxpz4mrNG/1xpCqgKxNejBkrlUtxzLxGbwuod3HPX7OB28uk1RdGsXhcZtKsPph3a04i7Y5C5QZ1XDXFzDQ==
10.1.2.17 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAsI5fLkoQayuhjMLXaE69VlxA7en/SmxXs+VDjgXLGLLTLdSOxki1cBDzuPm4FefmES4A3X3mfAB8L46rFnPJe45hca4U6uC/IbJMlO8GhrWs+fpIYVdMmOkabBQl8li0J0bclmKlsRfpnsuSfT/hm5nBUUlmQcoXzGqvoLHRgV7JESdgvMoxlHzCSGRj62aBtJXktv5dbh5vCxjeh4jFrn4FrNo7IkG3fA6NoGBqUs6tENAclxI8F1b+479ywAqQedy233n2gW+l5v6Ms1uD+1jxxCiHx8OtO1/V7/vWLfEQfEMU323y4zHu4uXFLv9WB1XGNMgqEBlELSBkNpC4Pw==
```

提一下：阿里云服务器默认端口是关闭的，第一次使用需要打开一下
