class ListNode {
    private value;
    private next;

    constructor (value, next) {
        this.value = value ? value : null;
        this.next = next ? next : null;
    }

    public getValue() {
        return this.value;
    }
    public getNext() {
        return this.next;
    }
    public setValue(value) {
        this.value = value;
    }
    public setNext(next) {
        this.next = next;
    }
}