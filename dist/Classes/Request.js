"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const tslib_1 = require("tslib");
class Request {
    constructor(axios) {
        this.axios = axios;
        this.retries = 1;
    }
    send(method, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.request({
                    method,
                    data,
                });
                const result = response.data;
                if (result.status === 429 && this.retries < 3) {
                    this.retries += 1;
                    return this.send(method, data);
                }
                this.retries = 1;
                return result;
            }
            catch (error) {
                if (error.isAxiosError) {
                    const axiosError = error;
                    if (axiosError.response) {
                        return axiosError.response.data;
                    }
                }
            }
        });
    }
}
exports.Request = Request;
