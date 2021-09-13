# CSS에서의 모션 효과

## CSS에서 전환효과 부드럽게 처리하기

CSS에서 어떤 속성에 변화가 발생하면, 기본적으로는 그 변화내용이 즉시 반영됩니다. 그러나, 가끔은 상태변화가 즉시 일어나는 것이 아니라, 보다 더 부드럽고 자연스럽게 일어났으면 좋겠다 싶을 때가 있습니다.  
<br />
CSS에서는 이러한 부드러운 상태변화를 `transition`과 `animation` 속성을 통해 구현할 수 있습니다. `transition`과 `animation` 속성은 공통적으로 다음과 같은 하위 속성을 사용할 수 있습니다.
|하위속성|의미|
|-|-|
|*-duration|전환효과가 지속되는 시간을 정의합니다.|
|*-timing-function|3차 베지어 커브를 통해 그려지는 곡선 그래프에 따라 전환효과가 진행되도록 합니다. 베지어 커브는 N개의 점을 통해 그려지는 N-1차 그래프를 뜻하는데, CSS timing-function에서는 네개의 점을 사용하는 3차 베지어 커브를 사용합니다. 자세한 내용은 [여기](https://ko.javascript.info/bezier-curve)를 참고해주세요.|
|*-delay|전환효과가 트리거 된 시점으로부터 실제로 전환효과가 시작하는 시점까지 기다리는 시간을 정의합니다.|

`transition`과 `animation`은 꽤 비슷하지만, 각자만이 가지고 있는 하위 속성도 있고, 트리거 조건도 다릅니다.  
<br />
먼저, `transition` 속성에 대해 알아보겠습니다.  

## 트랜지션

### 트랜지션 사용하기

`transition` 속성은 특정 요소의 CSS 속성이 변화하였을 때 트리거 됩니다. `transition` 속성이 트리거 되면, `transition` 속성에 정의된 CSS 스타일을 정의한 시간에 걸쳐 부드럽게 전환합니다. 이러한 CSS 변화는 마우스 오버와 같은 이벤트를 감지하는 가상클래스요소에 의해 발생할 수도 있고, JS를 통한 클래스, style 조작에 의해 발생할 수도 있습니다.  
<br />
아무튼, 이러한 조작에 의해 어떠한 CSS 속성이 변경되었을 때 어떤 속성은 5초간 변화하고, 어떤 속성은 3초간, 또 어떤 속성은 즉시 변경내용이 반영되어야 할 수도 있습니다. 이를 위해, `transition` 속성은 하위 속성으로 `transition-property` 속성을 가지고 있어, 특정 속성들에 대해서만 `transition`을 적용하거나, 속성별로 지속시간, 베지어 커브, 딜레이를 달리 정의할 수도 있습니다.  

```css
.box {
  height: 200px;
  width: 200px;
  font-size: 16px;
  transition: height 1s linear, width 1s cubic-bezier(0.7, 0, 0.3, 1) 1s;
  /**
  * 이렇게 쓸 수도 있습니다:
  * transition-property: height, width;
  * transition-duration: 1s;
  * transition-timing-function: linear, cubic-bezier(0.7, 0, 0.3, 1);
  * transition-delay: 0s, 1s;
  */
}

.box:hover {
  height: 300px;
  width: 300px;
  font-size: 24px;
}
```

<Example mode="transition" />

트랜지션을 작성할 때는 `transition: <property 1> <duration 1> [<timing-function 1> <delay 1>, <property 2> <duration 2> <timing-function 2> <delay 2> ...]`의 형태로 작성하면 되며, 만약 모든 속성에 동일한 효과를 주고 싶다면 `transition: all 2s linear 0s;`의 형태로 작성할 수 있고, 기본값을 적용할 하위속성은 생략할 수도 있습니다.  

::: tip 형태 설명할 때... [ ]는 뭔가요..?
어떤 코드의 구문을 설명할 때, `[ ]`를 마주친 기억이 있을 겁니다. [(예시)](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)  

보통 코드를 작성할 때, 생략 가능한 부분인 경우 이렇게 `[ ]`로 감싸서 주로 표현합니다. `transition`을 사용할 때, 필수로 필요한 값은 `<property> <duration>` 한 쌍이기 때문에, 나머지 부분은 `[ ]`으로 감싸 표현한 것입니다.
:::

### 트랜지션 사용시 유의사항

가끔은 트랜지션이 적용되지 않는 경우도 있습니다.  
<br />
특히, `height`, `width` 등의 크기가 `auto`, `fit-content`와 같이, 개발자가 직접 지정한 값이 아니라, 브라우저가 알아서 계산하는 값인 경우 `transition`이 작동하지 않습니다.

## 애니메이션

### 애니메이션 사용하기

`animation` 속성은 요소가 로드 되었을 때 트리거 됩니다. 만약 웹 애플리케이션 동작 중 이미 로드 된 요소에 `animation` 속성이 정의된 어떤 `class`가 추가된다면, 그 순간에 `animation` 속성이 트리거 됩니다. `animation` 속성은 `@keyframes` 키워드를 통해 정의한 특정 애니메이션을 실행하며, 이 애니메이션을 어떤 방식으로 실행할 것인가에 대한 하위 속성들을 가지고 있습니다.

|하위속성|의미|
|-|-|
|animation-name|어떤 애니메이션을 실행할 지 정합니다|
|animation-direction|애니메이션 반복시, 진행할 방향을 지정합니다|
|animation-iteration-count|애니메이션을 반복할 횟수를 정합니다|
|animation-fill-mode|애니메이션 시작 전후에 표시할 상태를 지정합니다|
|animation-play-state|애니메이션을 시작/일시정지 할 수 있습니다|

```html
<div class="animation-ball"></div>
<div class="animation-ball animation-alternate"></div>
<div class="animation-ball animation-forward"></div>
<div class="animation-ball animation-infinite animation-alternate"></div>

<style>
  .animation-ball {
    animation-name: anim-ball;
    animation-iteration-count: 3;
    animation-duration: 2s;
  }

  .animation-alternate {
    animation-direction: alternate;
    /** 
    * normal(기본값): 매 사이클마다 애니메이션이 정방향으로 재생됩니다
    * reverse: 매 사이클마다 애니메이션이 역방향으로 재생되고,
    *          베지어커브도 반대로 적용됩니다 (ease-in -> ease-out)
    * alternate: 애니메이션이 매 사이클마다 방향을 뒤집으며 재생됩니다
    * alternate-reverse: 애니메이션이 매 사이클마다 방향을 뒤집는데, 
    *                    첫 사이클이 역방향부터 재생됩니다
    */
  }

  .animation-forward {
    animation-fill-mode: forwards;
    /**
    * none(기본값): 애니메이션이 실행되지 않을 때, 애니메이션 키프레임에서 적용한
    *               CSS 값에 관계없이 기본적으로 적용된 CSS 스타일이 표현됩니다
    * forwards: 애니메이션이 종료된 상태의 값을 표현합니다
    * backwards: 애니메이션이 시작되는 순간의 값을 표현합니다
    * both: 애니메이션 시작 전에는 backwards, 종료 후에는 forwards 값을 적용합니다
    */
  }

  .animation-infinite {
    animation-iteration-count: infinite;
    /** 
    * 숫자값 혹은 infinite(무한반복)
    */
  }

  @keyframes anim-ball {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(0.5);
    }
  }
</style>
```

<Example mode="animation" />

::: tip CSS에서 모션효과 처리시 성능
위의 코드에서 `transform`을 `width`와 `height`를 직접 변경하는 코드로 바꿔보면, 애니메이션이 뚝뚝 끊기는 느낌을 받을 수 있을겁니다. 왜 겉보기에는 똑같은 동작을 수행하는데, 이처럼 차이가 날까요?  
<br />
CSS에서 `transition`이나 `animation` 속성이 트리거 될 때에는, 어떤 속성값을 변경하느냐에 따라 성능차이가 발생합니다. 이는, 각 속성마다 값이 변할 때 브라우저에서 발생되는 동작의 차이에 의해 결정됩니다. (어떤 속성들은 Reflow, Repaint 과정을 모두 거치는 반면, 어떤 속성들은 두 과정 모두 거치지 않습니다)  
<br />
최신 브라우저에서는 `opacity`와 `transform` 속성이 변경될 때, reflow와 repaint가 발생하지 않기 때문에, 이 두 속성을 사용한 모션효과를 권장합니다.
:::
