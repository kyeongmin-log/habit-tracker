# Habit Tracker

- React로 Habit Tracker 만들기

# Habit Tracker?

- 자신의 habit을 추가하고 행동할 때마다 카운트를 센다. 결과적으로 자신의 habit이 무엇인지 하루에 몇 번을 하는지 알 수 있다.

# Result

> Currently Preparing...

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
