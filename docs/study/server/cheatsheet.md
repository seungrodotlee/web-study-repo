# 명령어 Cheatsheet

## 파일 생성/수정

|명령어|의미|
|-|-|
|`touch newfile`|'newfile'이라는 빈 파일 생성|
|`vim filename`|이름이 'filename'인 파일이 존재하면 해당 파일을, 없으면 'filename'이라는 새 파일을 만들어서 `vim` 편집기로 연다|
|`cat > filename`|'filename'이라는 이름의 파일이 있든없든, 'filename'이라는 파일에 커맨드라인에서 내용을 바로 입력하여 덮어쓰기 및 저장 (Ctrl+D로 저장)|
|`cat >> test`|`cat > filename`과 비슷하지만 파일이 존재할 경우 덮어쓰기가 아닌 이어쓰기를 수행한다|


## 파일 내용 보기

|명령어|의미|
|-|-|
|`cat filename`|파일의 내용을 모두 보여줌|
|`head -n filename`|n줄만큼 위에서부터 보여줌|
|`tail -n filename`|n줄만큼 아래서부터 보여줌|

## 파일 이동/복사

|명령어|의미|
|-|-|
|`mv file1 file2`|`mv` 명령어는 'file1' 파일을 'file2' 파일로 이동시키겠다는 뜻. 즉, 경로를 주지 않고 파일 이름만 가지고 인자를 구성하는 경우에는 파일이름을 변경하게 되고, `mv file ../other/folder/file`와 같이 사용하면 'file'을 `../other/folder/`로 이동하는 작업을 수행하게 된다 |
|`mkdir somedir`| 'somedir'라는 이름의 디렉토리 생성|
|`cp file1 file2`| 'file1'을 'file2'에 복사|
|`cp -r dir1 dir2`| 'dir1'을 'dir2'에 복사|
|`rm file`|'file'을 삭제|
|`rm -r dir`|'dir' 디렉토리 삭제|
|`rmdir dir`|'dir' 디렉토리 삭제|
|`ln file dir/file`|'file'의 하드링크파일을 'dir/file' 파일로 생성|
|`ln -s file dir/file`|'file'의 심볼릭링크파일을 'dir/file' 파일로 생성|

## 파일/디렉토리 관련

|명령어|의미|
|-|-|
|`ls`|현재 디렉토리에 파일/디렉토리리스트 보기|
|`ls -al`|현재 디렉토리에 파일/디렉토리리스트를 디테일한 리스트로 보여줌|
|`cd`|디렉토리 변경|
|`pwd`|현재 작업중인 디렉토리 위치 확인|
|`du -sh`|현재 디렉토리 크기 확인|

## 파일권한관련

|명령어|의미|
|-|-|
|`chmod 764 filename`|이름이 filename인 파일에 소유주는 `7` 권한, 소유그룹은 `6` 권한, 기타사용자는 `4` 권한을 부여한다|
|`chmod u+rw filename`|이름이 filename인 파일에 소유주에게 `rw` 권한을 추가한다|
|`chmod go+x filename`|이름이 filename인 파일에 소유그룹과 기타사용자에 `x` 권한을 추가한다|
|`chmod g-rx filename`|이름이 filename인 파일에 소유그룹에 `rx` 권한을 삭제한다|
|`chown test filename`|이름이 filename인 파일의 소유주를 test로 변경|
|`chown test.testers filename`|이름이 filename인 파일의 소유주는 test, 소유그룹은 testers로 변경|
|`chgrp testers filename`|이름이 filename인 파일의 소유그룹을 testers로 변경|

## 시스템/사용자 관련

|명령어|의미|
|-|-|
|`man command`|command라는 명령어에 대한 매뉴얼 출력|
|`free -h`|메모리 용량 확인|
|`df -h`|디스크 사용량 확인|
|`w`|현재 온라인에 접속중인 계정 정보 확인|
|`whoami`|현재 터미널에 로그인 된 계정 정보 확인|
|`id`|현재 터미널에 로그인 된 계정의 사용자 및 계정 정보 출력|
|`useradd test`|test라는 이름의 사용자 생성|
|`usermod -aG testers test`|test 계정을 testers 그룹에 추가|
|`userdel test`|test라는 이름의 사용자 삭제|
|`groupadd testers`|testers라는 이름의 사용자그룹 생성|

## 프로세스 관리

|명령어|의미|
|-|-|
|`ps`|현재 터미널에서 실행되고 있는 모든 프로세스 목록 출력|
|`ps -ef`|시스템에서 실행되고 있는 모든 프로세스 목록 출력|
|`ps | grep name`|프로세스명이 name인 프로세스 정보 출력|
|`kill 1111`| pid가 1111인 프로세스 종료|
|`killall name`|이름이 name인 프로세스 종료|
|`name &`|이름이 name인 프로그램 백그라운드 실행|
|`jobs`|백그라운드에서 실행되고 있거나 일시중지된 프로세스 목록 출력|
|`bg %1`|작업ID가 1인 작업을 백그라운드에서 실행|
|`fg %1`|작업ID가 1인 작업을 포어그라운드에서 실행|

## 네트워크 관리

|명령어|의미|
|-|-|
|`ifconfig -a`|모든 네트워크 인터페이스 정보를 출력|
|`ifconfig eth0`|eth0 장치에 대한 네트워크 정보를 출력|
|`ping naver.com`|naver.com 에 대해 ping 테스트를 수행|
|`dig naver.com`|naver.com에 대해 DNS 질의응답을 테스트|
|`host naver.com`|naver.com의 DNS 및 IP 정보를 출력|
|`netstat -an | grep 8080`|8080포트가 사용중인지 확인|
|`netstat -tnlp`|현재 TCP LISTENING중인 포트들과 프로그램들을 출력|

## 검색

|명령어|의미|
|-|-|
|`grep "string" filename`|이름이 filename인 파일에서 string이라는 문자열이 포함된 라인 출력|
|`grep "a.*b" filename`|이름이 filename인 파일에서 정규식을 이용하여 a로 시작해서 b로 끝나는 문자열이 포한된 라인 출력|
|`grep -f "a.*b" filename`|이름이 filename인 파일에서 'a.*b'라는 문자열이 포함된 라인 출력|
|`find /home/test -name *.test -type f`|/home/test 디렉토리에서 이름이 .test로 끝나는 파일 검색|
|`find /home/test -mtime +10 -type d -delete`|/home/test 디렉토리에서 수정된지 10일이 지난 디렉토리들 삭제|
|`find /home/test -size +100M`|/home/test 디렉토리에서 크기가 100MB 이상인 파일/디렉토리 검색|

## 압축

|명령어|의미|
|-|-|
|`tar cf file.tar file1 file2`|file1, file2를 file.tar라는 이름으로 압축|
|`tar xf file.tar`|file.tar 압축해제|
|`tar czf file.tar.gz file1 file2`|file1, file2를 file.tar.gz라는 이름으로 압축|
|`tar xzf file.tar.gz|file.tar.gz 압축해제|
