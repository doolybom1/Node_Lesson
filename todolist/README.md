# React 2020 프로젝트

## React 프로젝트를 위한 nodejs 플러그인 설치

- npm i -g yarn

### windows

- yarn을 이용해서 패키지를 global로 설치할 때 폴더 지정값이 없어서 설치 후에 패키지를 호출할 수 없는 이슈
- yarn config get prefix는 폴더가 지정되어 있는지 확인하는 명령

### 설치폴더를 세팅후에 사용

- yarn config set prefix C:\Users\사용자ID\AppData\Roaming\npm

### Mac Linux 예시 : ~/.yarn-global 폴더를 기본 저장 위치로 설정하기

- yarn config set prefix ~/.yarn-global

- yarn global add create-react-app

## create-react-app

- webpack
- 복잡하고 다양한 여러 dependency를 통합관리하고, deploy할 때 쉽게 할 수 있도록 도와주는 framework
- CRA : create-react-app

## 새로운 react 프로젝트 생성

- create-react-app 프로젝트명

## vsCode 확장 plug in

- React Code snippets : jsx 파일을 만드는 탬플릿 제공 plug in
- Prettier code formatter :
- 설정 : formatOnSave 검색하여 설정
