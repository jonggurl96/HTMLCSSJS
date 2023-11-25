/**
 * 눈에 보이는 화면 가로 길이
 */
const containerWidth = document.querySelector('.container').clientWidth;

/**
 * 박스들을 감싸는 긴 컨테이너의 가로 길이
 */
const boxWidth = document.querySelector('.container-box').clientWidth;

/**
 * 마지막 박스 position
 */
const maxPosition = (document.querySelector('.container').childElementCount - 1) * boxWidth;

let position = 0;

document.querySelector('.prev').addEventListener("click", () => {
    if(position === 0) return;
    position += boxWidth;
    document.querySelector('.container').style.transform = `translate(${position}px)`;
});

document.querySelector('.next').addEventListener("click", () => {
    if(position === -maxPosition) return;
    position -= boxWidth;
    document.querySelector('.container').style.transform = `translate(${position}px)`;
});