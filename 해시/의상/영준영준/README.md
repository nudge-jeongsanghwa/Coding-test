## 풀이 방법

배열을 순회하며 의상의 종류별로 각각 몇 개씩을 가지고 있는지 저장하는 맵을 만듭니다.

이후 종류별 갯수를 모두 곱해 옷차림의 경우의 수를 구해야 하는데, 코니는 한 종류의 의상을 반드시 착용하지는 않습니다. 오히려 모든 부위를 통틀어서 옷을 하나만 입는 경우도 있습니다. 즉, 옷을 다 벗을 채로 선글라스 하나만 쓰는 경우도 있는 파격적인 패셔니스타라는 것이죠?

그렇기 때문에 한 종류의 의상을 하나도 착용하지 않은 경우도 고려해야 합니다. 다만, 의상을 하나도 입지 않는 경우는 없습니다. 그 정도로 파격적이지는 않은 가봐요. 우리 코니 정말 문명인이죠? 이를 위해 각 종류별 갯수에 1을 더한 수를 모두 곱해주고, 1을 빼주면 됩니다.

시간복잡도는 O(n)입니다.
