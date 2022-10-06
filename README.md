# 1. Summary (개요)
+ front-end 웹 개발자로 전향하기 위해서 HTML과 CSS에 대한 기초를 다지기 위해 카카오톡 클론코딩이라는 강의를 수강하게 되었습니다.
</br>
</br>



# 2. Goal (목표)
* 로그인화면, 친구화면, 대화목록화면, 채팅화면 세팅화면, 기타화면 을 가진 애플리케이션을 HTML과 CSS만으로 작성하려고 합니다. 

</br>
</br>


# 3. Requirements (요구사항)
1. 핵심적인 기능
    * 채팅화면에서 클릭하면 대화내용화면으로 넘어갈 수 있게 만든다.
    * 모바일화면보다 큰 경우 화면이 크다는 창을 띄운다.
    * 어느화면이던 존재하는 "톱니바퀴" 아이콘을 클릭하면 세팅화면으로 넘어 갈 수 있게 만든다.
    * 친구화면 접근시에는 Spiash화면을 잠깐 보여준다.
2. 부가적인 기능 
    + 시간을 text로만 보여주지 않고, Javascript에서 제공하는 내장함수를 사용하여 실질적인 현재시간을 표시한다.
    + 실시간기능을 추가하여 진짜로 대화하는것처럼 보여지게 만든다.
    + 기타화면에 ToDoList 같은 기타 애플리케이션을 추가한다.
</br>
</br>


# 4. Develop (개발)
### 1). 적정기술
* 어떤화면에서 다른 화면으로 넘어간다.
    * a태그의 href 옵션을 사용하여 다른 HTML을 불러올 수 있도록 만든다.
* Spiash화면을 잠깐 보여준다
    * CSS의 @keyframes 기능을 활용하여 작성한다.
* 모바일화면보다 큰 경우 화면이 크다는 창을 띄운다.
    * CSS의 @media 기능을 활용하여 작성한다.

</br>

### 2). 대체기술
* React
    * https://hymndev.tistory.com/72
    * https://velog.io/@gene028/React-React%EB%A1%9C-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

</br>

### 3). 과정
* Step1: Login화면
```HTML
<body>
    <div class="status-bar">
        <div class="status-bar__column">
            <span>No Service</span>
            <i class="fas fa-wifi"></i>
           
        </div>
        <div class="status-bar__column">
            <span>17:00</span>
        </div>

        <div class="status-bar__column">
            <span>110%</span>
            <i class="fas fa-battery-full fa-lg"></i>
            <i class="fas fa-bolt"></i>
        </div>
    </div>

    <header class="welcome-header">
        <h1 class="welcome-header__title">Welcome to Kokoa Talk</h1>
        <p class="welcome-header__text">if you have a kokoa Account, log in with your email or phone number</p>
    </header>

    <form action="friends.html"get" id="login-form">
        <input name="username" type="text" placeholder="Email or phone number">
        <input name="password" type="password" placeholder="Password">
        <input type="submit" value="Log In">
        <a href="#">Find Kokoa Account or Password</a>
    </form>
    <script src="https://kit.fontawesome.com/6478f529f2.js" crossorigin="anonymous"></script>
</body>
```

```CSS
.status-bar {
  top: 0px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 3px;
  background-color: white;
}

.status-bar__column {
  width: 33%;
}

.status-bar__column:first-child span {
  margin-right: 5px; /* noservice와 wife아이콘 사이 간격*/
}

.status-bar__column:nth-child(2) {
  display: flex;
  justify-content: center;
}

.status-bar__column:last-child {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.status-bar__column .fa-battery-full {
  margin: 0px 5px;
}

.welcome-header {
  margin: 90px 0px; /*status-bar와 위아래 간격*/
  text-align: center;
  display: flex;
  flex-direction: column; /*tetx와 title을 수직*/
  align-items: center; /*tetx와 title을 수직으로 정렬*/
  font-weight: 600;
}

.welcome-header__title {
  margin-bottom: 40px; /* title과 text 위아래 간격*/
  font-size: 25px;
}

.welcome-header__text {
  width: 60%;
  opacity: 0.7;
}

#login-form {
  display: flex;
  flex-direction: column; /* 수직으로 정렬*/
  margin: 0px 30px;
}

#login-form input {
  border: none;
  padding: 15px 0px;
  font-size: 18px;
  margin-bottom: 25px;
}

#login-form input:not([type="submit"]) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3); /* solid: 일반적인 라인 테두리 */
  transition: border-color 0.3s ease-in-out; /* border-color를 0.3초 천천히시작되었다가 천천히 끝난다 */
}

#login-form input::placeholder {
  color: rgba(0, 0, 0, 0.4);
}

#login-form input:focus {
  border-color: var(--yellow);
}

#login-form input[type="submit"] {
  background-color: var(--yellow);
  cursor: pointer;
  padding: 20px 0px; /* 좌우를 px줘도 의미가 없다=>*/
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
}

#login-form input[type="submit"]:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#login-form a {
  text-align: center;
  text-decoration: none;
  color: inherit;
  font-size: 13px;
}
```


