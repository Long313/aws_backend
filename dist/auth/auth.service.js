"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("../user/entity/user.entity");
const bcrypt = require("bcrypt");
const response_dto_1 = require("../common/dto/response_dto");
let AuthService = class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async register(userDto) {
        const hashedPassword = await bcrypt.hash(userDto.password, 10);
        const user = new user_entity_1.UserEntity({
            name: userDto.name,
            birthday: new Date(userDto.birthday),
            email: userDto.email,
            password: hashedPassword,
            gender: userDto.gender,
        });
        const isExist = await this.userModel.findOne({
            name: user.name,
            birthday: user.birthday,
            email: user.email,
        });
        if (isExist) {
            return new response_dto_1.ResponseDto(common_1.HttpStatus.BAD_REQUEST, null, 'User already exist');
        }
        try {
            const savedUser = await user.save();
            if (savedUser) {
                return new response_dto_1.ResponseDto(common_1.HttpStatus.OK, savedUser, 'User created successfully');
            }
            else {
                return new response_dto_1.ResponseDto(common_1.HttpStatus.BAD_REQUEST, null, 'User created failed');
            }
        }
        catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }
    async login(loginDto) {
        const isExist = await this.userModel.findOne({
            email: loginDto.email,
        });
        console.log('isExist', isExist);
        console.log('password', isExist.password);
        if (!isExist) {
            throw new Error('User not exist');
        }
        else if (bcrypt.compare(loginDto.password, isExist.password)) {
            return new response_dto_1.ResponseDto(common_1.HttpStatus.OK, null, 'Login success');
        }
        else {
            return new response_dto_1.ResponseDto(common_1.HttpStatus.BAD_REQUEST, null, 'Login failed');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map