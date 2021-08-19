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
