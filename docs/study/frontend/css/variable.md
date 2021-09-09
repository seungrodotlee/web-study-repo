# CSS 변수

## CSS 변수는 어떻게, 왜 쓸까?
개발을 하다보면, 특정 값을 여러 선택자에서 반복적으로 사용해야 할 때가 있습니다. 예를들어, 브랜드 컬러를 사용한다고 생각해본다면,

```css
.text-primary {
  color: #F5DF4D;
}

.bg-primary {
  background-color: #F5DF4D;
}

.border-primary {
  border-color: #F5DF4D;
}

.some-element::after {
  // some CSS
  color: #F5DF4D;
}

// 그리고 #F5DF4D 색상을 사용하는 수많은 클래스들...
```

위와 같이 CSS를 작성해야 할 것입니다. 그런데 만약 중간에 브랜드 컬러가 바뀌었다면, 수많은 `#F5DF4D`를 다른 값으로 바꿔주어야 하는데, 꽤 번거롭고 귀찮은 일입니다. 특히, CSS 블록들이 여기저기 널부러져 있으면 정말 어지러운 상황이 되겠죠.  
<br />
CSS 변수라 불리는 사용자 지정 CSS 속성은 이런 상황에 유용하게 사용될 수 있습니다.

```css
:root {
  --primary-color: #F5DF4D;
}

.text-primary {
  color: var(--primary-color);
}

.bg-primary {
  background-color: var(--primary-color);
}

.border-primary {
  border-color: var(--primary-color);
}

.some-element::after {
  // some CSS
  color: var(--primary-color);
}

// 그리고 --primary-color 색상을 사용하는 수많은 클래스들...
```

## CSS 변수의 상속

앞서 살펴본 코드에서 `:root` 선택자는 최상위 요소, 즉 `html` 요소를 뜻합니다. CSS 변수는 하위 요소로 상속이 되기 때문에 최상위 요소에 변수를 정의해두면 하위 요소에서도 쓸 수 있습니다. 이를 활용하면, HTML 구조에 따라 요소들마다 똑같은 변수로 서로 다른 값을 가지게 할 수도 있습니다.

```html
<div class="big-container">
  <p>hello</p>  
</div>
<div class="small-container">
  <p>world</p>
</div>
<p>i'm seungro</p>

<style>
  .big-container {
    --default-font-size: 24px;
  }

  .small-container {
    --default-font-size: 12px;
  }

  p {
    font-size: var(--default-font-size);
  }
</style>
```

<Example mode="css-var" />

hello는 `.big-container`에서 정의한 변수에 영향을 받아, 폰트 크기가 `24px`로 출력되고, world는 `.small-container`에서 정의한 변수에 영향을 받아, 폰트 크기가 `12px`로 출력되었습니다. 그리고 i'm seungro는 영향을 받는 변수가 없기 때문에, `var(--default-font-size)`가 무시됩니다.