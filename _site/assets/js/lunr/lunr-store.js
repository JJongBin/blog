var store = [{
        "title": "Jekyll 블로그 시작 🚀",
        "excerpt":"    블로그를 시작해볼까 고민한지만 벌써 몇 개월째…드디어 블로그를 시작하게 되었다.  꾸준히 포스팅하려는 의지를 불태우고자 이것저것 첫번째 글을 써보려고 한다.       1. Jekyll blog 개발 환경 셋팅    구글링을 통해서 jekyll 블로그를 알게 되었고, 프론트엔드 개발자를 지향하고 있는 나에게 네이버나 다음 블로그보다 도움이 될거라고 생각했다.  템플릿을 정해야한다고 하길래 이것 저것 찾아보다가 몇 몇분들이 추천해주시는 minimal-mistakes에 꽂혀 이 템플릿을 사용하게 되었다.   minimal-mistakes github 주소!  https://github.com/mmistakes/minimal-mistakes       이제 내 로컬 환경에서 Github에 올릴 수 있도록 셋팅을 해줘야 했는데 환경변수 때문에 너무 애를 먹었다. ruby나 gem 자체를 처음 이용해 보기도 해서 더욱 생소했던 것 같다. 하다하다 안되서 전부 삭제하고 다시 깔았다.   brew install ruby gem install --user-install bundler jekyll   위 명령어를 터미널에 입력해서 이 순서대로 진행했는데 환경변수를 잘못 적어서 시간이 오래걸렸다.  homebrew를 이용해서 ruby를 설치하고 패키지시스템과 같은 gem을 이용해서 bundler, jekyll을 설치하고, .zshrc 파일에 환경변수를 추가했다   ## 환경변수 export PATH=\"$HOME/.gem/ruby/3.0.0/bin:$PATH\" export PATH=\"/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/3.0.0/bin:$PATH\"    이 사이트를 참고했다. 아니 거의 따라했다.  https://jekyllrb.com/docs/installation/macos/       bundle -v jekyll -v   이렇게 입력했을때 bundle과 jekyll의 버전이 제대로 출력되면 다왔다!  Bundler version 2.2.25  jekyll 4.2.0   bundle jekyll serve --port [port]   서버를 시작하려고 위 명령어를 입력했더니   cannot load such file -- webrick (LoadError)  …..??   이런 오류가 나와서 당황했는데 얼른 구글링 하니 어떤분께서 이 문제에 대해서 설명을 잘해주셨다.   bundle add webrick 이라는 명령어로 webrick을 추가해 주고 다시 실행하면 된다고 한다.   안됬던 이유는 ruby 3.0.0부터 webrick이 기본으로 포함된 gem에서 빠졌기 때문이라고 한다.   위 과정까지 다하고나니 http://localhost:[port]/로 내가 만들 블로그에 로컬환경에서 접속할 수 있었다.       2. 블로그를 시작한 이유   자바스크립트에 대한 이해가 부족하다고 생각했기 때문에 유투버분의 추천을 보고 모던 자바스크립트 Deep Dive 라는 책을 구매해서 읽기 시작했다. 책이 900페이지나 되길래 먼저 속독으로 한번 읽어보고 다시 읽어야겠다고 생각했다. 하지만 속독으로 읽더라도 어느정도 감이 와야하는데 대충 보고 넘기다보니 까먹고 다시 찾아보고 하는 과정이 반복이 됬다. 너무 쉽게 생각한 내 잘못이었다. 어떻게 하면 꾸준하게 꼼꼼히 내 지식으로 만들 수 있을까 고민을 하다가 “블로그에 내가 이해한 내용을 정리하면 좋지않을까?” 라는 생각을 하게 되었고, 한 포스팅 당 한 한 단락으로 구성해보자! 라고 다짐했다. 나중에 내가 까먹은 지식을 내가 이해했던 방법으로 좀 더 빠르게 다시 생각해 낼 수 있고, 아무래도 포스팅을 하려면 좀 더 깊게 알고 이해할 수 있을 것 같다.   모던 자바스크립트 Deep Dive는 총 49장 ( 변수 표현식 … 에러처리 모듈 등 )으로 구성이 되어있다. 굉장히 오래 걸릴 것 같지만 그 때의 뿌듯함이 벌써부터 기대가 된다. 이 외에 내가 습득했던 지식을 사용하지 않다보니 잊어버리는 경우가 꽤 많아서 다른 것들도 정리하려고 한다. 화이팅 나!         이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시고 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Blog"],
        "tags": ["Blog","jekyll"],
        "url": "/blog/startBlog/",
        "teaser": null
      },{
        "title": "[Deep Dive] 01장 프로그래밍",
        "excerpt":"    1. 프로그래밍이란?    프로그래밍이란 컴퓨터에게 실행을 요구하는 일종의 커뮤니케이션    프로그래밍 → 기계가 실행할 수 있도록 정확하고 상세하게 요구사항을 설명하는 작업   프로그래밍은 기계에게 설명하는 과정이므로 컴퓨터적 사고를 가지고 바라보아야한다.       2. 프로그래밍 언어   컴퓨터에게 전달한 명령은 사람이 이해하는 언어가 아닌 컴퓨터가 이해할 수 있는 기계어로 전달해줘야한다.   기계어는 사람이 이해하기 어렵기 때문에 사람이 이해하기 쉬운 프로그래밍 언어로 작성된 명령을 컴파일러를 통해 기계어로 바꿔준다.   사람의 프로그래밍 언어  →  컴파일러(변환)  →  컴퓨터의 기계어       3. 구문과 의미   사람이 이해하도록 만들어진 프로그래밍 언어는 c, c++, 파이썬, 자바, 자바스크립트 등이 있다.  이러한 프로그래밍 언어들은 흐름제어(변수, 값, 연산자, 표현식, 문, 조건문, 반복문), 함수, 객체, 배열등의 문법을 제공한다.      프로그래밍은 요구사항의 집합을 분석해서 적절한 자료구조와 함수의 집합으로 변환한 후, 그 흐름을 제어하는 것이다.          이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive01/",
        "teaser": null
      },{
        "title": "[Deep Dive] 02장 자바스크립트란?",
        "excerpt":"    1. 자바스크립트의 탄생   1995년 넷스케이프 커뮤니케이션즈는 웹페이지의 보조적인 기능을 수행하기 위해 브라우저에서 동작하는 프로그래밍언어를 도입   → 브렌던 아이크가 개발한 자바스크립트         2. 자바스크립트의 표준화   자바스크립트의 파생버전이 출시 (Jscript) → 이로인해 브라우저들 사이에서 *크로스 브라우징 이슈 발생 → 표준화된 자바스크립트의 필요성이 생김   * 크로스 브라우징  브라우저에 따라 호환성이 다르기 때문에 웹페이지의 기능들이 정상적으로 동작하지 않음!     1997년 7월 표준화된 자바스크립트 사양인 ECMAScript 1(ES1)이 완성     이후 ES2, ES3 ... 2020년 ES11로 크고 작은 기능들이 추가되어 발표됨   범용 프로그래밍 언어로써 필요한 여러 기능들이 도입된 2015년 ECMAScript(ES6)                   버전       년도       특징                       ES6       2015       let/const, 클래스, 화살표 함수, 템플릿 리터럴, 디스트럭처링 할당, 스프레드 문법, rest 파라미터, 심벌, 프로미스, Map/Set, 이터러블, for…of, 제너레이터, Proxy, 모듈 import.export                 3. 자바스크립트 성장과 역사       Ajax            1999년 자바스크립트를 이용해 서버와 브라우저가 비동기 방식으로 데이터를 주고 받을 수 있는 통신 기능       기존의 웹페이지는 화면이 전환되면 전체 HTML을 받아 다시 랜더링       Ajax등장 이후 변경할 필요가 없는 부분은 두고 필요한 데이터만 받아 해당 부분 랜더링 → 리소스 절약, 빠른 성능과 부드러운 화면전환이 가능               jQuery            DOM을 더욱 쉽게 제어할 수 있음       크로스 브라우징 이슈도 어느 정도 해결               V8 자바스크립트 엔진            V8은 웹 브라우저 내부에서 자바스크립트 수행 속도의 개선을 목표로 처음 고안되었습니다. 속도 향상을 위해 V8은 인터프리터를 사용하는 대신 자바스크립트 코드를 더 효율적인 머신 코드로 번역합니다. 저스트인타임 컴파일러를 구현함으로써 코드를 실행 시에 자바스크립트 코드를 머신 코드로 컴파일하는데, 이는 스파이더몽키나 리노와 같은 현대적인 다른 자바스크립트 엔진에서도 마찬가지입니다. 주된 차이는 V8은 바이트코드와 같은 중간 코드를 생산하지 않는다는 점입니다.                Node.js            브라우저 이외에도 자바스크립트를 작동시킬 수 있도록함       비동기I/O 지원, 단일스레드 이벤트 루프 기반(요청 처리 성능이 좋음)       백엔드까지도 다룰 수 있음               SPA 프레임워크            Single Page Application(SAP)       Angular, React, Vue.js, Svelte …                    SPA 구현을 쉽게 말하면 jsp파일 없이 index.html파일 하나에서 js, css등 리소스 파일들과 모듈들을 로드해서 페이지 이동 없이 특정영역만 새로 모듈을 호출하고 데이터를 바인딩하는 개념.                                  4. 자바스크립트와 ECMAScript    자바스크립트는 ECMAScript와 브라우저가 별도 지원하는 클라이언트 사이드 Web API(DOM, BOM, Canvas, XNLHttpRequest, fetch 등)을 아우르는 개념 (자바스크립트 &gt; ECMAScript)         5. 자바스크립트의 특징       웹 브라우저에서 동작하는 유일한 프로그래밍 언어   별도의 컴파일을 하지 않는 *인터프리터 언어   *인터프리터 언어  코드가 실행되는 단계인 런타임에 문 단위로 한줄씩 중간 코드인 바이트 코드로 변환한 후 실행      멀티 패러다임 프로그래밍 언어(명령형, 함수형, 프로토타입 기반, 객체지향 프로그래밍)   자바스크립트는 프로토타입 기반의 객체지행 언어         6. ES6 브라우저 지원 현황      해당 링크에서 자세히 볼 수 있다.  https://kangax.github.io/compat-table/es6/   몇몇 브라우저에서 자바스크립트의 최신기능을 지원하지 않을 수도 있기 때문에 *바벨(Babel)을 이용할 필요가 있다   *바벨(Babel)  ES6+ 버전의 자바스크립트나 타입스크립트, JSX 등 다른 언어로 분류되는 언어들에 대해서도 모든 브라우저에서 동작할 수 있도록 호환성을 지켜준다. 바벨은 이렇게 추상화 수준을 유지한 채로 코드를 변화시키는 트랜스파일러의 역할을 한다.         이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive02/",
        "teaser": null
      },{
        "title": "[Deep Dive] 03장 자바스크립트의 개발 환경과 실행 방법",
        "excerpt":"  이론적인 부분만 정리하고 설치부분은 건너뛰었다! 이미 설치 다 했으니깐!       1. 자바스크립트 실행 환경   모든 브라우저는 자바스크립트를 내장하고 있고, Node.js도 자바스크립트 엔진을 내장하고 있다.  하지만 브라우저와 Node.js의 자바스크립트에는 조금 차이가 있다.                  브라우저               Node.js                       렌더링이 주된 목적               브라우저 이외의 환경에서 자바스크립트 사용 가능                 DOM API 제공               DOM API 제공하지 않음                 파일시스템 제공하지 않음               파일시스템 제공                 Client-side API               Node.js Host API                 ECMAScript               ECMAScript           Client-side API  API는 사이트가 실행되고 있는 브라우저와 운영 체제의 다양한 부분 그리고 웹 사이트 혹은 서비스의 데이터를 다룰 수 있는 인터페이스이다.  Client-side API는 기능들을 미리 구현한 DOM, BOM, Canvas, XMLHttpRequest, fetchm requestAnimation Frame, SVG, Web Storage, Web Component, Web Worker         2. 웹 브라우저      개발자 도구      단축키                  운영체제       단축키                       윈도우       F12 / Ctrl + Shift + I                 macOS       command + option + I                 기능                  패널       설명                       Elements       웹페이지의 DOM, CSS를 볼 수 있고 수정도 가능하다.(저장은 되지 않음)                 Console       에러를 확인, 자바스크립트의 console.log()를 확인                 Source       웹페이지의 자바스크립트 코드 디버깅                 Network       네트워크 request 정보와 성능 확인                 Application       웹스토리지, 세션, 쿠키 확인 및 관리                 콘솔   콘솔창에 에러가 출력된다. 또한 디버깅하는 것보다 쉽게 결과를 확인할 수 있다.         디버깅   Source 패널로 이동 → 에러가 발생한 위치에 빨간 밑줄이 표시됨(에러내용이 간략하게 표시됨) → 에러가 발생한 부분 수정       3. Node.js    프로젝트 규모가 커짐에 따라 React, Angular, Vue.js, Lodash 프레임워크, 라이브러리 도입 필요 → Node.js, npm 필요   2009년 아이언 달이 발표한 Node.js는 크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경   Node.js  브라우저 이외의 환경에서의 자바스크립트 실행환경 제공    npm  자바스크립트 패키지 매니저  Node.js에서 사용할 수 있는 모듈들을 패키지화, 패키지 설치 및 관리   4. 자바스크립트 동작원리(추가)      간단하게만 설명하자면 변수 등을 저장하는 메모리 힙이 존재하고 자바스크립트 엔진의 스택은 필요한 변수 등이 있으면 메모리 힙을 참조해 한번에 하나의 명령을 수행한다.   자바스크립트 엔진의 스레드는 하나라고 하는데 웹페이지를 보면 여러 작업들이 동시에 진행이 되는걸 볼 수 있다.   이는 이벤트루프를 통해 일종의 대기실인 콜백큐에서 기다렸다가 자바스크립트 엔진의 스텍이 비어있으면 이벤트루프가 콜백큐의 작업을 하나씩 꺼내 실행이 되도록 스텍에 넣어준다.   이번엔 간략하게 요약했지만 다음번에 이 주제로 공부하고 포스팅해야겠다!         이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive03/",
        "teaser": null
      },{
        "title": "[Deep Dive] 04장 변수",
        "excerpt":"    1. 변수    컴퓨터는 CPU를 통해 연산하고 메모리를 사용해 데이터를 기억한다.   * 메모리  - 데이터를 저장할 수 있는 데이터 셀의 집합.  - 메모리 셀 하나의 크기는 1바이트(8비트).  - 1바이트 단위로 저장하고 읽음.  - 각 셀은 고유한 메모리 주소를 가진다. - 저장되는 모든 값은 이진수로 저장된다.   메모리 주소를 통해 값에 접근하는 것은 치명적일 수 있다. 따라서 자바스크립트는 직접적인 메모리 제어를 허용하지 않음.   프로그래밍 언어는 기억할 값을 메모리에 저장하고, 저장된 값을 읽고 재사용하기 위해 변수라는 것을 사용함.   * 변수의 정의  하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름을 말한다.   → 변수란 값의 위치를 가르킴                     변수이름       메모리 공간에 저장된 값을 식별할 수 있는 고유한 이름                 변수 값       변수에 저장된 값                 변수 할당       변수에 값을 저장하는 것                 변수 참조       변수에 저장된 값을 읽어들이는 것               2. 식별자   변수의 이름은 식별자라고 부르기도 함.   * 식별자  어떤 값을 구별해서 식별할 수 있는 고유한 이름.  식별자는 값을 저장하는 것이 아니라 메모리 주소를 기억하고 있다.      3. 변수 선언    값을 저장하기 위한 메모리 공간을 확보 → 변수 이름과 확보된 메모리 공간의 주소를 연결해서 값을 저장할 수 있도록 함.   자바스크립트에서는 변수를 선언할 때 `var`, `let`, `const` 를 사용한다.   변수를 선언하면 가장 먼저 메모리가 확보되는데 자바스크립트 엔진에 의해 `undefined` 라는 값이 암묵적으로 할당되어 초기화된다.                  자바스크립트 엔진의 변수 선언 2단계                         선언단계       변수 이름을 등록해서 자바스크립트 엔진에 변수의 존재를 알림                 초기화 단계       값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화           * 실행 컨텍스트  - 모든 변수 이름(식별자)는 실행 컨텍스트에 등록된다.  - 실행 컨텍스트는 엔진이 소스코드를 평가하고 실행하기 위한 환경을 제공 및 실행 결과를 관리하는 영역.  - 자바스크립트는 실행 컨텍스트를 통해 식별자와 스코프를 관리한다.       4. 호이스팅     변수의 선언은 위에서 아래로 순차적으로 진행되는 순서를 따르지 않고 그 이전 단계에서 실행이 된다.  자바스크립트 엔진은 코드를 실행하기 앞서 소스코드 평과 과정을 진행한다. 이때 변수 선언 및 모든 선언문(변수, 함수 등)을 먼저 실행한다.   consoloe.log(jongbin); // 에러가 발생하지 않음  var jongbin = \"hello\";   var의 경우 에러가 발생하지 않지만, const, let은 에러가 발생   var는 되는데 왜 const, let는 안되는지 찾아보니 TDZ(Temporal Dead Zone)라는 개념이 있었다.   TDZ(Temporal Dead Zone)  변수선언 전에 변수에 접근하면 TDZ에 의해 ReferenceError가 발생하게 된다.   블로그를 찾다보니 TDZ 구간에 있는 변수는     선언은 되어있지만 아직 초기화가 되지않아 변수에 담길 값을 위한 공간이 메모리에 할당되지 않은 상태    라고 말하시기도 한다. const, let도 호이스팅은 되지만 TDZ에 들어있어 참조에러가 난다.   스코프 내용을 같이 하면 좋겠지만 책 뒤쪽에 나온다.  스코프는 간단히 변수에 접근할 수 있는 범위라고도 한다.       5. 값의 할당    //값의 할당은 선언과 함께 하나의 문으로 할 수 있다. const jongbin = \"hello\";  //선언과 할당을 따로 할 수 있다. const jongbin; jongbin = \"hello\";   변수 할당은 소스코드가 순차적으로 실행되는 런타임에 실행된다.   * 이해하기 어려웠던 부분!  변수를 선언하면 undefined라는 값이 할당이 되는데 이후 변수에 할당을 하게되면 해당 변수가 가르키는 메로리주소값에 있는 undefined값이 수정값으로 수정되는것이 아니고 새로운 메모리에 수정값을 넣고 주소를 바꿔준다.   이렇게 하면 괜히 번거로운게 아닌가 생각을 하는데 왜 값을 직접 변경하지 않는지 모르겠다…(찾고 추가해서 수정하자!)       6. 값의 재할당   값의 재할당도 할당과 마찬가지로 직접 값을 수정하지 않고 새로운 메모리를 확보하고 값을 넣고 변수에 주소를 다시 맵핑해준다.   이렇게 되면 undefined값이나 전에 값들이 메모리에 남아있을텐데 이게 메모리 누수로 이어지지는 않을까 생각했지만!  이렇게 불필요한 값들은 **가비지 콜렉터**에 의해 메모리에서 자동 해제된다!       7. 식별자 네이밍 규칙       식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(_), 달러 기호($)를 포함할 수 있다.   식별자는 특수문자를 제외한 문자, 언더스코어(_), 달러 기호($)로 시작해야 한다. (숫자로 시작 X)   예약어는 식별자로 사용할 수 없다.   변수 이름은 목적을 위해 의미를 명확히 표현하는게 좋다.       #. 네이밍 컨벤션      카멜 케이스 (jongbinHome)   스네이크 케이스 (jongbin_home)   파스칼 케이스 (JongbinHome)   헝가리언 케이스 (strJongbinHome) → (type + 식별자이름)                  자바스크립트에서는 일반적으로                         변수, 함수       카멜케이스                 생성자 함수, 클래스       파스칼케이스                 이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive04/",
        "teaser": null
      },{
        "title": "[Deep Dive] 05장 표현식과 문",
        "excerpt":"    1. 값       값은 식(표현식)이 평가되어 생성된 결과를 말한다.   값은 데이터 타입을 가지고, 메모리에 저장된다.   // 10 + 20이 평가되어 값 30을 생성 10 + 20;  // 30       2. 리터럴       리터럴은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법.   자바스크립트 엔진은 코드를 실행하는 런타임에 리터럴을 평가해 값을 생성함.   * 리터럴  정수리터럴, 부동소수점리터럴, 2진수리터럴, 문자열리터럴, 불리언리터럴, null리터럴, undefined리터럴, 객체리터럴, 배열리터럴, 함수리터럴, 정규표현식리터럴       3. 표현식       표현식은 값으로 평가될 수 있는 문.   표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조한다.   표현식은 값처럼 사용될 수 있다.       4. 문       문은 프로그램을 구성하는 기본 단위이자 최소 실행 단위.   문의 집합 → 프로그램  /  문을 작성하고 나열 → 프로그래밍        선언문, 할당문, 조건문, 반복문 등         토큰은 문법적인 의미를 가지고, 문법적으로 더 이상 나눌 수 없는 코드의 기본요소를 의미   문은 여러 토큰으로 구성   키워드, 식별자, 연산자, 리터럴, 세미콜론, 마침표 등은 문법적인 의미를 가지고 더 이상 나눌 수 없음  →  토큰       5. 세미콜론과 세미콜론 자동 삽입 기능    자바스크립트 엔진은 세미콜론으로 문의 종료 위치를 파악하고 순차적으로 실행한다.   코드블록({…})은 자체종결성을 가지기 때문에 세미콜론을 붙이지 않는다.   * 세미콜론 자동 삽입 기능(ASI)  자바스크립트 엔진은 소스코드를 해석할때 문의 끝이라고 예측되는 지점에 세미콜론을 자동으로 붙여준다.       6. 표현식인 문과 표현식이 아닌 문    구별하는 방법 → 변수에 할당하는 것                  표현식인 문       값으로 평가(변수에 할당 가능)       var temp = 1 + 2                 표현식이 아닌 문       값으로 평가되지 않음(할당x)       var temp = var x                 이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive05/",
        "teaser": null
      },{
        "title": "[Deep Dive] 06장 데이터타입",
        "excerpt":"    자바스크립트는 7개의 데이터 타입을 제공한다.                  구분       데이터 타입       설명                       원시타입       숫자 타입       숫자, 정수와 실수 구분 없이 하나의 숫자 타입만 존재                 원시타입       문자열 타입       문자열                 원시타입       불리언 타입       논리적 참(true), 거짓(false)                 원시타입       undefined 타입       var 키워드로 선언된 변수에 암묵적으로 할당되는 값                 원시타입       null 타입       값이 없다는 것을 의도적으로 명시할 때 사용하는 값                 원시타입       심벌 타입       ES6에서 추가된 7번째 타입                 객체타입       객체 타입       객체, 함수, 배열 등               1. 숫자 타입       자바스크립트의 숫자 타입은 모두 실수로 처리함.   메모리에 저장될때 2진수로 저장됨.   값을 참조할때 모두 10진수로 해석됨.   * 숫자타입의 특별한 세가지  - Infinity: 양의 무한대  - -Infinity: 음의 무한대  - NaN: 산술 연산 불가       2. 문자열 타입       문자열은 0개 이상의 16비트 유니코드 문자(UTF-16)의 집합.   작은따옴표(' '), 큰따옴표(\" \"), 백틱(` `)으로 표현.   문자열은 불변값임(연산시 새로운 값을 할당한 후 참조주소를 변경)       템플릿 리터럴  ES6부터 템플릿 리터럴이라는 새로운 문자열 표기법 도입.     백틱(``)을 사용해 멀티라인 문자열 가능   const jongbin = `hello I'm jongbin`;  // 출력결과 // hello // I'm jongbin         표현식 삽입 (${}를 사용해서 표현식을 삽입한다.)   const jongbin = `I',m ${20+6} years old`;   // 출력결과 // I'm 26 years old       3. 불리언 타입    불리언 타입은 true, false값 두가지가 있다.       4. undefined 타입    undefined은 값을 할당하지 않은 변수를 참조했을때 반환된다.   선언만 하고 값을 할당하지 않은 변수를을 undefined로 초기화한다.       5. null 타입    null은 변수에 값이 없음을 의도적으로 명시할 때 사용한다.   이전의 값의 참조를 명시적으로 제거할 때 사용       6. 심벌 타입       변경불가능한 원시타입의 값   다른 값과 중복되지 않는 유일한 값       7. 객체 타입       자바스크립트의 기본 타입은 객체(object).   객체란 실생활에서 우리가 인식할 수 있는 사물로 볼 수 있다.   객체는 여러 프로퍼티(property)나 메소드(method)를 같은 이름으로 묶어놓은 일종의 집합체.   자바스크립트를 이루고 있는 거의 모든 것이 객체.       데이터 타입의 필요성       메모리            메모리에 값을 저장하려면 공간을 확보해야함.       변수에 할당되는 값의 데이터 타입에 따라 확보해야 할 메모리 공간의 크기가 결정됨               값의 해석            데이터 타입에 따라 다르게 해석한다.(메모리에 저장된 이진수(값)을 문자열? 숫자?)           심벌 테이블  컴파일러 또는 인터프리터는 심벌테이블라고 부르는 자료 구조를 통해 식별자를 키로 바인딩된 값의 메모리 주소, 데이터 타입, 스코프 등을 관리한다.      값을 저장할 깨 확보해야 하는 메모리 공간의 크기를 결정.   값을 참조할 때 한번에 읽어야 할 메모리 공간의 크기를 결정.   메모리에서 읽어들인 2진수를 어떻게 해석할지 결정.       동적 타이핑    자바스크립트는 정적 타입 언어와 다르게 변수 선언시 타입을 지정하지 않는다. 대신 var, const, let 키워드를 사용해 변수 선언을 한다.   // c 언어 char c; int num;   // javascript var t1; const t2; let t3;         자바스크립트는 할당된 값에 의해 타입이 결정된다.   재할당에 의해 타입이 동적으로 변할 수 있다.   이런 언어를 동적 타입 언어라고 한다.   동적타입언어는 개발자의 의도와는 다른 변수타입을 제공할 수 있다. → 동적타입언어는 유연성은 높지만 신뢰성은 떨어진다.         이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive06/",
        "teaser": null
      },{
        "title": "[Deep Dive] 07장 연산자",
        "excerpt":"    피연산자     연산자의 대상   값으로 평가될 수 있는 표현식       1. 산술 연산자       피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만듬.   산술 연산이 불가능한 경우 NaN을 반환       * 이항 산술 연산자                  이항 산술 연산자       의미       부수효과                       +       덧셈       X                 -       뺄셈       X                 *       곱셈       X                 /       나눗셈       X                 %       나머지       X               * 단항 산술 연산자                  단항 산술 연산자       의미       부수효과                       ++       증가       O                 --       감소       O                 +       효과 X       X                 -       양수를 음수로, 음수를 양수로 반전한 값 반환       X             증가/감소 연산을 하면 피연산자의 값을 변경하는 암묵적 할당이 일어남.   증가/감소 연산자는 위치에 의미가 있다.  - 피연산자 앞에 위피한 전위 증가/감소 연산자는 먼저 피연산자의 값을 증가/감소시킨후 다른 연산을 수행.  - 피연산자 뒤에 위피한 후위 증가/감소 연산자는 먼저 다른 연산을 수행한 후 피연산자의 값을 증가/감소.       * 문자열 연결 연산자     + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.       2. 할당 연산자    할당 연산자는 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다.                  할당 연산자       예       동일 표현       부수효과                       =       x=5       x=5       O                 +=       x+=5       x=x+5       O                 -=       x-=5       x=x-5       O                 *=       x*=5       x=x*5       O                 /=       x/=5       x=x/5       O                 %=       x%=5       x=x%5       O           부수효과 =&gt; 변수값이 변함.       3. 비교 연산자    비교 연산자는 좌항과 우항의 피연산자를 비교한 다음 그 결과를 불리언 값으로 반환.       * 동등/일치 비교 연산자                  비교 연산자       의미       사례       설명       부수효과                       ==       동등 비교       x==y       x와 y의 값이 같음       X                 ===       일치 비교       x===y       x와 y의 값과 타입이 같음       X                 !=       부동등 비교       x!=y       x와 y의 값이 다름       X                 !==       불일치 비교       x!==y       x와 y의 값과 타입이 다름       X           ==와===는 같아 보이지만 정확한 비교를 위해서는 ===를 사용하는게 좋다.   ==는 비교할때 암묵적인 타입변환을 통해 타입을 일치시킨다.       * 동등/일치 비교 연산자                  대소 관계 비교 연산자       예제       설명       부수효과                       &gt;       x&gt;y       x가 y보디 큼       X                 &lt;       x&lt;y       x가 y보디 작음       X                 &gt;=       x&gt;=y       x가 y보디 크거나 같음       X                 &lt;=       x&lt;=y       x가 y보디 작거나 같음       X               4. 삼항 조건 연산자    삼항 조건 연산자는 조건식의 평가 결과에 따라 반환할 값을 결정.   조건식 ? 조건식이 true일때 반환할 값 : 조건식이 false일때 반환할 값  // x와 y 중에 더 큰 값을 반환 var jongbin  = x&gt;y ? x : y   console.log(jongbin) // 값처럼 사용 가능     삼항 조건 연산자를 중복해서 사용할 수 있다.   var jongbin  = num ? (num&gt;0 \"양수\" : \"음수\") : \"0\";       5. 논리 연산자    논리 연산자는 우항과 좌항의 피연산자를 논리 연산.                  논리 연산자       의미       부수 효과                       ||       논리합(AND)       X                 &amp;&amp;       논리곱(OR)       X                 !       부정(NOT)       X           불리언 값을 반환한다.(true, false)       6. 쉼표 연산자    쉼표 연산자는 파례대로 피연산자를 평가하고 마지막 피연산자의 결과를 반환.  var x, y, z; x=1, y=2, x=3; // 결과 // 3       7. 그룹 연산자    소괄호(())로 묶어 내부 피연산자의 연산을 먼저한다.       8. typeof 연산자    typeof연산자는 피연산자의 데이터 타입을 문자열로 반환.   string, number, boolean, undefined, symbol, object, function 중 한가지를 반환.       9. 지수 연산자       ES7에서 도입   좌항의 피연산자를 밑으로, 우항의 피연산자를 지수로 거듭 제곱한 값을 반환.   Math.pow 메서드와 같다.   우선순위가 가장 높다.   2 ** 2;   // 4 2 ** 10;   // 1024       11. 그 외 연산자                   연산자       개요                       ?.       옵셔널 체이닝 연산자                 ??       null 병합 연산자                 delete       프로퍼티 삭제                 new       생성자 함수를 호출할 때 사용하여 인스턴스를 생성                 instanceof       좌변의 객체가 우변의 생성자 함수와 연결된 인스턴스인지 판별                 in       프로퍼티 존재 확인               12. 연산자의 우선순위    연산자가 여러개 있을 때 수행되는 순서.                  우선순위       연산자                       1       ()                 2       new(매개변수 존재), ., [](포로퍼티 접근), ()(함수호출), ?.(옵셔널 체이닝 연산자)                 3       new(매개변수 미존재)                 4       x++, x--                 5       !x, +x, -x, ++x, --x, typeof, delete                 6       **(이항연산자 중에서 우선순위가 가장 높다)                 7       *, /, %                 8       +, -                 9       &lt;, &lt;=, &gt;, &gt;=, in, instanceof                 10       ==, !=, ===, !==                 11       ??(null 병합연산자)                 12       &amp;&amp;                 13       ||                 14       ? ... : ...                 15       할당연산자(=, +=, -=,…)                 16       ,               13. 연산자 결합 순서                   결합 순서       연산자                       좌항→우항       +, -, /, %, &lt;, &lt;=, &gt;, &gt;=, &amp;&amp;, ||, ., [], (), ??, ?., in, instanceof                 우항→좌항       ++, --, 할당연산자(=, +=, -=,…), !x, +x, -x, ++x, --x, typeof, delete, ? ... : ...                 이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive07/",
        "teaser": null
      },{
        "title": "[Deep Dive] 08장 제어문",
        "excerpt":"    제어문은 조건에 따라 코드 블록을 실행(조건문)하거나 반복 실행(반복문)할 때 사용.       1. 블록문       블록문은 0개 이상의 문을 중괄호({})로 묶은 것   자바스크립트는 블록문을 하나의 실행 단위로 취급   일반적으로 제어문이나 함수를 정의할 때 사용   블록문은 자체종결성을 가지므로 세미콜론(;)을 붙이지 않음       2. 조건문    조건문은 주어진 조건식의 평가 결과에 따라 코드 블록(블록문)의 실행을 결정.   if ... else 문   if ... else문은 주어진 조건식의 논리적 참, 거짓에 따라 실행 블록 결정.   if (조건식){   // 조건식이 참(true)일때 이 코드 블록 실행 } else {   // 조건식이 거짓(false)일때 이 코드 블록 실행 }     조건문을 여러개 만들 수 있는데 else if를 사용하면 된다   if (조건식1){   // 조건식1 참(true)일때 이 코드 블록 실행 } else if(조건식2) {   // 조건식2 참(true)일때 이 코드 블록 실행 } else if(조건식3){   // 조건식3 참(true)일때 이 코드 블록 실행 } else {   // 모든 조건식이 거짓(false)일때 이 코드 블록 실행 }   if ... else문은 위에서 순서대로 진행된다 (범위를 조건으로 했을때 주의)   대부분의 if ... else문은 삼항 조건 연산자로 표현할 수 있다   switch 문   switch문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 같는 case문으로 실행 흐름을 옮김.   switch (표현식) {   case 표현식1: 표현식과 표현식1이 일치하면 실행;     braek;   case 표현식2: 표현식과 표현식2가 일치하면 실행;     braek;   case 표현식3: 표현식과 표현식3이 일치하면 실행;     braek;   default: 아무것도 일치하지 않을때 실행; }  switch문의 case를 보면 break가 포함되어 있는데 코드 블록을 출하는 역할을 함.   `braek`를 사용하지 않으면 `default`가 실행된다.   * 폴스루(fall through)  switch문에서 의도적으로 break를 생략하여 여러 조건을 동일하게 사용한다.       3. 반복문    반복문은 조건식의 평가 결과가 참인 경우 코드 블록을 반복해서 실행(거짓일 때까지 반복).       &lt; 자바스크립트의 반복문 대체 &gt;     forEach : 배열을 순회   for...in : 객체의 프로퍼티를 열거   for...of : 반복문 대체 [ES6]   for 문   for (변수선언 및 할당; 조건식; 증감식){   // 조건식이 참인 경우 반복해서 실행 (조건식이 거짓일 때까지) }   // 1부터 10까지 출력 for (let i = 1; i&lt;=10; i++){   console.log(i) }  위 코드를 순서대로 살펴보면,       i는 let키워드를 사용해서 선언 및 1을 할당했고,     i&lt;=10이 조건식으로 있고 현재 i는 1이므로 true → 코드블록 실행     i를 출력 → 1 출력     증감식으로 i++, 코드블록 실행 이후 i가 1증가하고,     이후 조건식의 true, false 여부판단 → 코드블록 실행(조건식이 false일 때까지)       // 무한루프 for (;;){   // 코드실행 }      for문의 무한루프는 이렇게 사용이 가능.   for문은 중첩할 수 있다.       while  문   while문은 주어진 조건식의 평가 결과가 참(false)이면 코드블록을 계속해서 반복 실행.   while(조건식){   // 조건식이 참(true)이면 코드 반복 실행 }   // 1부터 9까지 출력 let i = 1; while(i&lt;10){   console.log(i)   i++; }  예시) 1 ~ 9 출력   // 무한루프 while(true){   // 코드 실행 }       do...while 문   do...while문은 코드블록을 먼저 실행하고 조건식을 평가 → 무조건 한번은 실행   do{   // 코드 실행 } while(조건문)       4. break 문   break문은 코드 블록을 탈출하는데 레이블문, 반복문, switch문을 탈출한다   →   이외 코드블록에서는 **SyntaxError(문법에러) 발생**   레이블문 : 식별자가 붙은 문을 말함   내부 코드블록이 아닌 외부 코드 블록을 탈출하려고 할때 식별자를 붙이고 braek에 식별자를 명시.   outer: for (;;){   for (let i = 1; i&lt;100; i++) {     console.log(i)     if (i === 50){       break outer;     }   } }  i가 50 일때 외부코드블록을 탈출시킨다.       5. continue 문   continue문은 반복문의 코드 블록 실행을 건너뛰고 진행한다.   for (let i = 1; i&lt;10; i++) {   if (i === 5){     continue;   }   console.log(i) }  i가 5일때 continue가 있는 해당 지점부터 코드블록을 건너뛰고 i가 6일때로 진행된다.         이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive08/",
        "teaser": null
      },{
        "title": "[Deep Dive] 09장 타입 변환과 단축 평가",
        "excerpt":"    1. 타입 변환    # 명시적 타입 변환 / 타입 캐스팅      개발자가 의도적으로 값의 타입을 변환하는 것   parseInt(), toString() …   # 암묵적 타입 변환 / 타입 강제 변환      개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 변환   표현식을 평가하기 위해 새로운 값을 생성하고 한번 사용하고 버림       명시적 타입 변환, 암묵적 타입 변환이 원시값(변수의 값)을 직접 변경하지 못함(원시값은 변경불가)   → 기존 원시값을 이용해서 다른 타입의 새로운 원시값을 생성        2. 암묵적 타입 변환    # 문자열 타입   1 + '2' // '12'  ”+ 연산자”는 피연산자 중 하나 이상이 문자열이기 때문에 1이 문자열로 암묵적으로 변환됨   # 숫자 타입   1 - '1'   // 0 1 * '10'  // 10 1 / 'one' // NaN   “산술 연산자”는 숫자 값을 만드는 연산자로 문자열이 숫자값으로 암묵적 타입 변환됨   숫자로 변환되지 않는 문자열로 연산했을때는 NaN 반환   '1' &gt; 0   // true  “비교 연산자”의 경우 크기를 비교하므로 숫자로 암묵적 타입 변환   자바스크립트 엔진은 숫자로 암묵적 변환을 할때 다음과 같다.  // 문자열 타입 +''       // 0 +'0'      // 0 +'1'      // 1 +'aaa'    // NaN  // 불리언 타입 +true     // 1 +false    // 0  // null 타입 +null     // 0  // undefined 타입 +undefined  // NaN  // 심벌 타입 +Symbol()   // error  // 객체 타입 +{}             // NaN +[]             // 0 +[1,2,3]        // NaN +(function ())  // NaN       # 불리언 타입   자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy값(참), Falsy값(거짓)으로 구분     Truthy값(참) =&gt; true   Falsy값(거짓) =&gt; false   Falsy값(거짓) : false, undefined, null, 0, -0, NaN, ''       3. 명시적 타입 변환    # 문자열 타입      String생성자 함수를 new연산자 없이 호출   Object.prototype.toString메서드 사용   문자열 연결 연산자(+)를 사용   // String 생성자 함수 String(1)   // \"1\"  // Object.prototype.toString 메서드 (1).toString()    // \"1\"  // 문자열 연결 연산자 1 + \"\"      // \"1\"       # 숫자 타입      Number생성자 함수를 new연산자 없이 호출   parseInt, parseFloat함수를 사용(문자열 → 숫자)   + 단항 산술 연산자 이용   * 산술 연산자 이용   // Number 생성자 함수 Number(1)   // 1  // parseInt 함수 parseInt(\"1\")   // 1  // 단항 산술 연산자 +\"1\"      // 1  // 산술 연산자 \"1\" * 1      // 1       # 불리언 타입      Boolean생성자 함수를 new연산자 없이 호출   ! 부정 논리 연산자를 두번 사용   // Boolean 생성자 함수 Boolean(1)    // true Boolean(0)    // false Boolean(\"\")   // false Boolean({})   // true Boolean([])   // true  // 부정 논리 연산자 !!'1'         // true !!''         // false !!1         // true !!0         // false       4. 단축 평가    &amp;&amp;, || 단축 평가 규칙                  단축 평가 표현식       평가 결과                       true || anything       true                 false || anythig       anything                 true &amp;&amp; anything       anything                 false &amp;&amp; anythig       false                   &amp;&amp;의 경우 첫번째 피연산자가 true, 두번째 피연산자가 true이면 두번째 피연산자를 반환            ||의 경우 첫번째 피연산자가 true이면 첫번째 피연산자를 반환           # if문 대체   let jongbin; let bool = true;  if (true) {   jongbin = \"hi\"; } console.log(jongbin);    // hi  // 단축 평가로 대체 // bool이 false이면 let bool = false; jongbin =  bool || \"hi\"; console.log(jongbin)      // hi  변수 bool이 true이면 true를 반환했을 것이다.       # 객체를 가르키는 변수 확인   변수가 객체가 아닌 null, undefined가 할당되어 있을 수 있는 경우에   let variable = null;  let value = variable &amp;&amp; variable.value  // null  변수 variable이 null이 아니었다면 정상적인 값을 출력   단축 평가를 사용하지 않고 그냥 참조하면 에러발생       # 함수 매개변수에 기본값 설정   함수를 호출할때 매개변수를 전달하지 않으면 매개변수는 undefined 자동 할당  → 이로인해 일어날 에러를 방지하기 위해서   function num(x) {   x = x || 0;   return x*x }  x를 전달하지 않으면 x는 undefined로 false값이기 때문에 0이 할당됨       # 옵셔널 체이닝 연산자(?.)      ES11에서 도입   좌항의 피연산자가 null, undefined이면, undefined반환   좌항의 피연산자가 null, undefined이 아니면, 참조   let variable = null; let value = variable?.value;    // undefined  만약 변수variable이 정상적인 값이라면 변수value는 variable.value       # null 병합 연산자(??)      ES11에서 도입   좌항의 피연산자가 null, undefined이면, 우항의 피연산자 반환   좌항의 피연산자가 null, undefined이 아니면, 좌항의 피연산자 반환   // 좌항이 null let variable = null ?? \"jongbin\";   // \"jongbin\"  // 좌항이 null이 아니면 let variable = \"won\" ?? \"jongbin\";   // \"won\"         이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive09/",
        "teaser": null
      },{
        "title": "[Deep Dive] 10장 객체리터럴",
        "excerpt":"    1. 객체       객체 타입은 다양한 타입의 값(원시값, 다른객체)들을 하나의 단위로 묶은 자료구조   0개 이상의 프로퍼티(key, value)로 구성된 집합   프로퍼티 값이 함수일 경우 일반함수와 구분되게 메서드(method)라고 함                                            프로퍼티       객체의 상태를 나타내는 값                 메서드       프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작               2. 객체 리터럴에 의한 객체 생성    자바스크립트는 프로토타입 기반 객체 지향 언어     객체 리터럴   Object 생성자 함수   생성자 함수   Object.create 메서드   클래스   객체 리터럴  중괄호({...}) 내에 0개 이상의 프로퍼티를 정의 (코드블럭 x → 세미콜론 필요)   const jongbin = {   age = 26,   location = \"suwon\",   // 여러개의 프로퍼티 정의 };       3. 프로퍼티    키(key)와 값(value)로 구성됨   const jongbin = {   age = 26,   // age는 키, 26은 값 };                     &lt; 프로퍼티 키, 값으로 사용할 수 있는 값 &gt;                         키(key)       빈 문자열을 포함하는 모든 문자열 또는 심벌 값                 값(value)       자바스크립트에서 사용할 수 있는 모든 값              프로퍼티 키는 식별자 네이밍 규칙(카멜케이스)을 따르지 않는 이름에는 반드시 따옴표 사용   프로퍼티 키로 예약어를 사용하는 것도 가능(권장 x)   중복 선언하면 에러 대신 덮어씀   객체의 프로퍼티를 동적으로 생성  프로퍼티 키를 대괄호([...])로 묶음   jongbin[shoes] = \"nike\";       4. 프로퍼티 접근    객체에 존재하지 않는 프로퍼티에 접근하면 `undefined`를 반환       &lt; 프로퍼티에 접근하는 방법 &gt;     마침표 프로퍼티 접근 연산자(.)를 사용하는 마침표 표기법   대괄호 프로퍼티 접근 연산자([...])를 사용하는 대괄호 표기법   const jongbin = {   age = 26 };  // 마침표 표기법 console.log(jongbin.age);  // 대괄호 표기법 console.log(jongbin[\"age\"])        대괄호 표기법을 사용할 때 키 값을 따옴표로 감싸야 함   키값이 네이밍 규칙을 준수하지 않았다면 대괄호 표기법을 이용해야 함       5. 프로퍼티 갱신, 접근, 삭제    갱신   const jongbin = {   age = 26 };  jongbin.age = 20;  존재하는 프로퍼티에 값을 할당하면 갱신됨.   생성   const jongbin = {   age = 26 };  jongbin.shoes = \"nike\";  존재하지 않는 프로퍼티에 값을 할당하면 동적으로 프로퍼티가 생성됨.   삭제   const jongbin = {   age = 26 };  delete jongbin.age;  delete 연산자를 사용하여 프로퍼티값을 삭제함(존재하지 않는 프로퍼티의 경우 무시)       6. ES6의 객체 리터럴   축약 표현   const x = 1, y = 2;  // 기존 const jongbin = {   x: x,   y: y }  // ES6 const jongbin = {   x,   y }  ES6에서는 변수 이름과 프로퍼티 키가 동일한 경우 프로퍼티 키를 생략할 수 있다.       여러개 프로퍼티 동적 생성   const something = \"shoes\"; let i = 0; const jongbin = {};  // 기존 jongbin[something + '-' + ++i] = \"nike\" jongbin[something + '-' + ++i] = \"hoka\"  console.log(jongbin)  // {shoes-1: \"nike, shoes-2: \"hoka\"}  // ES6 jongbin = {   [`${something}-${++i}`] : \"nike2\"   [`${something}-${++i}`] : \"hoka2\" }  console.log(jongbin)  // {shoes-1: \"nike2, shoes-2: \"hoka2\"}  ES6는 객체리터럴 내부에서도 사용 가능       메서드 축약 표현   // 기존 const jongbin = {   age: 26,   myOld: function() {     console.log(\"I'm \" + this.age.toString())   } }  // ES6 const jongbin = {   age: 26,   myOld() {     console.log(\"I'm \" + this.age.toString())   } }  function 키워드를 생략할 수 있음.         이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive10/",
        "teaser": null
      },{
        "title": "[Deep Dive] 11장 원시값과 객체",
        "excerpt":"    자바스크립트의 7가지 데이터 타입은 원시 타입과 객체 타입으로 구분됨                  원시 타입       객체 타입                       변경 불가능한 값       변경 가능한 값                 변수에 실제 값이 저장       변수에 참조 값이 저장                 값에 의한 전달       참조에 의한 전달           * 값에 의한 전달  변수를 다른 변수에 할당할 때 원본의 원시값이 복사되어 전달   * 참조에 의한 전달  변수를 다른 변수에 할당할 때 원본의 참조값이 복사되어 전달       1. 원시값    원시 타입의 값은 변경 불가능한 값 → 재할당을 할때 새로운 값을 생성  교체한다고 하는게 맞는 느낌이다!   변수 age -&gt; 0x000000f2(주소)  |  26(값) ___________________________________________                           새로 생성    0x00001222(주소)  |  27(값) ___________________________________________                                     0x000000f2(주소)  |  undefined(값) 변수 age -&gt; 0x00001222(주소)  |  27(값) ___________________________________________                         원시 값을 재할당하면,     새로운 메모르 공간 확보   확보된 메모리에 값 저장   변수가 참조하는 메모리 변경   값이 변하지 않아 이를 불변성이라고 함       값에 의한 전달   let jongbin = \"hi\";  // 참조된 주소가 아닌 값이 전달 let jb = jongbin;  console.log(jongbin === jb);    // true   변수 age   -&gt;   0x000000f2(주소)  |  26(값)                              ⬇︎ age copy  변수 age   -&gt;   0x000000f2(주소)  |  26(값) 변수 jbAge  -&gt;  0x00001222(주소)  |  26(값)   메모리주소(저장된 값)을 복사한다(참조된 주소값은 다름!)  메모리 주소를 복사하지만 주소값이 같은 것이 아님 → 전달된 메모리 주소로 값을 참조할 수 있다   → 복사한 변수를 수정해도 원본에 영향을 미치지 않음       2. 객체    객체는 메모리 크기가 정해져 있지도 않고, 프로퍼티를 추가, 삭제, 갱신 할 수 있기 때문에 원시값과는 다른 동작방식을 지닌다.   변경 가능한 값   객체 jongbin -&gt; 0x000000f2(주소)  |  0x00001222(값)                                    ⬋ 참조(값에 주소를 저장)                0x00001222(주소)  |  { age: 26 }(값)   원시값과는 다르게 객체는 메모리에 참조값을 저장한다. 객체는 변경이 가능한 값이므로 내부 프로퍼티를 수정할 수 있지만 내부 프로퍼티를 수정해도 참조값은 바뀌지않는다.   이런 방식은 계속해서 변하는 객체의 특성 때문에 고려된 메모리 사용의 효율성과 성능을 위한 방식이다. 하지만 단점으로 여러개의 식별자가 동일한 객체를 공유할 수 있다.       참조에 의한 전달   객체 jongbin -&gt; 0x000000f2(주소)  |  0x00001222(값)                   0x00001222(주소)  |  { age: 26 }(값)   // 동일한 객체                                 ⬇︎ copy  객체 jb   -&gt;    0x00002323(주소)  |  0x00001222(값)                                   0x00001222(주소)  |  { age: 26 }(값)   // 동일한 객체   복사를 하게 되면 메모리의 값(참조값)을 복사하기 때문에 동일한 객체를 참조하게 된다. 이는 여러개의 변수가 서로 영향을 미칠 수 있다.   원본의 참조값이 복사되어 전달되는 것을 참조에 의한 전달이라고 한다   참조 값만 복사하는 것을 얇은 복사라고 함   깊은 복사는 객체에 중첩되어 있는 객체까지도 전부 복사함         자바스크립트는 결국 메모리에 저장되어 있는 값을 전달한다 근데 그 값이 그냥 값인지 참조값인지에 따라 나뉘는 것 같다!         이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive11-copy/",
        "teaser": null
      },{
        "title": "[Deep Dive] 12장 함수(1)",
        "excerpt":"    함수는 일련의 과정을 문으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것                  매개변수       함수 내부로 입력을 전달받는 것                 인수       입력                 반환값       출력           // 함수 정의  function jongbin(x) {   return \"I'm jongbin \" + x; }  // 함수 호출 const jb = jongbin(\"hi\"); console.log(jb)   // I'm jongbin hi       1. 함수를 사용하는 이유       함수는 원할 때, 원하는 만큼 호출이 가능 → 재사용   코드의 중복을 억제하고 재사용성을 높이는 함수는 유지보수의 편의성을 높이고 실수를 줄여 코드의 신뢰성을 높임   함수는 객체 타입의 값   적절한 식별자는 내용을 파악하는데 용이 → 가독성       2. 함수 리터럴                   구성요소       설명                       function 키워드       함수를 선언                 함수 이름       * 함수이름은 식별자이므로 네이밍 규칙을 준수해야함  * 함수 리음은 함수 몸체 내에서만 참조할 수 있는 식별자  * 함수 이름은 생략가능(기명함수, 무명/익명함수)                 매개변수 목록       * 0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분  * 각 매개변수에는 함수를 호출할 때 지정한 인수가 순서대로 할당  * 매개변수는 함수 몸체 내에서 변수와 동일하게 취급(매개변수도 변수와 마찬가지로 네이밍 규칙 준수)                 함수 몸체       * 함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드블록  * 함수 몸체는 함수 호출에 의해 실행               3. 함수 정의    함수정의: 함수를 호출하기 이전에 인수를 전달받을 매개변수와 실행할 문들, 반환할 값을 지정하는 것   함수 정의 방식   // 함수 선언문 function jongbin(s) {   return \"I'm jongbin\" + s; }  // 함수 표현식 const jongbin = function (s) {   return \"I'm jongbin\" + s; };  // Function 생성자 함수 const jongbin = new Function('s', 'return \"I\\'m jongbin\" + s');  // 화살표 함수(ES6) const jongbin = () =&gt; return \"I'm jongbin\" + s;       함수 선언문          함수 선언문이 평가되면 식별자가 암묵적으로 생성되고 함수 객체가 할당    → 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가르키는 식별자로 호출        const jb = function jongbin(s) {    return \"I'm jongbin \" + s;  }   console.log(jb('hi'));    // I'm jongbin hi   console.log(jongbin('hi'))    // error  // 함수 이름은 함부 몸체 내부에서만 유효                       함수 선언문은 이름을 생략할 수 없음                함수 선언문은 표현식이 아닌 문        // 표현식이 아닌 문은 변수에 할당할 수 없다   const jb = function jongbin(s) {  return \"I'm jongbin\" + s;   }   // 이건 왜 할당되?   // 기명함수 리터럴은 함수 선언문, 함수 리터럴 표현식으로 해석이 되니까!          {}는 블록문, 객체 리터럴 둘 다 된다          {}가 피연산자(우변)로 사용되면 객체 리터럴로 해석   {}가 단독으로 사용되면 블록문으로 해석       함수 표현식      자바스크립트의 함수는 일급객체 → 변수에 할당할 수 있음   함수 표현식은 표현식인 문 (함수 선언문은 표현식이 아닌 문)   일급객체 : 값의 성질을 갖는 객체       함수 생성 시점과 함수 호이스팅   console.dir(func1);  // f func1(s) console.dir(func2);  // undrfined  console.log(func1(\"hi\"));   // 함수선언문 hi console.log(func2(\"hi\"));   // TypeError: func2 is not a function  function func1(s) {   return \"함수선언문 \" + s; }  const func2 = function (s) {   return \"함수표현식 \" + s; }      함수 선언문으로 정의한 함수는 호이스팅으로 인해 정의되기 전에 호출할 수 있다.(함수 호이스팅)   함수 표현식은 변수에 할당되기 때문에 할당되기 전에 undefined로 초기화된다(호이스팅x)(변수 호이스팅)   호이스팅: 코드의 선두로 끌어 올려진 것처럼 작동하는 자바스크립트 고유의 특징       Function 생성자 함수   const jongbin = new Function('s', 'return \"I\\'m jongbin \"+ s');   빌트인 함수인 Function 생성자 함수에 먀갸변수 목혹과 함수 몸체를 문자열로 전달하면서 new 연산자와 함께 호출하면 함수 객체를 생성해서 반환한다.   (Function 생성자 함수로 생성한 함수는 클로저를 생성하지 않음)   바람직하지 않은 방법이라고 한다       화살표 함수   const jongbin = (s) =&gt; {   return \"I'm jongbin \" + s; }      ES6에서 등장   화살표 함수는 기존의 함수보다 표현도 간략하고, 내부 동작 또한 간략화   기존 함수와 this 바인딩 방식이 다름   prototype 프로퍼티가 없음   argument 객체를 생성하지 않음         이웅모 선생님의 모던 자바스크립트 Deep Dive를 공부하기 위해 정리한 글입니다.  혹시나 보시다가 고칠 부분이나 마음에 안드시는 부분이 있다면 말씀해주시면 감사하겠습니다!   ","categories": ["Javascript"],
        "tags": ["JavaScript","DeepDive"],
        "url": "/javascript/deepDive12-1/",
        "teaser": null
      }]
