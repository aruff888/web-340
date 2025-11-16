/**
 * Author: Amanda Ruff
 * Date: 11/16/25
 * File Name: taco-stand.js
 * Description: Taco Stand Emitter Module
 */

"use strict";

import EventEmitter from "events";

export default class TacoStandEmitter extends EventEmitter {
    serveCustomer(customer) {
        this.emit("serve", customer);
    }

    prepareTaco(taco) {
        this.emit("prepare", taco);
    }

    handleRush(rush) {
        this.emit("rush", rush);
    }
}
