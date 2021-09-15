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
|`mkdir somedir`| 'somedir'라는 이름의 폴더 생성|
|`cp file1 file2`| 'file1'을 'file2'에 복사|
|`cp -r dir1 dir2`| 'dir1'을 'dir2'에 복사|
|`rm file`|'file'을 삭제|
|`rm -r dir`|'dir' 폴더 삭제|
|`rmdir dir`|'dir' 폴더 삭제|
|`ln file dir/file`|'file'의 하드링크파일을 'dir/file' 파일로 생성|
|`ln -s file dir/file`|'file'의 심볼릭링크파일을 'dir/file' 파일로 생성|

## 파일/폴더 관련

|명령어|의미|
|-|-|
|`ls`|현재 디렉토리에 파일/폴더리스트 보기|
|`cd`|디렉토리 변경|