</br>


* Step2- 친구목록화면
```HTML
<body>
    <header class="screen-header">
        <h1 class="screen-header__title">Friends</h1>
        <div class="screen-header__icons">
            <span><i class="fas fa-search fa-lg"></i></span>
            <span><i class="fas fa-music fa-lg"></i></span>
            <span><i class="fas fa-cog fa-lg"></i></span>
        </div>
    </header>

    <a id="friends-display-link"><i class="fas fa-info-circle"></i>Friends Names Display <i class="fas fa-chevron-right fa-xs"></i></a>


    <main class="main-screen">
        <div class="user-component">
            <div class="user-component__column">
                <img src="jeawon.jpg" class="user-componet__avatar user-componet__avatar--xl">
                <div class="user-component__text">
                    <h4 class="user-component__title">jeawon</h4>
                    <h6 class="user-component__subtitle">후후후후후히히히히</h6> 
                </div>
            </div>
            <div class="user-component__column"></div>
        </div>
 
        <div class="friends-screen__channel">
            <div class="friends-screen__channel-header">
                <span>Channel</span><i class="fas fa-chevron-up fa-xs"></i>
            </div>

            <div class="user-component">
                <div class="user-component__column">
                    <img src="열렙전사.jpg" class="user-componet__avatar user-componet__avatar--sm">
                    <div class="user-component__text">
                        <h4 class="user-component__title user-component__title--not-bold">열렙전사 게임</h4>
                    </div>
                </div>
                <div class="user-component__column">
                    <div>
                        <span>2</span> <i class="fas fa-chevron-right fa-xs"></i>
                    </div>                  
                </div>
            </div>
        </div>
    </main>

    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__btn"><a class="nav__link" href="friends.html"><i class="fas fa-user fa-2x"></i></a></li>
            <li class="nav__btn"><a class="nav__link" href="chats.html"><span class="nav__notification badge">1</span><i class="far fa-comment fa-2x"></i></a></li>
            <li class="nav__btn"><a class="nav__link" href="find.html"><i class="fas fa-search fa-2x"></i></a></li>
            <li class="nav__btn"><a class="nav__link" href="more.html"><i class="fas fa-ellipsis-h fa-2x"></i></a></li>
        </ul>
    </nav>
    <script src="https://kit.fontawesome.com/6478f529f2.js" crossorigin="anonymous"></script>
</body>
```

