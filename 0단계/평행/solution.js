fuction getInc([x1, y1], [x2, y2]){
    const y = y2 - y1;
    const x = x2 - x1;

    return y / x;
}

function solution(dots){
    //두 직선이 평행이 되는 경우 = 기울기가 같다.
    //기울기를 구하는 함수를 작성 후, 주어진 네개의 점으로 모든 경우를 비교한다.

    //구조 분해
    const [a,b,c,d] = dots;

    if(getInc(a,b) === getInc(c,d)){
        return 1;
    }
    if(getInc(a,c) === getInc(b,d)){
        return 1;
    }
    if(getInc(a,d) === getInc(b,d)){
        return 1;
    }
    else return 0;
}