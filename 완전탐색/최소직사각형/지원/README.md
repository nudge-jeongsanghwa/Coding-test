## 풀이 방법

주어진 모든 명함을 모두 담을 수 있는 가장 작은 지갑의 크기를 구하는 것이며, 따로 회전 수에 대한 제약이 없기 때문에 모든 명함에 대하여 회전한 경우, 회전하지 않은 경우에 만들어지는 지갑의 크기를 구함.

회전한 경우 만들어지는 지갑의 크기(`max_w2 * max_h2`)와 회전하지 않은 경우 만들어지는 지갑의 크기(`max_w1 * max_h1`) 중 작은 것이 새로운 지갑의 크기


## Tip

 명함들을 적절히 회전시켜 겹쳤을 때, 모든 명함을 포함하는 가장 작은 지갑의 크기를 구해야 함 => 각 명함을 회전하거나 회전하지 않는 경우 모두를 탐색하여 최적 해를 구해야하여 완전탐색 알고리즘