```CSS
.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: hsl(240, 9%, 98%);
  padding: 20px 50px;
  box-sizing: border-box;
  border-top: 1px solid rgba(121, 121, 121, 0.3);
  border-radius: 30px;
}

.nav__list {
  display: flex;
  justify-content: space-between;
}

.nav__link {
  position: relative;
  color: #2e363e;
}

@keyframes notificationAnimation {
  0% {
    transform: none;
  }
  50% {
    transform: translateY(-5px) rotateY(360deg);
  }
  100% {
    transform: none;
  }
}

.nav__notification {
  /*①을 message icon 우측 상단위에 배치*/
  position: absolute;
  left: 15px;
  bottom: 15px;
  animation: notificationAnimation 2s ease-in-out infinite;
}

@keyframes appearBtnAnimation {
  from {
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
}

.nav__btn {
  transform: translateY(80px);
  opacity: 0;
  animation: appearBtnAnimation 0.3s ease-in-out forwards;
}

.nav__btn:nth-child(2) {
  animation-delay: 0.2s;
}

.nav__btn:nth-child(3) {
  animation-delay: 0.5s;
}

.nav__btn:last-child {
  animation-delay: 0.8s;
}
#friends-display-link {
  text-align: center;
  display: block; /* a태그는 lnline이기 때문에 block을 줘서 한줄로 만들기*/
  background-color: #fafafa;
  padding: 15px 10px;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: -15px; /*이건 왜 했는지 잘 모르겠음...*/
}
#friends-display-link i {
  color: rgba(0, 0, 0, 0.3);
}
.friends-screen__channel {
  margin-top: 25px;
  border-top: var(--main-border);
  padding-top: 15px;
}
.friends-screen__channel-header {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.5);
}
.user-component {
  justify-content: space-between; /*수평으로 동일 간격*/
}

.user-component,
.user-component__column:first-child {
  display: flex;
  align-items: center;
}

.user-componet__avatar {
  width: 70px;
  height: 70px;
  border-radius: 30px;
  margin-right: 20px;
}

.user-component__title {
  font-weight: 600;
  font-size: 22px;
}

.user-component__subtitle {
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.5);
}

.user-componet__avatar--xl {
  width: 80px;
  height: 80px;
}

.user-componet__avatar--sm {
  width: 60px;
  height: 60px;
  border-radius: 25px;
}

.user-component__title--not-bold {
  font-weight: 600;
}

.user-component__column:last-child {
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-component__time {
  margin-bottom: 15px;
  display: block;
}
```

</br>


* Step3- 채팅목록화면 & 채팅화면
```html
<body>
    <main class="main-screen">
        <a href="chat.html">
            <div class="user-component">
                <div class="user-component__column">
                    <img src="jeawon.jpg" class="user-componet__avatar">
                    <div class="user-component__text">
                        <h4 class="user-component__title">jeawon</h4>
                        <h6 class="user-component__subtitle">Pleace check My kokoa Accoount info</h6> 
                    </div>
                </div>
                <div class="user-component__column">
                    <span class="user-component__time">21:22</span>
                    <div class="badge">1</div>

                </div>
            </div>
        </a>
    </main>
    <script src="https://kit.fontawesome.com/6478f529f2.js" crossorigin="anonymous"></script>
</body>
```

```javascript
<body id="chat-screen">
   <header class="alt-header">
       <div class="alt-header__column">
           <a href="chats.html">
               <i class="fas fa-angle-left fa-3x"></i>
           </a> 
       </div>
       <div class="alt-header__column">
           <h1 class="alt-header__title">JW</h1>
       </div>
       <div class="alt-header__column">
           <span><i class="fas fa-search fa-lg"></i></span>
           <span><i class="fas fa-bars fa-lg"></i></span>
       </div>
   </header>

    <main class="main-screen main-chat">
        <div class="chat__timestamp">
            헥사년 998년
        </div>

        <div class="message-row">
            <img src="라이언.jpg" >
            <div class="message-row__content">
                <span class="message__author">Nicolas</span>
                <div class="message__info">
                    <span class="message__bubble"> 레츠고바레~</span>
                    <span class="message__time"> 21:21</span>
                </div>
            </div>
        </div>

        
        <div class="message-row message-row--own">
            <div class="message-row__content">
                <div class="message__info">
                    <span class="message__bubble"> 오케바레~</span>
                    <span class="message__time"> 21:21</span>
                </div>
            </div>
        </div>

    </main>

    <form class="reply">
        <div class="reply__column">
            <i class="far fa-plus-square fa-lg"></i>
        </div>
        <div class="reply__column">
            <input type="text" placeholder="Write a message...">
            <i class="fas fa-smile-wink fa-lg"></i>
            <button><i class="fas fa-arrow-up fa-lg "></i></button>
        </div>
    </form>
    <script src="https://kit.fontawesome.com/6478f529f2.js" crossorigin="anonymous"></script>
</body>
```

