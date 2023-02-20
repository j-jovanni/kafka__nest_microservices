"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.KAFKA,
        options: {
            consumer: {
                groupId: 'kafka-consumers'
            },
            client: {
                clientId: "APP_CLIENT",
                brokers: [`${process.env.BROKER_KAFKA || 'localhost'}:9093`],
            }
        }
    });
    app.startAllMicroservices();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map