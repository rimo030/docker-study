# docker-study
인프런에서 [따라하며 배우는 도커와 CI환경](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%8F%84%EC%BB%A4-ci) 강의를 수강하고 있습니다.

관련 실습 내용을 정리합니다.

## 1. 이론
도커의 이론적인 내용을 블로그에 정리하고 있습니다.

 - [[Docker] 도커 시작하기](https://munak.tistory.com/155) : docker란 무엇이고 어떻게 등장한 기술인가?
 - [[Docker] 도커 명령어 정리](https://munak.tistory.com/156)  : docker 명령어 익히기
 - [[Docker] Dockerfile로 이미지 생성하기](https://munak.tistory.com/157) : Dockerfile이란? 이미지를 생성하는 방법
 - [Docker] 도커 컴포즈(docker-compose)
 - [Docker] 도커 볼륨

## 2. 로컬 실습
실습 내용을 폴더별로 github에 정리하고 있습니다.

- [[#1]](https://github.com/rimo030/docker-study/pull/1) nodejs-docker-app 

docker를 이용해 hello world를 띄우는 간단한 express 서버를 만듭니다.

- [[#3]](https://github.com/rimo030/docker-study/pull/3) docker-compose-app

express와 redis를 이용한 간단한 카운터 애플리케이션을 만듭니다.

- [[#4]](https://github.com/rimo030/docker-study/pull/4) docker-react-app

docker를 이용해 react앱을 실행합니다. 개발/배포 docker 파일을 분리하고 nginx를 이용해 서버를 작동합니다.

## 3. CI 실습
AWS 프리티어 인스턴스를 이용해 배포 실습을 진행하고 있습니다.

### Travis CI + Elastic beanstalk ⭐
