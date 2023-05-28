"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const router_1 = __importDefault(require("./router"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
const port = config_1.default.port;
server.get('/', (req, res) => {
    res.send('siema');
});
server.use(express_1.default.urlencoded({ extended: true }));
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.use('/api', router_1.default);
server.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`));
