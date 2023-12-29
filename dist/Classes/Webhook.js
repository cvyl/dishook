"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhook = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const Request_1 = require("./Request");
class Webhook {
    constructor(hookUrl) {
        this.client = new Request_1.Request(axios_1.default.create({
            baseURL: hookUrl,
        }));
    }
    setAvatarUrl(url) {
        this.avatar_url = url;
        return this;
    }
    setUsername(username) {
        this.username = username;
        return this;
    }
    setContent(content) {
        this.content = content;
        return this;
    }
    addEmbed(embed) {
        var _a;
        (_a = this.embeds) === null || _a === void 0 ? void 0 : _a.push(embed.toObject());
        return this;
    }
    setTTS(tts) {
        this.tts = tts;
        return this;
    }
    setFile(file) {
        this.file = file;
        return this;
    }
    send() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client
                .send('post', this.toObject())
                .then((res) => res)
                .catch((err) => err);
        });
    }
    get() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client
                .send('get', {})
                .then((res) => res)
                .catch((err) => err);
        });
    }
    modify(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client
                .send('patch', options)
                .then((res) => res)
                .catch((err) => err);
        });
    }
    delete() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client
                .send('delete', {})
                .then((res) => res)
                .catch((err) => err);
        });
    }
    toObject() {
        const obj = {};
        if (this.content)
            obj.content = this.content;
        if (this.username)
            obj.username = this.username;
        if (this.avatar_url)
            obj.avatar_url = this.avatar_url;
        if (this.tts)
            obj.tts = this.tts;
        if (this.file)
            obj.file = this.file;
        if (this.embeds)
            obj.embeds = this.embeds;
        return obj;
    }
    static getWebhook(id, token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`https://discord.com/api/webhooks/${id}/${token}`);
        });
    }
    isValid() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.send('get', {}).then((res) => {
                if (res)
                    return true;
                return false;
            });
        });
    }
}
exports.Webhook = Webhook;
