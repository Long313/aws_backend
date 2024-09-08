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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const user_model_1 = require("./schema/user.model");
const respon_dto_1 = require("../common/dto/respon_dto");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async create(userDto) {
        console.log('User DTO:', userDto);
        const hashedPassword = await bcrypt.hash(userDto.password, 10);
        const user = new user_model_1.default({
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
        console.log('isExist', isExist);
        if (isExist) {
            return new respon_dto_1.ResponseDto(common_1.HttpStatus.BAD_REQUEST, null, 'User already exist');
        }
        try {
            const savedUser = await user.save();
            if (savedUser) {
                return new respon_dto_1.ResponseDto(common_1.HttpStatus.OK, savedUser, 'User created successfully');
            }
            else {
                return new respon_dto_1.ResponseDto(common_1.HttpStatus.BAD_REQUEST, null, 'User created failed');
            }
        }
        catch (error) {
            console.error('Error saving user:', error);
            throw new Error(`Error creating user: ${error.message}`);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map