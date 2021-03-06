# Habit Tracker

- React로 Habit Tracker 만들기

# Habit Tracker?

- 자신의 habit을 추가하고 행동할 때마다 카운트를 센다. 결과적으로 자신의 habit이 무엇인지 하루에 몇 번을 하는지 알 수 있다.

# Result

![result](./result-img.gif)

# Commit Description

> Create Component : habit.jsx

```
- 프로젝트에 필요없는 파일 제거.
+ fontawesome을 사용하기 위해 yarn을 통해 add 후 import.
+ habit tracker 목록에 들어갈 habit 코딩.
```

> Create function : handleIncrement, handleDecrement

```
+) habit.jsx에서 버튼 클릭 시 count가 변경될 수 있도록 state의 count를 추가
+) +,-버튼을 누르면 count가 변경되는 function 구현 후 onClick event 설정
```

> Create Component : habits.jsx

```
+ 만들어 둔 habit.jsx를 이용하여 여러 개의 habit 생성.
+ props를 이용하여 다른 component로 값 전달
```

> Create function : handle Increment, Decrement, Delete

```
+ 여러 개의 habit의 +, -, 휴지통 버튼을 클릭하면 동작하도록 구현
```

> Fix Function : handle Increment, Decrement, Delete and Create Navbar

```
+ state 오브젝트 자체를 직접 수정하는 것이 아닌 copy하여 수정하도록 변경
    > state 오브젝트를 자체적으로 업데이트/변경하면 리액트의 렌더가 발생하지 않음

*** (Fix를 먼저 커밋하고 navbar에 들어가야하는데 바로 들어가버렸다. 다음부터는 조심하자.) ***

+ Navbar.jsx 파일 생성
+ Navbar UI 구현
```

> Create habitAdd.jsx : HTML/CSS

```
+ habit을 추가할 habitAdd.jsx 추가
+ HTML, CSS 작성
```

> Create habitReset.jsx : HTML/CSS

```
+ habit count를 초기화 할 Reset All 버튼 추가
+ HTML/CSS 작성
```

> Create/Update Function

```
Create
+ habit을 추가할 수 있는 handleAdd function 구현
+ habit들의 count를 초기화 할 수 있는 handleReset funㅊtion 구현

Update
+ 각 habit count의 총 개수를 세는 total을 만들기 위해 state를 app.jsx로 옮김
    > state 값들은 props를 통해 사용할 수 있도록 태그 안에 값을 담아둠
```

> Fix : Navbar.jsx

```
+ app.jsx에 state 중 total 삭제
    > 기능을 잘못 파악하였다. 습관 전체의 합이 아닌 현재 실행 중인 습관의 합을 계산하여 넘겨야한다.
+ Navbar의 시맨틱태그와 className을 좀 더 의미있게 수정
```

> Fix : habitAdd.jsx > habitAddForm.jsx

```
+ 기존 habitAdd.jsx => habitAddForm.jsx로 변경
    > button이 아닌 form을 이용하여 데이터를 추가하도록 변경
+ app.jsx에 있던 habitAdd를 habit.jsx에 habitAddForm으로 변경
    > form을 사용하면서 데이터를 habits에서 전달하도록 수정
+ 기존 habitAdd에 있던 className을 좀 더 의미있게 수정
    > 그에 따른 css 변경
- form을 이용하기에 habitAdd에서 Enter 이벤트를 수행하던 handleEnter function 제거

* 기존에는 document를 이용하여 input의 값을 가져왔는데 react에서는 ref를 이용하여 input의 값을 가져오는 것이 바람직하다.
```

> Delete : handleReset.jsx

```
- reset의 크기가 작고 딱 한반만 쓰이기에 따로 컴포넌트를 만들지 않고 habits 컴포넌트에 포함시켰다.
```
