
var Node = function (data) {
    this.data = data;
    this.next = null;
}

function insert(head, data) {
    if (head == null) {
        head = Object.create(Node);
        head.data = data;
        return head;
    }
    else {
        var tempNode = head;
        while (tempNode.next != null) {
            tempNode = tempNode.next;
        }
        var m = Object.create(Node);
        m.data = data;
        tempNode.next = m;
        return head;
    }
}

console.log(insert(null, 4));