var store = [{
        "title": "Jekyll 블로그 시작 🚀",
        "excerpt":"    블로그를 시작해볼까 고민한지만 벌써 몇 개월째…드디어 블로그를 시작하게 되었다.  꾸준히 포스팅하려는 의지를 불태우고자 이것저것 첫번째 글을 써보려고 한다.       1. Jekyll blog 개발 환경 셋팅    구글링을 통해서 jekyll 블로그를 알게 되었고, 프론트엔드 개발자를 지향하고 있는 나에게 네이버나 다음 블로그보다 도움이 될거라고 생각했다.  템플릿을 정해야한다고 하길래 이것 저것 찾아보다가 몇 몇분들이 추천해주시는 minimal-mistakes에 꽂혀 이 템플릿을 사용하게 되었다.   minimal-mistakes github 주소!  https://github.com/mmistakes/minimal-mistakes       이제 내 로컬 환경에서 Github에 올릴 수 있도록 셋팅을 해줘야 했는데 환경변수 때문에 너무 애를 먹었다. ruby나 gem 자체를 처음 이용해 보기도 해서 더욱 생소했던 것 같다. 하다하다 안되서 전부 삭제하고 다시 깔았다.   brew install ruby gem install --user-install bundler jekyll   위 명령어를 터미널에 입력해서 이 순서대로 진행했는데 환경변수를 잘못 적어서 시간이 오래걸렸다.  homebrew를 이용해서 ruby를 설치하고 패키지시스템과 같은 gem을 이용해서 bundler, jekyll을 설치하고, .zshrc 파일에 환경변수를 추가했다   ## 환경변수 export PATH=\"$HOME/.gem/ruby/3.0.0/bin:$PATH\" export PATH=\"/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/3.0.0/bin:$PATH\"    이 사이트를 참고했다. 아니 거의 따라했다.  https://jekyllrb.com/docs/installation/macos/       bundle -v jekyll -v   이렇게 입력했을때 bundle과 jekyll의 버전이 제대로 출력되면 다왔다!  Bundler version 2.2.25  jekyll 4.2.0   bundle jekyll serve --port [port]   서버를 시작하려고 위 명령어를 입력했더니   cannot load such file -- webrick (LoadError)  …..??   이런 오류가 나와서 당황했는데 얼른 구글링 하니 어떤분께서 이 문제에 대해서 설명을 잘해주셨다.   bundle add webrick 이라는 명령어로 webrick을 추가해 주고 다시 실행하면 된다고 한다.   안됬던 이유는 ruby 3.0.0부터 webrick이 기본으로 포함된 gem에서 빠졌기 때문이라고 한다.   위 과정까지 다하고나니 http://localhost:[port]/로 내가 만들 블로그에 로컬환경에서 접속할 수 있었다.       2. 블로그를 시작한 이유   자바스크립트에 대한 이해가 부족하다고 생각했기 때문에 유투버분의 추천을 보고 모던 자바스크립트 Deep Dive 라는 책을 구매해서 읽기 시작했다. 책이 900페이지나 되길래 먼저 속독으로 한번 읽어보고 다시 읽어야겠다고 생각했다. 하지만 속독으로 읽더라도 어느정도 감이 와야하는데 대충 보고 넘기다보니 까먹고 다시 찾아보고 하는 과정이 반복이 됬다. 너무 쉽게 생각한 내 잘못이었다. 어떻게 하면 꾸준하게 꼼꼼히 내 지식으로 만들 수 있을까 고민을 하다가 “블로그에 내가 이해한 내용을 정리하면 좋지않을까?” 라는 생각을 하게 되었고, 한 포스팅 당 한 한 단락으로 구성해보자! 라고 다짐했다. 나중에 내가 까먹은 지식을 내가 이해했던 방법으로 좀 더 빠르게 다시 생각해 낼 수 있고, 아무래도 포스팅을 하려면 좀 더 깊게 알고 이해할 수 있을 것 같다.   모던 자바스크립트 Deep Dive는 총 49장 ( 변수 표현식 … 에러처리 모듈 등 )으로 구성이 되어있다. 굉장히 오래 걸릴 것 같지만 그 때의 뿌듯함이 벌써부터 기대가 된다. 이 외에 내가 습득했던 지식을 사용하지 않다보니 잊어버리는 경우가 꽤 많아서 다른 것들도 정리하려고 한다. 화이팅 나!         혹시나 보시고 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Blog"],
        "tags": ["Blog","jekyll"],
        "url": "/blog/startBlog/",
        "teaser": null
      },{
        "title": "[Deep Dive] 01장 프로그래밍",
        "excerpt":"    1. 프로그래밍이란?    프로그래밍이란 컴퓨터에게 실행을 요구하는 일종의 커뮤니케이션    프로그래밍 → 기계가 실행할 수 있도록 정확하고 상세하게 요구사항을 설명하는 작업   프로그래밍은 기계에게 설명하는 과정이므로 컴퓨터적 사고를 가지고 바라보아야한다.       2. 프로그래밍 언어   컴퓨터에게 전달한 명령은 사람이 이해하는 언어가 아닌 컴퓨터가 이해할 수 있는 기계어로 전달해줘야한다.   기계어는 사람이 이해하기 어렵기 때문에 사람이 이해하기 쉬운 프로그래밍 언어로 작성된 명령을 컴파일러를 통해 기계어로 바꿔준다.   사람의 프로그래밍 언어  →  컴파일러(변환)  →  컴퓨터의 기계어       3. 구문과 의미   사람이 이해하도록 만들어진 프로그래밍 언어는 c, c++, 파이썬, 자바, 자바스크립트 등이 있다.  이러한 프로그래밍 언어들은 흐름제어(변수, 값, 연산자, 표현식, 문, 조건문, 반복문), 함수, 객체, 배열등의 문법을 제공한다.      프로그래밍은 요구사항의 집합을 분석해서 적절한 자료구조와 함수의 집합으로 변환한 후, 그 흐름을 제어하는 것이다.          혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive01/",
        "teaser": null
      },{
        "title": "[Deep Dive] 02장 자바스크립트란?",
        "excerpt":"    1. 자바스크립트의 탄생   1995년 넷스케이프 커뮤니케이션즈는 웹페이지의 보조적인 기능을 수행하기 위해 브라우저에서 동작하는 프로그래밍언어를 도입   → 브렌던 아이크가 개발한 자바스크립트         2. 자바스크립트의 표준화   자바스크립트의 파생버전이 출시 (Jscript) → 이로인해 브라우저들 사이에서 *크로스 브라우징 이슈 발생 → 표준화된 자바스크립트의 필요성이 생김   * 크로스 브라우징  브라우저에 따라 호환성이 다르기 때문에 웹페이지의 기능들이 정상적으로 동작하지 않음!     1997년 7월 표준화된 자바스크립트 사양인 ECMAScript 1(ES1)이 완성     이후 ES2, ES3 ... 2020년 ES11로 크고 작은 기능들이 추가되어 발표됨   범용 프로그래밍 언어로써 필요한 여러 기능들이 도입된 2015년 ECMAScript(ES6)                   버전       년도       특징                       ES6       2015       let/const, 클래스, 화살표 함수, 템플릿 리터럴, 디스트럭처링 할당, 스프레드 문법, rest 파라미터, 심벌, 프로미스, Map/Set, 이터러블, for…of, 제너레이터, Proxy, 모듈 import.export                 3. 자바스크립트 성장과 역사       Ajax            1999년 자바스크립트를 이용해 서버와 브라우저가 비동기 방식으로 데이터를 주고 받을 수 있는 통신 기능       기존의 웹페이지는 화면이 전환되면 전체 HTML을 받아 다시 랜더링       Ajax등장 이후 변경할 필요가 없는 부분은 두고 필요한 데이터만 받아 해당 부분 랜더링 → 리소스 절약, 빠른 성능과 부드러운 화면전환이 가능               jQuery            DOM을 더욱 쉽게 제어할 수 있음       크로스 브라우징 이슈도 어느 정도 해결               V8 자바스크립트 엔진            V8은 웹 브라우저 내부에서 자바스크립트 수행 속도의 개선을 목표로 처음 고안되었습니다. 속도 향상을 위해 V8은 인터프리터를 사용하는 대신 자바스크립트 코드를 더 효율적인 머신 코드로 번역합니다. 저스트인타임 컴파일러를 구현함으로써 코드를 실행 시에 자바스크립트 코드를 머신 코드로 컴파일하는데, 이는 스파이더몽키나 리노와 같은 현대적인 다른 자바스크립트 엔진에서도 마찬가지입니다. 주된 차이는 V8은 바이트코드와 같은 중간 코드를 생산하지 않는다는 점입니다.                Node.js            브라우저 이외에도 자바스크립트를 작동시킬 수 있도록함       비동기I/O 지원, 단일스레드 이벤트 루프 기반(요청 처리 성능이 좋음)       백엔드까지도 다룰 수 있음               SPA 프레임워크            Single Page Application(SAP)       Angular, React, Vue.js, Svelte …                    SPA 구현을 쉽게 말하면 jsp파일 없이 index.html파일 하나에서 js, css등 리소스 파일들과 모듈들을 로드해서 페이지 이동 없이 특정영역만 새로 모듈을 호출하고 데이터를 바인딩하는 개념.                                  4. 자바스크립트와 ECMAScript    자바스크립트는 ECMAScript와 브라우저가 별도 지원하는 클라이언트 사이드 Web API(DOM, BOM, Canvas, XNLHttpRequest, fetch 등)을 아우르는 개념 (자바스크립트 &gt; ECMAScript)         5. 자바스크립트의 특징       웹 브라우저에서 동작하는 유일한 프로그래밍 언어   별도의 컴파일을 하지 않는 *인터프리터 언어   *인터프리터 언어  코드가 실행되는 단계인 런타임에 문 단위로 한줄씩 중간 코드인 바이트 코드로 변환한 후 실행      멀티 패러다임 프로그래밍 언어(명령형, 함수형, 프로토타입 기반, 객체지향 프로그래밍)   자바스크립트는 프로토타입 기반의 객체지행 언어         6. ES6 브라우저 지원 현황      해당 링크에서 자세히 볼 수 있다.  https://kangax.github.io/compat-table/es6/   몇몇 브라우저에서 자바스크립트의 최신기능을 지원하지 않을 수도 있기 때문에 *바벨(Babel)을 이용할 필요가 있다   *바벨(Babel)  ES6+ 버전의 자바스크립트나 타입스크립트, JSX 등 다른 언어로 분류되는 언어들에 대해서도 모든 브라우저에서 동작할 수 있도록 호환성을 지켜준다. 바벨은 이렇게 추상화 수준을 유지한 채로 코드를 변화시키는 트랜스파일러의 역할을 한다.         혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive02/",
        "teaser": null
      },{
        "title": "[Deep Dive] 03장 자바스크립트의 개발 환경과 실행 방법",
        "excerpt":"  이론적인 부분만 정리하고 설치부분은 건너뛰었다! 이미 설치 다 했으니깐!       1. 자바스크립트 실행 환경   모든 브라우저는 자바스크립트를 내장하고 있고, Node.js도 자바스크립트 엔진을 내장하고 있다.  하지만 브라우저와 Node.js의 자바스크립트에는 조금 차이가 있다.                  브라우저               Node.js                       렌더링이 주된 목적               브라우저 이외의 환경에서 자바스크립트 사용 가능                 DOM API 제공               DOM API 제공하지 않음                 파일시스템 제공하지 않음               파일시스템 제공                 Client-side API               Node.js Host API                 ECMAScript               ECMAScript           Client-side API  API는 사이트가 실행되고 있는 브라우저와 운영 체제의 다양한 부분 그리고 웹 사이트 혹은 서비스의 데이터를 다룰 수 있는 인터페이스이다.  Client-side API는 기능들을 미리 구현한 DOM, BOM, Canvas, XMLHttpRequest, fetchm requestAnimation Frame, SVG, Web Storage, Web Component, Web Worker         2. 웹 브라우저      개발자 도구      단축키                  운영체제       단축키                       윈도우       F12 / Ctrl + Shift + I                 macOS       command + option + I                 기능                  패널       설명                       Elements       웹페이지의 DOM, CSS를 볼 수 있고 수정도 가능하다.(저장은 되지 않음)                 Console       에러를 확인, 자바스크립트의 console.log()를 확인                 Source       웹페이지의 자바스크립트 코드 디버깅                 Network       네트워크 request 정보와 성능 확인                 Application       웹스토리지, 세션, 쿠키 확인 및 관리                 콘솔   콘솔창에 에러가 출력된다. 또한 디버깅하는 것보다 쉽게 결과를 확인할 수 있다.         디버깅   Source 패널로 이동 → 에러가 발생한 위치에 빨간 밑줄이 표시됨(에러내용이 간략하게 표시됨) → 에러가 발생한 부분 수정       3. Node.js    프로젝트 규모가 커짐에 따라 React, Angular, Vue.js, Lodash 프레임워크, 라이브러리 도입 필요 → Node.js, npm 필요   2009년 아이언 달이 발표한 Node.js는 크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경   Node.js  브라우저 이외의 환경에서의 자바스크립트 실행환경 제공    npm  자바스크립트 패키지 매니저  Node.js에서 사용할 수 있는 모듈들을 패키지화, 패키지 설치 및 관리   4. 자바스크립트 동작원리(추가)          혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive03/",
        "teaser": null
      }]
