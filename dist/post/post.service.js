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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const post_model_1 = require("./schema/post.model");
const response_dto_1 = require("../common/dto/response_dto");
const mongodb_1 = require("mongodb");
let PostService = class PostService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async findAll() {
        const posts = await this.postModel.find().exec();
        return new response_dto_1.ResponseDto(common_1.HttpStatus.OK, posts, 'User created successfully');
    }
    async create(postDto) {
        const currentDate = new Date();
        const post = new post_model_1.default({
            title: postDto.title,
            description: postDto.description,
            author: postDto.author,
            likes: 0,
            views: 0,
            createdDate: currentDate,
        });
        const isExist = await this.postModel.findOne({
            title: postDto.title,
            description: postDto.description,
            author: postDto.author,
        });
        if (isExist) {
            return new response_dto_1.ResponseDto(common_1.HttpStatus.BAD_REQUEST, null, 'User already exist');
        }
        try {
            const savedPost = await post.save();
            if (savedPost) {
                return new response_dto_1.ResponseDto(common_1.HttpStatus.OK, savedPost, 'User created successfully');
            }
            else {
                return new response_dto_1.ResponseDto(common_1.HttpStatus.BAD_REQUEST, null, 'User created failed');
            }
        }
        catch (error) {
            console.error('Error saving user:', error);
            throw new Error(`Error creating user: ${error.message}`);
        }
    }
    async update(id, postDto) {
        const currentDate = new Date();
        const nid = new mongodb_1.BSON.ObjectId(id);
        const post = new post_model_1.default({
            title: postDto.title,
            description: postDto.description,
            author: postDto.author,
            likes: postDto.likes,
            views: postDto.views,
            lastUpdateDate: currentDate,
        });
        const isExist = await this.postModel.findOne({
            title: postDto.title,
            description: postDto.description,
            author: postDto.author,
        });
        if (isExist) {
            return new response_dto_1.ResponseDto(common_1.HttpStatus.BAD_REQUEST, null, 'User already exist');
        }
        try {
            const newPost = await this.postModel.findByIdAndUpdate(nid, post, {
                new: true,
            });
            if (newPost) {
                return new response_dto_1.ResponseDto(common_1.HttpStatus.OK, newPost, 'User created successfully');
            }
            else {
                return new response_dto_1.ResponseDto(common_1.HttpStatus.BAD_REQUEST, null, 'User created failed');
            }
        }
        catch (error) {
            console.error('Error saving user:', error);
            throw new Error(`Error creating user: ${error.message}`);
        }
    }
    async findOne(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException('Invalid ID format');
        }
        const nid = new mongodb_1.BSON.ObjectId(id);
        try {
            const post = await this.postModel.findOne({
                _id: nid,
            });
            return new response_dto_1.ResponseDto(common_1.HttpStatus.OK, post, 'User created successfully');
        }
        catch (error) {
            throw new Error(`Error get post: ${error.message}`);
        }
    }
    async increaseView(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException('Invalid ID format');
        }
        const nid = new mongodb_1.BSON.ObjectId(id);
        const post = await this.postModel.findOne({
            _id: nid,
        });
        try {
            const newPost = await this.postModel.findByIdAndUpdate(nid, {
                ...post,
                views: post.views++,
            }, { new: true });
            return new response_dto_1.ResponseDto(common_1.HttpStatus.OK, newPost, 'View of post increase 1 point');
        }
        catch (error) {
            throw new Error(`Error post: ${error.message}`);
        }
    }
    async increaseLike(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException('Invalid ID format');
        }
        console.log('id', id);
        const nid = new mongodb_1.BSON.ObjectId(id);
        const post = await this.postModel.findOne({
            _id: nid,
        });
        try {
            const newPost = await this.postModel.findByIdAndUpdate(nid, {
                ...post,
                likes: post.likes++,
            }, { new: true });
            return new response_dto_1.ResponseDto(common_1.HttpStatus.OK, newPost, 'Like of post increase 1 point');
        }
        catch (error) {
            throw new Error(`Error post: ${error.message}`);
        }
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Post')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostService);
//# sourceMappingURL=post.service.js.map