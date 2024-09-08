"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const mongoose = require("mongoose");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    await mongoose.connect('mongodb+srv://tranxuanlonga555:%40Long12345@aws.95kyn.mongodb.net/?retryWrites=true&w=majority&appName=aws', {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API Example')
        .setDescription('The API description')
        .setVersion('1.0')
        .addTag('example')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map