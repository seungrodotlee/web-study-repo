(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{406:function(v,_,t){"use strict";t.r(_);var e=t(45),c=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"리눅스와-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#리눅스와-cli"}},[v._v("#")]),v._v(" 리눅스와 CLI")]),v._v(" "),t("h2",{attrs:{id:"cli란"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli란"}},[v._v("#")]),v._v(" CLI란?")]),v._v(" "),t("p",[v._v("리눅스에서는 주로 CLI 환경을 사용합니다. CLI는 GUI와 대비되는 개념입니다. 그래픽유저인터페이스라 불리는 GUI와는 다르게 오직 문자열만을 다루는 인터페이스입니다. CLI에서는 문자열 입출력만이 가능하여 GUI에 익숙한 사용자에게는 불편하게 다가올 수 있지만, 개발과 파일/디렉토리 관리, 기타 설정들을 마우스 조작 없이 키보드만으로 빠르게 수행할 수 있어 아주 강력한 인터페이스입니다. 리눅스에서는 이러한 CLI 환경을 터미널이라는 애플리케이션을 통해 사용할 수 있습니다. 터미널에 접속하면, 이제부터 여러분은 각종 "),t("strong",[v._v("명령어")]),v._v("들을 기반으로 컴퓨터를 조작할 수 있습니다.")]),v._v(" "),t("h2",{attrs:{id:"터미널과-셸-그리고-커널"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#터미널과-셸-그리고-커널"}},[v._v("#")]),v._v(" 터미널과 셸, 그리고 커널")]),v._v(" "),t("p",[v._v("방금 터미널을 통해 컴퓨터를 조작할 수 있다고 했는데, 이 과정을 좀 더 자세히 들여다보겠습니다."),t("br"),v._v(" "),t("br"),v._v("\n컴퓨터는 하드웨어와 소프트웨어로 구성되어 있습니다. 컴퓨터를 제어하기 위해서는 이 소프트웨어와 하드웨어가 상호작용하며 동작해야 하는데, 이를 위해 소프트웨어와 하드웨어를 잇는 인터페이스가 필요합니다. 즉, 메모리를 관리하고, 어느 프로세스가 CPU를 얼마나 사용할 지 결정하고, 시스템을 호출하는 등의 작업을 수행하는 등, 시스템 자원들을 관리하는 작업들을 수행할 어떤 무언가가 필요한데, 이 인터페이스가 바로 "),t("strong",[v._v("커널")]),v._v("입니다."),t("br"),v._v(" "),t("br"),v._v("\n그러나 커널이 수행하는 작업이 중요한 작업인 만큼, 사용자나 응용 프로그램이 커널에 직접 접근하는 것은 매우 위험한 일입니다. 이에 따라, 운영체제는 커널에 직접 접근하지 않고 이러한 기능을 사용할 수 있도록 "),t("strong",[v._v("시스템콜")]),v._v("이라는 인터페이스를 제공합니다. 그렇다면 우리는 이 시스템콜을 어떻게 호출할 수 있을까요?"),t("br"),v._v(" "),t("br"),v._v("\n앞서 이야기 한 것처럼, 사용자가 터미널에 명령어를 입력하면 그 명령어는 "),t("strong",[v._v("셸")]),v._v("이라고 부르는, 명령어 해석기에게 전달됩니다. 셸은 전달받은 명령어를 해석하여 시스템콜을 통해 필요한 작업들을 수행합니다.")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("인터페이스")]),v._v(" "),t("p",[v._v("운영체제나 프로그래밍과 같은 분야를 공부하다보면, 인터페이스라는 단어가 많이 등장합니다. 인터페이스란 개체와 개체 간 소통을 위한 매개체를 의미합니다."),t("br"),v._v(" "),t("br"),v._v("\n예를들어, TV 채널을 변경하기 위해 TV 내부에서 어떤 일이 일어나는 지 알 필요 없이, 우리가 할 일은 그저 리모컨을 누르는 것입니다. 이 때 리모컨이 TV와 우리 사이의 인터페이스 역할을 하는 것입니다."),t("br"),v._v(" "),t("br"),v._v("\n이러한 인터페이스는 리모컨과 같이 편리한 사용을 돕는 역할도 하지만, 올바르지 않은 접근을 방지하여 개체가 망가지지 않고 정상적으로 동작하게 하는데에 큰 역할을 합니다.")])]),v._v(" "),t("h2",{attrs:{id:"디렉토리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#디렉토리"}},[v._v("#")]),v._v(" 디렉토리")]),v._v(" "),t("p",[v._v("CLI는 마치 파일탐색기처럼 디렉토리의 개념이 있습니다. 터미널을 실행하면 리눅스에서는 일반적으로 "),t("code",[v._v("/root")]),v._v("(root 사용자의 경우) 혹은, "),t("code",[v._v("/home/<USERNAME>")]),v._v("(일반사용자의 경우) 디렉토리에서 시작됩니다. 이는 사용자디렉토리, 혹은 홈디렉토리라고 부르며, "),t("code",[v._v("~")]),v._v("로 표시됩니다.")]),v._v(" "),t("h2",{attrs:{id:"명령어-기초"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#명령어-기초"}},[v._v("#")]),v._v(" 명령어 기초")]),v._v(" "),t("p",[v._v("명령어는 "),t("code",[v._v("명령어 <옵션> <인자값>")]),v._v("의 형식으로 구성되어 있습니다. 같은 명령어라도, 옵션에 따라 조금씩 다른 결과를 출력합니다. 예를들어, "),t("code",[v._v("cat")]),v._v(" 명령어는 특정 파일의 내용을 화면에 출력해주는 명령어입니다. 그런데 만약 "),t("code",[v._v("cat -n filename")]),v._v("과 같이 사용하면, 파일의 내용을 라인넘버와 함께 출력해줍니다. 여기서 "),t("code",[v._v("-n")]),v._v(" 부분이 옵션입니다. 그리고 인자값은 "),t("code",[v._v("filename")]),v._v("이 됩니다.")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("옵션")]),v._v(" "),t("p",[v._v("옵션은 하이픈이 하나인 경우("),t("code",[v._v("-")]),v._v(")가 있고, 두개인 경우("),t("code",[v._v("--")]),v._v(")가 있습니다. 옵션이 한 문자인 경우는 하이픈을 하나만 쓰고, 한 단어인 경우에는 하이픈을 두개 씁니다. 하이픈은 하나인데 뒤에 여러 문자가 달려있는 경우에는, 각각의 옵션을 붙여 쓴 것과 같습니다. 예를들어, "),t("code",[v._v("-help")]),v._v(" 옵션은 "),t("code",[v._v("-h")]),v._v(", "),t("code",[v._v("-e")]),v._v(", "),t("code",[v._v("-l")]),v._v(", "),t("code",[v._v("-p")]),v._v(", 네개의 옵션을 붙여쓴 것이고, "),t("code",[v._v("--help")]),v._v(" 옵션은 'help'라는 하나의 옵션을 의미합니다."),t("br"),v._v(" "),t("br"),v._v("\n다만, 이러한 규칙이 모든 명령어들에 100% 적용되는 것은 아니니, 주의해야 합니다.")])]),v._v(" "),t("h2",{attrs:{id:"절대경로와-상대경로"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#절대경로와-상대경로"}},[v._v("#")]),v._v(" 절대경로와 상대경로")]),v._v(" "),t("p",[v._v("리눅스의 CLI에서는 절대경로와 상대경로를 사용할 수 있습니다. "),t("code",[v._v(".")]),v._v("으로 시작하거나. 디렉토리명으로 바로 시작(ex. "),t("code",[v._v("some/dir/")]),v._v(")하면 상대경로, "),t("code",[v._v("/")]),v._v("으로 시작하면 절대경로입니다.")]),v._v(" "),t("h2",{attrs:{id:"파일접근권한"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파일접근권한"}},[v._v("#")]),v._v(" 파일접근권한")]),v._v(" "),t("p",[v._v("리눅스의 모든 파일은 소유주와 소유그룹이 존재한다. 또한 이를 바탕으로 소유주, 소유그룹, 기타 사용자 별로 파일에 접근할 수 있는 권한을 각각 달리 설정할 수 있으며, 권한은 "),t("code",[v._v("r")]),v._v(", "),t("code",[v._v("w")]),v._v(", "),t("code",[v._v("x")]),v._v(", "),t("code",[v._v("-")]),v._v(" 네 종류가 있으며 이를 조합하여 사용할 수 있습니다.")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("권한")]),v._v(" "),t("th",[v._v("의미")]),v._v(" "),t("th",[v._v("숫자표현")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("r")])]),v._v(" "),t("td",[v._v("읽기")]),v._v(" "),t("td",[v._v("4")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("w")])]),v._v(" "),t("td",[v._v("쓰기")]),v._v(" "),t("td",[v._v("2")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("x")])]),v._v(" "),t("td",[v._v("실행")]),v._v(" "),t("td",[v._v("1")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-")])]),v._v(" "),t("td",[v._v("권한없음")]),v._v(" "),t("td",[v._v("0")])])])]),v._v(" "),t("p",[v._v("이러한 권한은 "),t("code",[v._v("ls -al")]),v._v(", "),t("code",[v._v("ll")]),v._v(" 등 명령어를 통해 파일목록을 출력하여 확인할 수 있는데, "),t("code",[v._v("rwxrw-r--")]),v._v(" 이런 형태를 하고 있습니다. 이는 세글자씩 세쌍으로 나누어 읽으면 되며, 첫번째 쌍부터 소유주, 소유그룹, 기타 사용자의 권한을 나타냅니다.")]),v._v(" "),t("ul",[t("li",[v._v("첫번째 쌍 ("),t("code",[v._v("rwx")]),v._v("): 소유주에게 읽기, 쓰기, 실행 권한이 모두 있다는 뜻입니다.")]),v._v(" "),t("li",[v._v("두번째 쌍 ("),t("code",[v._v("rw-")]),v._v("): 소유그룹에 읽기, 쓰기 권한이 있고, 실행 권한이 없다는 뜻입니다.")]),v._v(" "),t("li",[v._v("세번째 쌍 ("),t("code",[v._v("r--")]),v._v("): 기타 사용자들에게는 읽기 권한만 있다는 뜻입니다.")])]),v._v(" "),t("p",[v._v("이러한 파일권한은, 숫자로도 표현될 수 있는데, 각 권한이 가진 숫자를 조합하여 표현합니다. 예를들어 모든 권한이 있을 경우 "),t("code",[v._v("7")]),v._v(", 읽기와 쓰기 권한만 있는 경우 "),t("code",[v._v("6")]),v._v(", 읽기 권한만 있는 경우 "),t("code",[v._v("4")]),v._v("의 형태로 표현하며, "),t("code",[v._v("rwxrw-r--")]),v._v("와 "),t("code",[v._v("764")]),v._v("와 같은 권한 표현이라 할 수 있습니다."),t("br"),v._v(" "),t("br"),v._v("\n또한, 권한은 파일 뿐 아니라 디렉토리에도 적용되어 있는데, 디렉토리접근권한이 파일접근권한보다 우선시 됩니다. 즉, 어떤 파일에 접근권한은 있지만, 그 파일이 속한 디렉토리에 접근권한이 없다면 접근할 수 없습니다.")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("root")]),v._v(" "),t("p",[v._v("관리자 권한을 가진 사용자는 권한설정에 관계없이 모든 디렉토리 및 파일에 대해 모든 작업이 가능합니다. 또한, 일반 사용자에서 임시적으로 관리자 권한이 필요한 경우 명령어 앞에 "),t("code",[v._v("sudo")]),v._v("를 붙여 사용할 수 있습니다.")])])])}),[],!1,null,null,null);_.default=c.exports}}]);