```javascript
#chat-screen {
  height: 11000vh;
  background-color: #abc1d1;
}

#chat-screen .alt-header,
#chat-screen .status-bar {
  top: 0px;
  position: fixed;
  width: 100%;
  background-color: #abc1d1;
  box-sizing: border-box;
}

#chat-screen .status-bar {
  z-index: 2;
}

#chat-screen .alt-header {
  top: 10px;
  z-index: 1; /*status-bar가 header보다 위에 오게 된다.*/
}


@keyframes fadeIn {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
}

.main-chat {
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.3s linear;
}

.chat__timestamp {
  color: white;
  background-color: #92a4b2;
  padding: 15px;
  font-size: 14px;
  border-radius: 25px;
  margin-bottom: 25px;
}

.message-row {
  width: 100%;
  display: flex;
  margin-bottom: 25px;
}

.message-row img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.message__author {
  opacity: 0.8;
  font-size: 13px;
  display: block;
  margin-bottom: 5px;
}
.message__bubble {
  background-color: white;
  padding: 13px;
  font-size: 18px;
  border-radius: 15px;
  border-top-left-radius: 0px;
}

.message__info {
  display: flex;
  align-items: flex-end;
}

.message__time {
  margin-left: 5px;
  opacity: 0.8;
  font-size: 13px;
}

.message-row--own {
  justify-content: flex-end;
}

.message-row--own .message__bubble {
  background-color: var(--yellow);
  border-top-right-radius: 0px;
  border-top-left-radius: 15px;
  margin-right: 0px;
  margin-left: 5px;
}

.message-row--own .message__info {
  flex-direction: row-reverse;
}
.reply {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 5px 25px;
  box-sizing: border-box;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.reply .reply__column:first-child {
  width: 10%;
}

.reply .reply__column:last-child {
  width: 90%;
  position: relative;
}

.reply i {
  opacity: 0.8;
}

.reply input {
  padding: 15px;
  width: 100%;
  border: var(--main-border);
  border-radius: 20px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}

.reply__column:last-child > i,
.reply__column:last-child button {
  position: absolute;
  right: 3px;
  top: 7px;
}

.reply__column:last-child > i {
  right: 45px;
  top: 15px;
}

.reply__column button {
  background-color: var(--yellow);
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.reply__column button i {
  opacity: 1;
}

.reply__column button:focus,
.reply__column button:active {
  outline: none;
}

.reply .reply__column:first-child,
.reply .fa-smile-wink,
.reply button {
  transition: opacity 0.3s ease-in-out;
}

.reply:focus-within .reply__column:first-child,
.reply:focus-within .fa-smile-wink,
.reply:focus-within button {
  opacity: 0;
}

.reply input:focus {
  width: 95vw;
  transform: translateX(-13%) translateY(-80px);
}

.reply:focus-within {
  transform: translateY(80px);
}
```

* Step4- Find화면
```html
<body>
    <main class="main-screen">
        <div class="icon-row">
            <div class="icon-row__icon"><i class="fas fa-qrcode"></i><span>QR Code</span></div>
            <div class="icon-row__icon"><i class="fas fa-address-book "></i><span>Add by Contacts</span></div>
            <div class="icon-row__icon"></i><i class="fas fa-fingerprint"></i><span>Add by ID</span></div>
            <div class="icon-row__icon"><i class="fas fa-envelope"></i><span>Invite</span></div>
        </div>
        <div class="recommended-friends">
            <h6 class="recommended-friends__title">Recommended Friends</h6>
            <span>You haver no recommended friends.</span>
        </div>
        <div class="open-chat">
            <div class="open-chat__header">
                <h4>Open Chat</h4>
                <span> Go to Openchat Home <i class="fas fa-chevron-right fa-xs"></i> </span>
            </div>
            <div class="open-post">
                <div class="open-post__column">
                    <h5 class="open-post__title">#웹툰</h5>
                    <h6 class="open-post__hashtags">#그라버트#열렙전사</h6>
                    <div class="open-post__members">
                        <img src="열렙전사_게임.png" >
                        <span class="open-post__member-count">802 members</span>
                        <div class="divider"></div>
                        <span class="open-post__member-status">Avtive</span>
                    </div>
                </div>
                <div class="open-post__column">
                    <div class="open-post__photo">
                        <img src="그라버트.PNG" >
                        <div class="open-post__heart-count"> <i class="fas fa-heart fa-xs"></i> <span>326</span>  </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </main>
    <script src="https://kit.fontawesome.com/6478f529f2.js" crossorigin="anonymous"></script>
</body>
```

