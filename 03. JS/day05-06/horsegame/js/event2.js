let x = 0; 

// STEP1. moveLeft 함수를 선언한다. 
const moveLeft = ()=>{
    console.log('left');
    x += 50
    if(x>0 && x<1250){document.getElementById('horse').style.right = x+'px';}
    console.log(document.getElementById('horse').style.right);
}
// STEP5. moveLeft 함수 안에 내용을 넣는다 
//        5-1) id가 horse 인 말을 js로 가져온다.
//        5-2) moveLeft 함수가 호출 될 때 마다, 그 말이 왼쪽으로 50px씩 이동
//              단, 말은 배경을 벗어나지 않도록 한다. 

// STEP2. moveRight 함수를 선언한다. 
// STEP6. moveRight 함수 안에 내용을 넣는다. 
//        6-1) id가 horse 인 말을 js로 가져온다. 
//        6-2) moveRight 함수가 호출 될 때 마다, 그 말이 오른쪽으로 50px씩 이동 
const moveRight = ()=>{
    console.log('right');
    x -= 50
    if(x>0 && x<1250){document.getElementById('horse').style.right = x+'px';}
    console.log(document.getElementById('horse').style.right);
}

//              단, 말은 배경을 벗어나지 않도록 한다. 

// STEP3. 'btn' 이라는 클래스 이름을 가진 첫번째 버튼 (LEFT)을 누르면,
//          moveLeft 함수가 호출된다.
let btn_left = document.getElementsByClassName('btn')[0];
btn_left.addEventListener('click', moveLeft);

// STEP4. 'btn' 이라는 클래스 이름을 가진 두번째 버튼 (RIGHT) 를 누르면,
//          moveRight 함수가 호출된다. 
let btn_right = document.getElementsByClassName('btn')[1];
btn_right.addEventListener('click', moveRight);


// **힌트
// 1. 오른쪽과 왼쪽은 결국 하나의 축으로 이루어져있다. 
// 2. js 로만 해결하는게 헷갈린다면 css로 가서 이것저것 수정해보면서 
//      내가 수정해줘야할 스타일을 적용해 볼 것 
// 3. 익명함수 사용 X , 꼭 함수 선언해서 사용할 것 

const jump = ()=>{
    console.log('jump f');

    document.getElementById('horse').animate([
        {bottom : '200px'},
        {bottom : '400px'},
        {bottom : '200px'}
    ],{
        duration : 500
    });
}

// +) 추가기능 1 : 키보드로 조작하기 
// 대상 : 브라우저 전체 = body태그 
// 눌렀을 때 입력되는 키 확인 : 타겟 
document.getElementsByTagName('body')[0].addEventListener('keydown', (e)=>{
    // 키 입력값 확인 : 타겟 출력
     console.log(e);

    if(e.key === "ArrowLeft"){
        moveLeft();
    } else if (e.key==="ArrowRight"){
        moveRight();
    } else if (e.key === " "){
        jump();
    }
 });

