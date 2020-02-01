
$(document).ready(function() {
    paper.install(window);  // paper.js 전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas'));  // 해당 id에 paper.js 연동

    paper.view.draw();  // 그림기르기 명령

    // 1. 캔버스 중앙에 녹색원 그리기
    var c = Shape.Circle(200,200,50);
    c.fillColor = 'green';
})
