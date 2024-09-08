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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PostDto {
}
exports.PostDto = PostDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The title of the post' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The description of the post' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The author of the post' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The total views of the post' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PostDto.prototype, "views", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The total likes of the post' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PostDto.prototype, "likes", void 0);
//# sourceMappingURL=post.dto.js.map