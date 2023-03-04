class Rectangle {
    #area; // Propertie private
    base;
    height;

    constructor(base = 0, height = 0) {
        this.base = base;
        this.height = height;
        this.#area = base * height;
    }

    #method() {
        console.log("Area : 10");
    }
}

const rectangle = new Rectangle(10, 15);
console.log(rectangle);
