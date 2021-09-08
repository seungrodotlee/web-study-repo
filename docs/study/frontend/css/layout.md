# 레이아웃 잡기

## Flex

Flex는 컨테이너와 아이템 개념을 사용하여, 요소의 크기가 불분명하거나 동적인 경우, 요소를 수평으로 정렬해야 하는 경우에도 빠르게 요소를 정렬할 수 있는 방법을 제공합니다.

### Flex Container 속성

| 속성                                        | 의미                                             |
| ------------------------------------------- | ------------------------------------------------ |
| `display: flex`<br />`display: inline-flex` | Flex Container를 정의                            |
| `flex-flow`                                 | flex-direction과 flex-wrap의 단축속성            |
| `flex-direction`                            | flex items의 주 축(방향)을 설정, row 혹은 column |
| `flex-wrap`                                 | flex items의 줄 바꿈 설정                        |
| `justify-content`                           | 주 축의 정렬 방법을 설정                         |
| `align-content`                             | 교차 축의 정렬 방법을 설정 (2줄 이상)            |
| `align-items`                               | 교차 축의 정렬 방법을 설정 (1줄)                 |

#### display

`display: flex`와 `display: inline-flex`는 `display: block`과 `display: inline-block`의 관계와 같다고 생각하면 됩니다.  
Flex 컨테이너를 Block과 같이 수직으로 쌓이게 하느냐,(`display: flex`) 수평으로 쌓이게 하느냐(`display: inline-flex`)의 차이입니다.

::: tip inline-flex에 대하여
그런데 `inline-flex`를 굳이 써야 할 필요가 있을까 싶습니다. 사실 저는 `inline-flex`를 한번도 써본적이 없습니다.
:::

#### flex-direction

Item들이 정렬될 주 축을 설정합니다. (기본값은 row)
|값|의미|
|-|-|
|`row`|요소를 수평으로 정렬합니다.|
|`column`|요소를 수직으로 정렬합니다.|
|`row-reverse`|요소를 수평으로 정렬하는데, 뒤에서부터 앞으로 정렬합니다.|
|`column-reverse`|요소를 수직으로 정렬하는데, 아래서부터 위로 정렬합니다.|

::: tip 주 축과 교차 축?
주 축은 요소가 정렬되는 방향이고, 교차 축은 주 축과 수직관계에 있는 축을 말합니다. 즉, 주 축이 가로방향이라면 교차 축은 세로 방향입니다.  
주 축은 justify-content, 교차 축은 align-content, align-items와 관련이 있습니다.
:::

#### flex-wrap

Item들이 컨테이너의 주 축 길이를 벗어났을 때, 줄 바꿈 여부와 방향을 설정합니다. (기본값은 nowrap)

| 값             | 의미                                                          |
| -------------- | ------------------------------------------------------------- |
| `nowrap`       | 모든 Item들을 한 줄에 표시                                    |
| `wrap`         | Item이 넘치면 여러 줄에 표시                                  |
| `wrap-reverse` | Item들을 여러 줄에 표시하는데, 새 줄이 아래가 아닌, 위에 생김 |

#### justify-content

주 축의 정렬방법을 설정합니다. (기본값은 flex-start)

| 값              | 의미                                                                                         |
| --------------- | -------------------------------------------------------------------------------------------- |
| `flex-start`    | Item들을 주 축의 시작점으로 정렬                                                             |
| `flex-end`      | Item들을 주 축의 끝점으로 정렬                                                               |
| `center`        | Item들을 가운데에 정렬                                                                       |
| `space-between` | 주 축 시작점과 끝점에 각각 모서리 요소가 붙고,<br />요소들이 균등한 간격으로 정렬됨          |
| `space-around`  | Item들을 균등한 간격으로 정렬<br />(주 축 시작점, 끝점과 모서리 요소들 사이에도 간격이 생김) |

#### align-content

여러줄의 Item들이 교차 축에 정렬되는 방법을 설정합니다. (기본값은 stretch)  
::: tip align-content는 Item이 여러줄일 때만 사용할 수 있습니다!!
Item들이 한 줄인 경우에는 align-items 속성을 사용해야 합니다.
:::

| 값              | 의미                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------- |
| `flex-stretch`  | 컨테이너를 꽉 채우기 위해 Item들을 늘림                                                        |
| `flex-start`    | Item들을 교차 축의 시작점으로 정렬                                                             |
| `flex-end`      | Item들을 교차 축의 끝점으로 정렬                                                               |
| `center`        | Item들을 가운데에 정렬                                                                         |
| `space-between` | 교차 축 시작점과 끝점에 각각 모서리 요소가 붙고,<br />요소들이 균등한 간격으로 정렬됨          |
| `space-around`  | Item들을 균등한 간격으로 정렬<br />(교차 축 시작점, 끝점과 모서리 요소들 사이에도 간격이 생김) |

#### align-items

Item들이 교차 축에 정렬되는 방법을 설정합니다. (기본값은 stretch)  
단, Item들이 여러 줄인 경우, align-content가 우선 적용됩니다. Item들이 여러 줄일 때 align-items를 적용하기 위해서는 align-content의 값이 strectch이어야 합니다.
::: tip Item이 여러줄일 때 align-items과 align-content는 무슨 차이가 있나요?
align-items에서는 각 줄이 `컨테이너 교차 축 길이 / Items 줄 수`의 너비를 유지하고, 아이템들이 자신이 속한 줄 안에서 정렬됩니다.  
반면, align-content에서는 여러줄의 Item들을 하나의 뭉치로 컨테이너에 정렬합니다.

![diff btw align](/images/align.png)
:::

### Flex Items 속성

| 속성          | 의미                                                |
| ------------- | --------------------------------------------------- |
| `order`       | Item의 순서를 결정                                  |
| `flex`        | `flex-grow`, `flex-shrink`, `flex-basis`의 단축속성 |
| `flex-basis`  | Item의 너비를 결정                                  |
| `flex-grow`   | Item의 너비 증가 비율을 결정                        |
| `flex-shrink` | Item의 감소 비율을 결정                             |
| `align-self`  | 교차 축에서 Item의 정렬 방법을 결정                 |

#### order

order 속성을 사용하면 HTML 구조와 상관없이, order가 낮은 요소부터 높은 요소로 정렬됩니다. (기본값은 0)

#### flex-basis

요소의 너비를 결정합니다. flex-basis가 따로 적용되지 않은 요소의 경우, 해당 요소가 가지는 기본 너비가 flex-basis 값이 됩니다.

#### flex-grow

flex-grow가 적용된 요소들은 컨테이너가 요소들을 배치하고 남은 컨테이너 공간을 나눠 가질 수 있습니다.

<Example mode="grow" />

#### flex-shrink

flex-shrink가 적용된 요소들은 컨테이너가 줄어들어 Item들이 넘치려 할 때, 넘치지 않도록 크기가 줄어드는 비율을 설정합니다.
단, 여기서 **비율은 요소들이 기본적으로 가지고 있는 너비에 영향을 받습니다.**

<Example mode="shrink" />
