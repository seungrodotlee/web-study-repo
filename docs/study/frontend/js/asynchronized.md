# 비동기처리

## 비동기처리 정확히 알기

흔히 자바스크립트를 배울 때, 비동기처리라고 하면, callback, promise, async/await 등을 사용하여 비동기 함수를 동기적으로 처리할 수 있도록 하는 것을 배웁니다.  
<br />
그래서 흔히들 '비동기처리 = 특정로직이 끝날 때까지 기다렸다가 다음 동작을 실행하는 것'이라고 오해할 수 있는데, 사실 비동기처리라는 말은 그와 반대로, **특정로직의 실행이 끝날 때까지 기다려주지 않고, 다음 동작을 실행하는 것**을 뜻합니다.  
<br />
자바스크립트는 코드를 비동기적으로 처리하며, 이러한 특성으로 인해 많은 문제점들이 생겨납니다.

::: tip 참고
`setTimeout`, `ajax`와 같이 함수종료까지 시간이 걸리지만 비동기적으로 처리되는 함수들을 비동기 함수라고 부릅니다.
:::

```js
console.log("start");
setTimeout(function () {
  console.log("working");
}, 1000);
console.log("end");
```

일반적인 동기적 처리의 관점에서 보았을 때, 위 코드 실행시 결과값은 `"start"` -> `"working"` -> `"end"`의 순으로 출력되어야 합니다. 그러나, 자바스크립트는 코드를 비동기적으로 처리하기 때문에 `"start"` -> `"end"` -> `"working"`의 순서로 결과값이 출력됩니다. 자바스크립트는 `setTimeout` 함수의 종료를 기다려주지 않기 때문입니다. 이러한 문제는 서버로부터 데이터를 받아오는 작업이 많은 페이지를 개발하는 경우 큰 문제점이 될 수 있습니다.

## 비동기처리 대응하기

### 콜백

위에서 본 예시에서, `setTimeout` 함수 안에 익명의 함수를 인자로 전달하여 사용하였습니다. 이러한 방식으로, 다른 함수에 인자로 전달되어 사용되는 함수를 콜백함수라고 합니다. 
<br />
비동기 함수, 이벤트 함수와 같이 특정 시점에 사용자가 지정한 함수를 실행해야 한다거나, 함수 내에서 발생하는 데이터들을 사용자가 인자로 받아서 함수를 작성해야 할 때에 주로 콜백함수가 사용됩니다.

```js
/* 1: 비동기함수에서의 callback 사용 */
setTimeout(function () {
  console.log("setTImeout 함수는 특정시간 이후에 사용자 정의함수를 실행해야 한다");
}, 1000);

/* 2: 함수 실행 과정에서 발생하는 데이터를 사용자가 사용할 수 있도록 콜백 사용 */
function someMethod(callback) {
  let someData = 100;

  //...
  callback(someData);

  //...
}

someMethod(function(data) {
  console.log(data + 10);
})
```

당연한 소리지만, 콜백함수를 사용하기 위해서는 먼저 위의 예제의 2번과 같이 메소드 정의 간 콜백함수를 매개변수로 받는 부분, 특정 시점에 콜백함수를 실행하는 부분이 정의되어 있어야 합니다. 또한, 여러 비동기함수가 순차적으로 실행되는 경우가 많이 있는데, 이럴 때 콜백함수 안에 콜백함수를 넣고... 또 그 안에 콜백함수를 넣는 것이 반복되다보면 콜백지옥에 빠질 수 있다.

```js
/* 보기만해도 어지러운 콜백지옥 */
getLoginStatus(function(result) {
  if(!result) {
    login(function(user) {
      checkUserType(user, function(type) {
        if(type) {
          getUserData(user, function() {
            updateLoginLog(user, function() {
              fetchSomeData(function(data) {
                /* do Something */
              });
            });
          });
        }
      });
    });
  }
});
```

### Promise
`Promise`는 콜백의 문제점을 해결하기 위해 등장한 패턴입니다.  
<br />
`Promise`는 **'언젠가 끝나는 작업의 결과값'**을 전달해줍니다. 개발자는 이 값을 전달받아 사용하기 위해 then 메소드를 통해 콜백을 등록하여, 작업이 끝났을 때 전달값을 가지고 수행할 작업을 정의할 수 있습니다. 중요한 점은, `then` 메소드의 리턴값 역시 `Promise`이기 때문에 `Promise`는 이러한 `then` 메소드를 체이닝하여 콜백보다 깔끔하게 순차작업들을 나열할 수 있습니다.

```js
/* Promise Example 1 */
let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("hi"), 1000);
  })
}

let b = (val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${val} i'm`), 1000);
  })
}

let c = (val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${val} seungro`), 1000);
  })
}

function buttonClickCallback() {
  a()
  .then((result) => {
    textarea.value += `result 1: ${result}\n`;
    return b(result);
  })
  .then((result) => {
    textarea.value += `result 2: ${result}\n`;
    return c(result);
  })
  .then((result) => {
    textarea.value += `result 3: ${result}\n`;
    return "finish!";
  })
  .then((result) => {
    textarea.value += result;
  });
}
```

<Example mode="promise" />

만약 `Promise` 함수를 실행하다가 오류가 발생하거나, `reject`가 호출되면 `catch` 메소드를 통해 오류를 처리할 수 있습니다.

```js
/* Promise Example 2 */
let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("3 + 10 = ?"), 1000);
  })
}

let b = (val) => {
  return new Promise((resolve, reject) => {
    if(val === 13) {
      resolve("correct!!!!");
    } else {
      reject("wrong!!!!");
    }
  })
}

a()
.then((result) => {
  textarea.value += result;
  return b(10);
})
.then((result) => {
  textarea.value += result;
})
.catch((err) => {
  textarea.value += err;
})
```

`textarea`에는 과연 어떤 값이 출력될까요?

### async/await

Promise를 사용하면 큰 문제는 없어보입니다. 그러나 여전히, 함수들을 사용하는 코드가 조금 길고, 완벽히 자연스러운 흐름이라고 보기는 어려운 것 같습니다.  
<br />
이러한 불편함을 또 해결하기 위해, async/await 패턴이 생겨났습니다. async/await 패턴을 사용하면, 위에서 배운 `Promise` 객체를 반환하는 함수를 보다 더 직관적이고 깔끔하게 사용할 수 있습니다.

```js
async function buttonClickCallback() {
  let result[0] = await a();
  textarea.value += `result 1: ${result[0]}\n`;
  let result[1] = await b(result[0]);
  textarea.value += `result 1: ${result[1]}\n`;
  let result[2] = await c(result[1]);
  textarea.value += `result 1: ${result[2]}\n`;
  textarea.value += "finish!";
}
```

위에서 확인한 Promise Example 1의 `buttonClickCallback`과, 위의 코드는 완전히 동일하게 동작합니다.  
<br />
또한, `try/catch` 구문을 사용하여 오류 처리도 할 수 있습니다.