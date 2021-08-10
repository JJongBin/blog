---
title:  "Jekyll 블로그 시작 🚀"
excerpt: "내가 블로그를 시작한 이유와 다짐!"

categories:
  - Blog
tags:
  - [Blog, jekyll]

toc: true
toc_sticky: true
 
date: 2021-08-04
last_modified_at: 2021-08-04
---
<br>

블로그를 시작해볼까 고민한지만 벌써 몇 개월째...드디어 블로그를 시작하게 되었다.  
꾸준히 포스팅하려는 의지를 불태우고자 이것저것 첫번째 글을 써보려고 한다.  

<br>

# 1. Jekyll blog 개발 환경 셋팅
---

구글링을 통해서 jekyll 블로그를 알게 되었고, 프론트엔드 개발자를 지향하고 있는 나에게 네이버나 다음 블로그보다 도움이 될거라고 생각했다. 
템플릿을 정해야한다고 하길래 이것 저것 찾아보다가 몇 몇분들이 추천해주시는 minimal-mistakes에 꽂혀 이 템플릿을 사용하게 되었다.  

**minimal-mistakes github 주소!**   
<https://github.com/mmistakes/minimal-mistakes>
{: .notice--info}

<br>

이제 내 로컬 환경에서 Github에 올릴 수 있도록 셋팅을 해줘야 했는데 환경변수 때문에 너무 애를 먹었다. ruby나 gem 자체를 처음 이용해 보기도 해서 더욱 생소했던 것 같다. 하다하다 안되서 전부 삭제하고 다시 깔았다.  

```
brew install ruby
gem install --user-install bundler jekyll
```

위 명령어를 터미널에 입력해서 이 순서대로 진행했는데 환경변수를 잘못 적어서 시간이 오래걸렸다. 
homebrew를 이용해서 ruby를 설치하고 패키지시스템과 같은 gem을 이용해서 bundler, jekyll을 설치하고, .zshrc 파일에 환경변수를 추가했다  

```
## 환경변수
export PATH="$HOME/.gem/ruby/3.0.0/bin:$PATH"
export PATH="/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/3.0.0/bin:$PATH" 
```  

**이 사이트를 참고했다. 아니 거의 따라했다.**  
<https://jekyllrb.com/docs/installation/macos/>
{: .notice--info}

<br>

```
bundle -v
jekyll -v
```

이렇게 입력했을때 bundle과 jekyll의 버전이 제대로 출력되면 다왔다!  
`Bundler version 2.2.25`  
`jekyll 4.2.0`


```
bundle
jekyll serve --port [port]
```

서버를 시작하려고 위 명령어를 입력했더니

```
cannot load such file -- webrick (LoadError)
```
.....??  

이런 오류가 나와서 당황했는데 얼른 구글링 하니 어떤분께서 이 문제에 대해서 설명을 잘해주셨다.

`bundle add webrick` 이라는 명령어로 webrick을 추가해 주고 다시 실행하면 된다고 한다.


**안됬던 이유는 ruby 3.0.0부터 webrick이 기본으로 포함된 gem에서 빠졌기 때문이라고 한다.**  
{: .notice--info}

위 과정까지 다하고나니 `http://localhost:[port]/`로 내가 만들 블로그에 로컬환경에서 접속할 수 있었다.  

<br>

# 2. 블로그를 시작한 이유
---
자바스크립트에 대한 이해가 부족하다고 생각했기 때문에 유투버분의 추천을 보고 <u>모던 자바스크립트 Deep Dive</u> 라는 책을 구매해서 읽기 시작했다. 책이 900페이지나 되길래 먼저 속독으로 한번 읽어보고 다시 읽어야겠다고 생각했다. 하지만 속독으로 읽더라도 어느정도 감이 와야하는데 대충 보고 넘기다보니 까먹고 다시 찾아보고 하는 과정이 반복이 됬다. 너무 쉽게 생각한 내 잘못이었다. 어떻게 하면 꾸준하게 꼼꼼히 내 지식으로 만들 수 있을까 고민을 하다가 "블로그에 내가 이해한 내용을 정리하면 좋지않을까?" 라는 생각을 하게 되었고, 한 포스팅 당 한 한 단락으로 구성해보자! 라고 다짐했다. 나중에 내가 까먹은 지식을 내가 이해했던 방법으로 좀 더 빠르게 다시 생각해 낼 수 있고, 아무래도 포스팅을 하려면 좀 더 깊게 알고 이해할 수 있을 것 같다.  

<u>모던 자바스크립트 Deep Dive</u>는 총 49장 ( 변수 표현식 ... 에러처리 모듈 등 )으로 구성이 되어있다. 굉장히 오래 걸릴 것 같지만 그 때의 뿌듯함이 벌써부터 기대가 된다. 이 외에 내가 습득했던 지식을 사용하지 않다보니 잊어버리는 경우가 꽤 많아서 다른 것들도 정리하려고 한다. 화이팅 나!

<br>
<br>

이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  
혹시나 보시고 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!
{: .notice--info}



