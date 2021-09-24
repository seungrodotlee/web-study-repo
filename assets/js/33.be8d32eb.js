(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{401:function(s,a,t){"use strict";t.r(a);var e=t(45),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"서버에-원격-저장소-만들기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#서버에-원격-저장소-만들기"}},[s._v("#")]),s._v(" 서버에 원격 저장소 만들기")]),s._v(" "),t("p",[s._v("GitHub, GitLab 등을 우리는 보통 원격저장소라고 부릅니다. 이러한 원격저장소는 우리가 작성한 코드의 버전을 온라인에서 관리할 수 있도록 해주고, 팀과 협업을 진행할 수 있도록 도와줍니다. 이러한 원격저장소에 접근할 때는 HTTPS나 SSH를 사용해서 원격 저장소에 접속하게 됩니다."),t("br"),s._v(" "),t("br"),s._v("\n이 문서에서는 SSH를 통해 접근할 수 있는 원격저장소를 만드는 법을 알아보겠습니다."),t("br"),s._v(" "),t("br")]),s._v(" "),t("p",[t("strong",[s._v("1. SSH 접속 설정하기")])]),s._v(" "),t("p",[s._v("sshd_config 파일 열기")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n")])])]),t("p",[s._v("58번 Line쯤에 PasswordAuthentication을 yes로 수정")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("PasswordAuthentication yes\n")])])]),t("p",[s._v("sshd 재시작")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd restart\n")])])]),t("br"),s._v(" "),t("p",[t("strong",[s._v("2. 원격저장소 생성")])]),s._v(" "),t("p",[t("strong",[s._v("홈 디렉토리")]),s._v("에서 저장소 디렉토리 생성")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" name.git\n")])])]),t("p",[s._v("저장소 Initialize")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" name.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init --bare --share\n")])])]),t("br"),s._v(" "),t("p",[t("strong",[s._v("3. 로컬에서 remote 저장소 추가")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":name.git\n")])])]),t("br"),s._v(" "),t("p",[t("strong",[s._v("4. 원격저장소에 접근(pull, push ...)시마다 비밀번호 입력")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("'s password: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("비밀번호 입력"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);