# 서버에 원격 저장소 만들기

GitHub, GitLab 등을 우리는 보통 원격저장소라고 부릅니다. 이러한 원격저장소는 우리가 작성한 코드의 버전을 온라인에서 관리할 수 있도록 해주고, 팀과 협업을 진행할 수 있도록 도와줍니다. 이러한 원격저장소에 접근할 때는 HTTPS나 SSH를 사용해서 원격 저장소에 접속하게 됩니다.  
<br />
이 문서에서는 SSH를 통해 접근할 수 있는 원격저장소를 만드는 법을 알아보겠습니다.  
<br />

**1. SSH 접속 설정하기**

sshd_config 파일 열기

```sh
vim /etc/ssh/sshd_config
```

58번 Line쯤에 PasswordAuthentication을 yes로 수정

```
PasswordAuthentication yes
```

sshd 재시작

```sh
service sshd restart
```

<br />

**2. 원격저장소 생성**

**홈 디렉토리**에서 저장소 디렉토리 생성

```sh
mkdir name.git
```

저장소 Initialize

```sh
cd name.git
git init --bare --share
```

<br />

**3. 로컬에서 remote 저장소 추가**

```sh
git remote add origin <user>@<host>:name.git
```

<br />

**4. 원격저장소에 접근(pull, push ...)시마다 비밀번호 입력**

```sh
git push origin master
<user>@<host>'s password: <비밀번호 입력>
```
