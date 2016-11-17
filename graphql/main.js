"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var graphql_1 = require("graphql");
// import { firebaseApp } from './firebase-initializer';
var data_1 = require("./data");
exports.graphqlAzureFunction = function (context, req) { return __awaiter(_this, void 0, void 0, function () {
    var query, variables, contextValue, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                query = (req.body && req.body.query) ? req.body.query : "\n    {\n      users {\n        id\n        name\n        hobby {\n          id\n          name\n        }\n        follow {\n          id\n          name\n          follow {\n            id\n            name\n          }\n        }\n      }\n    }\n  ";
                variables = (req.body && req.body.variables) ? req.body.variables : null;
                contextValue = {
                    loaders: data_1.createLoaders()
                };
                console.log('query:', query);
                console.log('variables:', variables);
                console.log('contextValue:', contextValue);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, graphql_1.graphql(data_1.executableSchema, query, null, contextValue, variables)];
            case 2:
                result = _a.sent();
                context.res = {
                    status: 200,
                    body: result
                };
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                context.res = {
                    status: 400,
                    body: err_1
                };
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, context];
        }
    });
}); };
