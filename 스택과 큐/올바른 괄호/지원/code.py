function solution(s){
    let answer = true;
    const stack = [];
    
     s.split("").forEach((item) => {
        if (item === "(") {
            stack.push(item);
        } else { // item === ")"
            if (stack.length === 0) {
                answer = false;
                return false;
            }
            else {
                if (stack[stack.length - 1] === "(") {
                    stack.pop();
                }
                return false;
            }
        }
    })
    if (stack.length !== 0) { return false; }
    
    return answer;
}