```css
.recommended-friends {
  margin: 25px 0px;
  padding-bottom: 25px 0px;
  border-top: var(--main-border);
  border-bottom: var(--main-border);
}

.recommended-friends__title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
}

.recommended-friends span {
  display: block;
  margin: 100px 0px;
  text-align: center;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
}

.open-chat__header {
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
  margin-bottom: 25px;
}

.open-chat__header span {
  opacity: 0.6;
}

.open-post {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.open-post__title {
  font-weight: 600;
  margin-bottom: 7px;
}

.open-post__hashtags {
  text-transform: uppercase; /*소문자를대문자로*/
  opacity: 0.6;
}

.open-post__members {
  margin-top: 7px;
  display: flex;
  align-items: center;
}

.open-post__members img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 5px;
}

.open-post__member-count {
  opacity: 0.5;
  font-size: 14px;
}

.open-post__members .divider {
  width: 2px;
  height: 15px;
  margin: 0px 5px;
  background-color: rgba(0, 0, 0, 0.2);
}

.open-post__member-status {
  color: #ffb0e0;
}

.open-post__photo {
  position: relative;
}

.open-post__photo img {
  width: 120px;
  height: 120px;
  border-radius: 10px;
}

.open-post__heart-count {
  /* "하트326" 사이즈 및 색상 조절*/
  right: 10px;
  font-size: 17px;
  color: white;

  /* "하트326" 배경색넣기 */
  background-color: rgba(0, 0, 0, 0.8);

  padding: 5px; /* "하트326"과 배경색공간 조절*/
  border-radius: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
}

.open-post__heart-count span {
  margin-left: 3px; /*하트와 326사이 간격*/
}

@keyframes heartBeat {
  0% {
    color: white;
    transform: none;
  }
  50% {
    color: tomato;
    transform: scale(1.5);
  }
  100% {
    color: white;
    transform: none;
  }
}

.open-post__heart-count:hover i {
  will-change: transform;
  animation: heartBeat 1s linear infinite;
}
```


* Step5- more화면
```html
<body>
    <main class="main-screen more-screen">
        <div class="user-component">
            <div class="user-component__column">
                <img src="jeawon.jpg" class="user-componet__avatar user-componet__avatar--xl">
                <div class="user-component__text">
                    <h4 class="user-component__title">jeawon</h4>
                    <h6 class="user-component__subtitle">+10-7895-6677</h6> 
                </div>
            </div>
            <div class="user-component__column">
                <i class="far fa-comment-alt fa-2x "></i>
            </div>
        </div>
        <div class="icon-row">
            <div class="icon-row__icon"><i class="fas fa-calendar"></i><span>Calender</span></div>
            <div class="icon-row__icon"><i class="fas fa-smile-beam"></i><span>Emoticons</span></div>
            <div class="icon-row__icon"></i><i class="fas fa-paint-roller"></i><span>Themes</span></div>
            <div class="icon-row__icon"><i class="fas fa-file-invoice-dollar"></i><span>Account</span></div>
        </div>

        <div class="more-suggestions">
            <h4 class="more-suggestions__title">Suggestions</h4>
            <div class="more-suggestions__icons">
                <div class="more-suggestions__icon">
                    <div class="more-suggestions__icon-image"> <i class="fas fa-quote-right"></i> </div>
                    <span class="more-suggestions__icon-text">Kokoa Story</span>
                </div>

                <div class="more-suggestions__icon">
                    <div class="more-suggestions__icon-image"> <i class="fas fa-quote-right"></i> </div>
                    <span class="more-suggestions__icon-text">Kokoa Friend</span>
                </div>
            </div>   
        </div>
    </main>
 <script src="https://kit.fontawesome.com/6478f529f2.js" crossorigin="anonymous"></script>
</body>
```

```css
.more-screen .icon-row {
  margin-top: 25px;
}

.more-suggestions {
  margin-top: 50px;
  border-top: var(--main-border);
  padding-top: 40px;
}

.more-suggestions__title {
  margin-bottom: 30px;
}

.more-suggestions__icons {
  display: flex;
}

.more-suggestions__icon {
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.more-suggestions__icon-image {
  width: 60px;
  height: 60px;
  background-color: var(--yellow);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.more-suggestions__icon-image i {
  font-size: 30px;
  color: white;
}
```


