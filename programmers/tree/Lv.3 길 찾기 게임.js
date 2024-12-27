/**
 * 플랫폼: Programmers
 * 문제: 길 찾기 게임 [이진트리 순회]
 * 레벨: 3
 * 유형: Tree, DFS
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42892
 * 
 * 접근방법:
 * 1. y좌표 기준 내림차순 정렬로 레벨 결정
 * 2. x좌표로 왼쪽/오른쪽 자식 결정하여 이진트리 구축
 * 3. 전위/후위 순회 구현
 * 
 * 시간복잡도: 
 * - 정렬: O(n log n)
 * - 트리 구축: O(n log n)
 * - 순회: O(n)
 * 총: O(n log n)
 * 
 * 공간복잡도: O(n)
 * - 노드 저장: O(n)
 * - 순회 결과 배열: O(n)
 */

// 솔루션 코드
class Node {
    constructor (value, x, y) {
        this.value = value;
        this.x = x;
        this.y = y;
        this.left = null;
        this.right = null;
    }
}

function solution(nodeinfo) {
    const nodes = nodeinfo
        .map((node, i) => new Node(i + 1, node[0], node[1]))
        .sort((a, b) => b.y - a.y);
    const root = nodes[0];

    for (let i = 1; i < nodes.length; i++) {
        insertNode(root, nodes[i])
    }
    return [findPre(root), findPost(root)];
}

function insertNode (parent, node) {
    if (node.x < parent.x) {
        if (parent.left === null) {
            parent.left = node;
        } else {
            insertNode(parent.left, node);
        }
    } else {
        if (parent.right === null) {
            parent.right = node;
        } else {
            insertNode(parent.right, node);
        }
    }
}

function findPre (node, result = []) {
    if (!node) return result;
    result.push(node.value);
    if (node.left) findPre(node.left, result);
    if (node.right) findPre(node.right, result);
    return result;
}

function findPost (node, result = []) {
    if (!node) return result;
    if (node.left) findPost(node.left, result);
    if (node.right) findPost(node.right, result);
    result.push(node.value);
    return result;
}