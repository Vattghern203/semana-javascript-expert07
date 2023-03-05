export default class Controller {

    constructor({  }) {

    }

    static async initalize(deps) {

        const controller = new Controller(deps)

        return controller.init()
    }

    async init() {
        console.log("Init!")
    }
}