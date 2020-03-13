import * as dotenv from "dotenv";

dotenv.config();

const main = async (): Promise<void> => {
    console.log(process.env.MONGODB_URL);
    
    return;
}

main();