* Step6- 세팅화면 
```html
<body>
    <main class="main-screen">
        <ul class="settings-list">
            <li class="settings__setting">
                <div class="settings__setting-column">
                    <i class="fas fa-bullhorn"></i>
                    <span>Notices</span>
                </div>
                <div class="settings__setting-column"></div>
            </li>
            <li class="settings__setting">
                <div class="settings__setting-column">
                    <i class="fas fa-flask"></i>
                    <span>Lab</span>
                </div>
                <div class="settings__setting-column"></div>
            </li>
            <li class="settings__setting">
                <div class="settings__setting-column">
                    <i class="fas fa-info-circle"></i>
                    <span>Version</span>
                </div>
                <div class="settings__setting-column">Latest Version</div>
            </li>
        </ul>
    </main>
    <script src="https://kit.fontawesome.com/6478f529f2.js" crossorigin="anonymous"></script>
</body>
```

```css
.settings__setting {
  padding: 20px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.settings__setting i {
  opacity: 0.8;
  margin-right: 20px;
  font-size: 22px;
}

.settings__setting-column:last-child {
  opacity: 0.7;
}
```


* Step7- Spiash화면 & TooBig화면 
```html
<body>
    <div id="splash-screen">
        <img src="메인화면2.PNG"" >
    </div>
    <div id="no-mobile">
        <span class="wave"></span>
        <span>Your Screen is too big</span>
    </div>
</body>
```

```css
#no-mobile {
  position: absolute;
  z-index: 99;
  height: 100vh;
  width: 100vw;
  background-color: #28e7ff;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: black;

  transform: translate3d(0, 0, 0);
}

@media screen and (max-width: 645px) {
  /*645보다 커지면 #no-mobile 실행*/
  #no-mobile {
    display: none;
  }
}

.wave {
  opacity: 0.3;
  position: absolute;
  bottom: 50%;
  left: 50%;
  background: white;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-bottom: -290px;
  transform-origin: 50% 50%;
  border-radius: 43%;
  transition-duration: 1s;
  transition-property: none;
  transition-timing-function: ease;
  margin-bottom: -250px;
  animation: rotate 5s infinite linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}

#splash-screen {
  background-color: var(--yellow);
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150px;
  animation: hideSplashScreen 0.4s ease-in-out forwards;
  animation-delay: 1s;
}

#splash-screen img {
  width: 300px;
  height: 300px;
}
```




</br>

### 4). 문제발생과 해결 (or 이해가 안되었던부분)
#### Case1. CSS flex에서 align-items과 justify-content 속성
* CSS에서 제일 중요하다고 생각하는 align-items과 justify-content 속성을 배우면서 중심축, 교차축에 대해 헷갈려
  두 속성을 바꿔서 작성하여 레이아웃이 망가져버린적이 있습니다. 
    * align-items과 justify-content을 잘 표현한 그림을 참조하여 틀리지 않으려고 노력하였고, FLEXBOX FROGGY 사이트에서 연습과 다른 웹사이트를 돌아다니며 align-items과 justify-content를 구분하는 연습을 하였습니다.
    
 

#### Case2. CSS position에서 absolute와 relative 속성
* 하위 태그에서 absolute를 적용해놓고 부모에서 relative를 작성하지 않아 몇시간 동안 헤맨적이 있습니다.
    * align-items과 justify-content때와 마찬가지로 연습을 통해 해결해 나가고자 했습니다.

</br>

### 5). 보안점
* 연습을 통해 웹사이트를 레이아웃별로 구분할 수 있는 능력을 갖춰야 합니다. 

</br>
</br>

# 5. Learned (배운것)
* position: absolute relative
    * https://creamilk88.tistory.com/197
    * https://www.w3schools.com/css/css_positioning.asp
    * https://developer.mozilla.org/ko/docs/Web/CSS/position

* flex: align-items, justify-content
    * https://ipex.tistory.com/entry/CSS3-flex-Box-justifycontent-alignitems
    * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
    * https://www.w3schools.com/cssref/css3_pr_justify-content.asp

</br>
</br>


# 6. Result (결과)
![kakaotalk_sample](https://user-images.githubusercontent.com/73148498/166657693-9cb4b629-6115-46e4-852b-9a6d32b81a2b.gif)

</br>
</br>


# 7. Relase Note

|버전|내용|날짜|
|------|---|---|
|v1.0.0| 카카오톡 애플리케이션 </br>-Skills: HTML , CSS|2022.10.06|
|테스트1|테스트2|테스트3|
|테스트1|테스트2|테스트3|






