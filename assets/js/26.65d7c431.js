(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{393:function(a,t,e){"use strict";e.r(t);var s=e(46),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"react-heap-out-of-memory-이슈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-heap-out-of-memory-이슈"}},[a._v("#")]),a._v(" React heap out of memory 이슈")]),a._v(" "),e("p",[a._v("yarn build 명령 실행시 발생하는 메모리 불충분 이슈 입니다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory\n")])])]),e("p",[a._v("메모리 점유로 인해 JS엔진이 멈춰버린 것입니다.")]),a._v(" "),e("h3",{attrs:{id:"_1-해결-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-해결-방법"}},[a._v("#")]),a._v(" 1. 해결 방법")]),a._v(" "),e("h4",{attrs:{id:"_1-메모리-할당량-키우기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-메모리-할당량-키우기"}},[a._v("#")]),a._v(" 1) 메모리 할당량 키우기")]),a._v(" "),e("p",[a._v("기본적으로 환경 변수 노드의 최대 힙 크기 증가를 통해 해결 할 수 있습니다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("NODE_OPTIONS --max-old-space-size\n")])])]),e("p",[a._v("시스템에서 전역으로 환경 변수를 설정하면 Node가 환경에서 이 값을 읽을 수 있으므로 Node 명령을 실행할 때마다 이 값을 인수로 전달할 필요가 없게 됩니다.")]),a._v(" "),e("p",[a._v("환경 변수를 설정하는 과정은 OS에 따라 다릅니다. 다음은 이에 대한 두 개의 SO 게시물입니다.")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("Linux")]),a._v(" : "),e("a",{attrs:{href:"https://stackoverflow.com/questions/234742/setting-environment-variables-in-linux-using-bash",target:"_blank",rel:"noopener noreferrer"}},[a._v("Bash를 사용하여 Linux에서 환경 변수 설정"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("strong",[a._v("Windows")]),a._v(" : "),e("strong",[a._v("Windows")]),a._v(" "),e("a",{attrs:{href:"https://stackoverflow.com/questions/32463212/how-to-set-environment-variables-from-windows",target:"_blank",rel:"noopener noreferrer"}},[a._v("에서 환경 변수를 설정하는 방법"),e("OutboundLink")],1)])]),a._v(" "),e("h4",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),e("p",[a._v("하지만,  메모리의 크기를 빌드시 마다 바꾸는 것도 매력적으로 다가 올 수 있습니다.  그래서 어플리케이션 빌드 명령어에 옵션을 추가하는 방법도 존재합니다.")]),a._v(" "),e("p",[a._v("React 앱을 기준으로 설명드리겠습니다.")]),a._v(" "),e("p",[a._v("package.json 파일내 scripts 를 정의하는 부분에 다음과 같이 옵션을 추가 할 수 있습니다.")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"start"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cross-env NODE_OPTIONS=--max-old-space-size=4096 webpack"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("힙메모리 설정 명령어 앞에보이는 cross-env 명령어는 라이브러리 입니다.")]),a._v(" "),e("p",[a._v("크로스 플랫폼에서 환경변수를 설정할때 사용하는 라이브러리 인데요, 프로젝트에 Windows, Linux 등 다양한 OS를 사용하고 있다면 OS마다 설정하는 방법이 다르기 때문에 nodejs 에서는 이를 해결하기 위해 다음과 같은 라이브러리 사용을 추천합니다.")]),a._v(" "),e("p",[a._v("현재 Production pakage.json의 경우")]),a._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('  "scripts": {\n    "build": "set \\"GENERATE_SOURCEMAP=false\\" && cross-env NODE_OPTIONS=--max-old-space-size=4096 NODE_PATH=src node scripts/build.js",\n  },\n')])])]),e("p",[a._v("build 스크립트를 다음과 같이 설정 하였습니다.")]),a._v(" "),e("p",[a._v("여기에서 GENERATE_SOURCEMAP=false 는  create-react-app으로 React 프로젝트를 빌드하여 배포하는 경우, 기본적으로 webpack에 의해 번들링 된 파일과 해당 파일에 대응되는 sourcemap이 생성됩니다.")]),a._v(" "),e("p",[a._v("이러한 sourcemap은 디버깅을 위한 파일이기 때문에 production 과 같이 실제 배포시에는 제거되어야 하며, 빌드 시 메모리 부족 이슈를 해결하는데 도움을 줍니다.")]),a._v(" "),e("h4",{attrs:{id:"aws-code-build-에서-다음과-같은-오류가-발생한-경우에는-코드-빌더의-컴퓨팅을-향상-시켜야-위와-같은-옵션-설정이-가능합니다"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aws-code-build-에서-다음과-같은-오류가-발생한-경우에는-코드-빌더의-컴퓨팅을-향상-시켜야-위와-같은-옵션-설정이-가능합니다"}},[a._v("#")]),a._v(" AWS(Code Build) 에서 다음과 같은 오류가 발생한 경우에는 코드 빌더의 컴퓨팅을 향상 시켜야 위와 같은 옵션 설정이 가능합니다.")]),a._v(" "),e("p",[a._v("개발자 도구 -> CodeBuild -> 프로젝트 빌드 -> 편집 -> 환경 -> 추가 구성")]),a._v(" "),e("p",[e("img",{attrs:{src:"C:%5CUsers%5Cwoonkyoung_ham1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210803211425327.png",alt:"image-20210803211425327"}})]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("codebuild.amazonaws.com did not create the default version (v2) of the that is attached to the role. To continue, detach the policy from any other identities and then delete the policy and the role.\n")])])]),e("p",[a._v("위와 같은 오류가 발생한 경우에는 정책 버전을 재 지정 해주어야 합니다.")]),a._v(" "),e("p",[a._v("IAM -> 역할 -> CodeBuild에서 사용중인 역할을 찾아 선택 ->  권한에 연결되어있는 정책 중 오류를 유발하는 정책을 클릭  ->  정책 버전 -> Version 1 을 기본값으로 설정")]),a._v(" "),e("p",[a._v("이후 다시 빌드 컴퓨팅 환경을 업그레이드 합니다")]),a._v(" "),e("h4",{attrs:{id:"🔥컴퓨팅-환경-업그레이드-후-반드시-정책-버전을-다시-되돌려-주세요-🔥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥컴퓨팅-환경-업그레이드-후-반드시-정책-버전을-다시-되돌려-주세요-🔥"}},[a._v("#")]),a._v(" 🔥컴퓨팅 환경 업그레이드 후 반드시 정책 버전을 다시 되돌려 주세요 !🔥")]),a._v(" "),e("h4",{attrs:{id:"_2-앱의-메모리-누수-개선"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-앱의-메모리-누수-개선"}},[a._v("#")]),a._v(" 2) 앱의 메모리 누수 개선")]),a._v(" "),e("p",[a._v("아직은 이부분은 저 역시 확실히 알지 못합니다.")]),a._v(" "),e("p",[a._v("우선 메모리 누수를 확인하는 방법을 기술한 블로그의 내용을 빌리겠습니다.")]),a._v(" "),e("p",[a._v("https://ajh322.tistory.com/243")]),a._v(" "),e("p",[a._v("메모리 누수 개선의 경우는 시간을 두고 다시 고민하도록 하겠습니다.")])])}),[],!1,null,null,null);t.default=r.exports}}]);